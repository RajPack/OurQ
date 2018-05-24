let configData = {
    chartWidth:550,
    chartHeight: 320,
    data: [
        {
            label: "On Hold",
            value: 10
        },
        {
            label: "Shipping",
            value: 3
        },
        {
            label: "Repair Completed",
            value: 42
        },
        {
            label: "Repair Started",
            value: 20
        },
        {
            label: "Received",
            value: 12
        },
        {
            label: "Open",
            value: 19
        }
    ]
}

document.addEventListener("DOMContentLoaded", () => {
    HbarChartAPI.createChart('.chart-container', configData);
});


let HbarChartAPI= (()=>{
    const svgNS = "http://www.w3.org/2000/svg";
    const chartWidth = 600, chartHeight = 400;
    let svgWidth, svgHeight, GraphX, LabelX, GraphHeight, GrossBarHeight, UnitBarHeight, labelSectionWidth, GraphSectionWidth, MaxValue, BarColor, UnitWidth, LabelSize;

    function generateChart(el, config){
        let svg = init(config);
        renderGraphBars(svg, configData.data||[]); 
        renderGraphLabels(svg, configData.data||[]);
        renderGrids(svg, config.data || []);
        render(svg, el );
    }

    function init(config){
        setChartParams(config);
        let svg = createSVG(svgWidth, svgHeight);  
        return svg;
    }

    function setChartParams(config){
        svgWidth = config.chartWidth || chartWidth;
        svgHeight = config.chartHeight || chartHeight;
        GraphX = 0+ (30*svgWidth/100);
        LabelX = 40;
        GraphSectionWidth = svgWidth-GraphX-10;
        labelSectionWidth = GraphX-LabelX;
        GraphHeight = svgHeight-40;
        GrossBarHeight = GraphHeight/(config.data.length || 1);
        UnitBarHeight = GrossBarHeight/3;
        BarColor = config.BarColor || "#3882b0";
        LabelSize = svgWidth > 650 ? "15px" : (svgWidth > 400 ? "13.5px" : (svgWidth > 300 ? "12.5px" : "12px"));
    }

    function renderGraphBars(svg, dataArr){
        let g = document.createElementNS(svgNS, 'g');
        g.setAttribute("class", "bar-group");
        MaxValue = dataArr.reduce((max, current, currentIndex)=>{
            return max = current.value > max ? current.value : max;
        },0);
        UnitWidth = GraphSectionWidth/(MaxValue+10);
        dataArr = dataArr.map((item) =>{
            item.width = UnitWidth*item.value;
            return item;
        });
        dataArr.forEach((item, index)=>{
            g.appendChild(createRect(GraphX,((UnitBarHeight*index*3)+UnitBarHeight), item.width, UnitBarHeight, item.value, BarColor));
        });
        svg.appendChild(g);
    }
    function renderGraphLabels(svg, dataArr){
        let g = document.createElementNS(svgNS, 'g');
        dataArr.forEach((item, index)=>{
            g.appendChild(createLabel(GraphX-20, ((UnitBarHeight*index*3)+(2*UnitBarHeight-4)), item.label));
        });
        let style = document.createElement('style');
        style.appendChild(document.createTextNode('.graph_label {font-size: '+LabelSize+'; fill: #555555; font-family: "arial"} .bar-group rect:hover{fill: #008900 !important;;}'));
        g.appendChild(style)
        svg.appendChild(g);
    }
    function renderGrids(svg, dataArr){
        let g = document.createElementNS(svgNS, 'g');
        g.setAttribute("class", "lines-group");
        let upperLimit, grids=[], stepFactor = MaxValue <= 12 ? 2 : (MaxValue<=40 ? 5: (MaxValue>100 ?  (MaxValue>200? 40 : 20) : 10));
        upperLimit = ((MaxValue/10)+1)*10;
        for(var i=0; i<= upperLimit; i += stepFactor){
            grids.push({
                width: i*UnitWidth,
                label: i
            })
        }
       grids.forEach((grid, index)=>{
            let x1 = GraphX+grid.width,
                y1 = GraphHeight,
                x2 = GraphX+grid.width,
                y2 = 0;
            g.appendChild(createLine(x1, y1, x2, y2,"black"));
            g.appendChild(createLabel(x1+5, y1+20, grid.label));
       })
       svg.appendChild(g);
    }

    function createRect(x,y,width, height, val, fillColor, strokeColor, strokeWidth){
        let rect = document.createElementNS(svgNS,'rect');
        rect = setAttributes(rect, [
            {attr: "x", val: x},
            {attr: "y", val: y},
            {attr: "width", val: width},
            {attr: "height", val: height},
            {attr: "style", val: `fill: ${fillColor}; stroke: ${strokeColor || 'white'}; stroke-width: ${strokeWidth || 0}`},
            {attr: "data-val", val:val}
        ]);
        let animate = document.createElementNS(svgNS, 'animate');
        animate = setAttributes(animate, [
            {attr: "attributeName", val: "width"},
            {attr: "from", val: 0},
            {attr: "to", val: width},
            {attr: "begin", val: "0s"},
            {attr: "dur", val: "0.8s"}
        ]);
        let title = document.createElementNS(svgNS, 'title');
        title.appendChild(document.createTextNode(val));
        rect.appendChild(title);
        rect.appendChild(animate);
        
        return rect;
    }

    function createLabel(x,y, text){
        let label = document.createElementNS(svgNS, 'text');
        label = setAttributes(label, [
            {attr: "x", val: x},
            {attr: "y", val: y},
            {attr: "text-anchor", val: 'end'},
            {attr: "class", val: "graph_label"},
        ]);
        label.appendChild(document.createTextNode(text));
        return label;
    }

    function createSVG (width, height){
        let svg = document.createElementNS(svgNS,"svg");
        svg = setAttributes(svg, [
            {attr: "width", val: width},
            {attr: "height", val: height}
        ])
        return svg;
    }

    function createLine(x1, y1, x2, y2, color){
        let line = document.createElementNS(svgNS, "line");
        line = setAttributes(line, [
            {attr: "x1", val: x1},
            {attr: "x2", val: x2},
            {attr: "y1", val: y1},
            {attr: "y2", val: y2},
            {attr: "style", val: `stroke: ${color||"black"}; stroke-width: .25`}
        ]);
        return line;
    }

    function render(elemToRender, containerElemSelector) {
        document.querySelector(containerElemSelector).appendChild(elemToRender);
    }


    function setAttributes(elem, attrValArr){
        let attrlist= [...attrValArr];
        return setAttr(attrlist);
        function setAttr(list){
            let item = list.pop();
            elem.setAttributeNS(null, item.attr, item.val );
            return list.length > 0 ? setAttr(list) : elem;
        }
    }

    return {
        createChart : generateChart
        
    }
})();
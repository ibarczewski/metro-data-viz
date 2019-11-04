import React from "react";
import _ from "underscore";
import ReactTooltip from 'react-tooltip';

const BarChartScale = 3;

const BarChartMaker = (ChartDataJson, CallToCount) => {
    // We're assuming chart data is objects containing each week's calls of each
    // type, keyed on that week's log file name (i.e. "YYYY-MM-DD.pdf")
    return <div className='BarChart'>
        {_.map(ChartDataJson, (FileData, FileName) => {
            const week = FileName.substring(0, FileName.indexOf("."));
            return <div key={FileName}>     
                <div>           
                    <div data-tip={week} className='BarChartBox' style={{width:BarChartScale*FileData[CallToCount]}}>
                        {FileData[CallToCount]}
                    </div>
                </div>
            </div>
        })}
        <ReactTooltip />
    </div>
}

export default BarChartMaker;
// import { Pie } from "react-chartjs-2";
import { useRef, useEffect, useState } from "react";

export default function Chart() {

    const dataProps = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Popularity of colours',
                data: [55, 23, 96],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(255, 255, 255, 0.5)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
    return (
        <>oi</>
        // <Pie
        //     data={dataProps}
        // />
    )
}
import React from "react";
import "./index.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const moment = require("moment");

function PDF(props) {
    function makeThatPDF() {

        function objectsToArrays(objectArray) {
            let newArray = [];
            objectArray.forEach(valueSet => {
                newArray.push(Object.values(valueSet))

            })

            console.log(newArray)
            return newArray;
        }


        const currentTime = new moment().format("MMM Do YYYY h:mm a")
        pdfMake.fonts = {
            Roboto: {
                normal: 'Roboto-Regular.ttf',
                bold: 'Roboto-Medium.ttf',
                italics: 'Roboto-Italic.ttf',
                bolditalics: 'Roboto-MediumItalic.ttf'
            }
        };
        const dd = {
            pageSize: "A5",
            pageOrientation: "portrait",
            pageMargins: [10, 10, 10, 10],
            content: [

                {
                    text: `Sales Quote Generated ${currentTime}`, fontSize: 16, alignment: 'center'
                },
                { text: "    ", alignment: 'center' },
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', '*', '*', '*', '*', '*'],
                        body: [
                            [...props.pdfHeaders],
                            ...objectsToArrays(props.pdfValues)
                        ]
                    }
                }
            ],
            defaultStyle: {
                font: "Roboto"
            }
        };
        pdfMake.createPdf(dd).open();
    }
    return (
        <div>
            <button type="button" className="btn exports" onClick={makeThatPDF}>Quote PDF</button>
        </div>
    )

}

export default PDF;
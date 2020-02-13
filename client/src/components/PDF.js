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
                },

                {
                    text: 'GENERAL TERMS OF SALE \n',
                    style: 'header'
                },
                {
                    text: '1. PREAMBLE',
                    style: 'subheader'
                },
                {
                    text: '1.1. These General Terms of Sale shall apply to any FAURE HERMAN sale. A departure from these General Terms of Sale, for a determined sale, is not allowed, save in so far as it was agreed to by the FAURE HERMAN Company in writing.',
                    style: 'small'
                },
                {
                    text: '1.2. The Purchaser has to pay attention especially to the fact that a placed Purchase Order involves his unconditional acceptance of these General Terms of Sale and his rejection of the General Terms of Purchase shown in his commercial documents including especially his order forms and letters.',
                    style: 'small'
                },
                ,
                {
                    text: '2. CONSTITUTION OF THE CONTRACT',
                    style: 'subheader'
                },
                {
                    text: '2.1. The validity time of our bids is two (2) months from the period of submission; after that deadline, they should be confirmed in writing by the FAURE HERMAN Company.',
                    style: 'small'
                },
                {
                    text: '2.2. Was the Purchase Order preceded or not by a bid from the FAURE HERMAN Company, the Contract is regarded as perfect when the Purchaser, after placing a written Purchase Order with the FAURE HERMAN Company, received a Purchase Order acceptance.',
                    style: 'small'
                },
                {
                    text: '2.3. The FAURE HERMAN Company is only bound to its commitments which may be taken by its representatives or employees, provided that it establishes a written confirmation, represented by a duly authorised person. To be taken into account, any telephone or verbal Purchase Order shall be confirmed at once in writing.',
                    style: 'small'
                },
                {
                    text: '2.4. In case of disputes between Purchase Order and acceptance, the Purchase Order acceptance by the FAURE HERMAN Company determines the contents of the contract, unless the Purchaser refused it in writing within the calendar fortnight following the emission date of the aforesaid acceptance.',
                    style: 'small'
                },
                {
                    text: '2.5. As soon as the Contract is perfectly established, any modification shall be only possible by written amendment, accepted and signed by both parties. Any contract amendment will be also managed by the present General Terms of Sale.',
                    style: 'small'
                },
                {
                    text: '2.6. After being accepted by the FAUREHERMAN Company, no Purchase Order cannot be cancelled barring a prior written agreement by the FAURE HERMAN Company and provided that the whole expenses, resulting from this cancellation, are borne and settled by the Purchaser.',
                    style: 'small'
                }
            ],
            styles: {
                header: {
                    fontSize: 8,
                    bold: true
                },
                subheader: {
                    fontSize: 8,
                    bold: true
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 6
                }
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
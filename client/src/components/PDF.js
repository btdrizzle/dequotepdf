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
            pageSize: "letter",
            pageOrientation: "portrait",
            pageMargins: [10, 10, 10, 10],
            content: [


                {
                    text: `Sales Quote Generated ${currentTime}`, fontSize: 14, alignment: 'center'
                },
                { text: "    ", alignment: 'center' },

                {
                    text: 'Customer Name:',
                    style: 'subheader'
                },
                {
                    text: 'Email Address:',
                    style: 'subheader'
                },
                {
                    text: 'Phone Number:',
                    style: 'subheader'
                },
                {
                    text: 'Quote Number:',
                    style: 'subheader'
                },
                {
                    text: 'Date:',
                    style: 'subheader'
                },
                {
                    text: 'Dear ‘Customer Name’, (*NOTE: This quote should be sent to Customers Email Address)',
                    style: 'subheader'
                },
                {
                    text: 'Thank you for visiting our webstore. Please use this quote to place your order by emailing the completed form to  Sales@faureherman.com. Payment may be made by credit card (CC), Purchase Order (PO), or bank transfer.',
                    style: 'subheader'
                },
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
                    text: 'DAP Shipping not included; will be added to order once confirmed.',
                    style: 'subheader'
                },
                {
                    style: 'tableExample',
                    color: '#444',
                    table: {
                        widths: ['auto', 'auto', 'auto'],
                        headerRows: 2,
                        // keepWithHeaderRows: 1,
                        body: [
                            [{ text: 'Payment Methods: PO or Credit card may be entered on form. If bank transfer is preferred, please indicate that and we will contact you for those details by phone.', style: 'tableHeader', colSpan: 3, alignment: 'left' }, {}, {}],
                            [{ text: 'ACH / EFT', style: 'tableHeader', alignment: 'left' }, { text: 'PO', style: 'tableHeader', alignment: 'left' }, { text: 'Credit Card', style: 'tableHeader', alignment: 'left' }],
                            ['Billing Address', { colSpan: 2, text: '' }, ''],
                            ['Delivery Address', { colSpan: 2, text: '' }, ''],
                            ['Contact Name & Phone # for Delivery', { colSpan: 2, text: '' }, ''],
                        ]
                    }
                },
                {
                    style: 'tableExample',
                    color: '#444',
                    table: {
                        widths: ['auto', 'auto', 'auto'],
                        headerRows: 2,
                        // keepWithHeaderRows: 1,
                        body: [
                            [{ text: 'Shipping Options', style: 'tableHeader', colSpan: 3, alignment: 'center' }, {}, {}],
                            [{ text: 'If you have a UPS, FEDEX or any courier service account you would like to use, please indicate here. *Note: A handling fee will be assessed based on the delivery destination. All shipping will be added to the order when acknowledged. Spare parts orders must be paid in full prior to delivery.', style: 'tableHeader', colSpan: 3, alignment: 'left' }, {}, {}],
                        ]
                    }
                },
                {
                    style: 'tableExample',
                    color: '#444',
                    table: {
                        widths: ['auto', 'auto', 'auto'],
                        headerRows: 2,
                        // keepWithHeaderRows: 1,
                        body: [
                            [{ text: 'FOR US CUSTOMERS ONLY', style: 'tableHeader', colSpan: 3, alignment: 'center' }, {}, {}],
                            [{ text: 'If you are a first-time buyer OR if your last purchase was more than 2 years ago, you will need to provide your W9, resale certificate and tax exemption (if applicable) before order can be processed.', style: 'tableHeader', colSpan: 3, alignment: 'left' }, {}, {}],
                        ]
                    }
                },
                {
                    text: 'Once your information has been processed, you will receive an Order Acknowledgement with the specifics of your order confirming lead time & total amount of order, including shipping.',
                    style: 'subheader'
                },
                {
                    text: 'Thank you for your order, we appreciate your business.',
                    style: 'subheader'
                },
                {
                    text: 'Faure Herman',
                    style: 'subheader'
                },
                {
                    text: 'FAURE HERMAN RESPECTS GLOBAL TRADE POLICIES; PRODUCTS WILL NOT BE DELIVERED TO SANCTIONED COUNTRIES',
                    style: 'header'
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
                },

                {
                    text: '3. CONTENTS OF THE CONTRACT',
                    style: 'subheader'
                },
                {
                    text: 'FAURE HERMAN bids, quotations, Purchase Order acceptances are strictly limited to supplies and/or services which are expressly mentioned.',
                    style: 'small'
                },

                {
                    text: '4. DOCUMENTATION-ENGINEERING',
                    style: 'subheader'
                },
                {
                    text: '4.1. The selling price of our goods includes the standard documentation related to each product to be delivered as per the purchase order.',
                    style: 'small'
                },
                {
                    text: '4.2. Weights, dimensions, capacity, performances and further indications appearing in the documentation detailed above Section 4.1 are approximate indications. These data have a contractual value, only if they are expressly indicated or reminded in the FAURE HERMAN Purchase Order acceptance.',
                    style: 'small'
                },
                {
                    text: '5. TERMS AND CONDITIONS OF SALE',
                    style: 'subheader'
                },
                {
                    text: '5.1. Unless expressed at the time of the Purchase Order acceptance, any sale is supposed to be concluded as "Ex-works".',
                    style: 'small'
                },
                {
                    text: '5.2. The interpretation of trade terms such as "Ex-works" or any other expression, as used in the Contract, shall be in accordance with the International Rules for the Interpretation of Trade Terms (INCOTERMS) released by the International Chamber of Commerce, in force on the date of the formation of the Contract and shall include, for each party, the obligations respectively imposed on them by the aforesaid INCOTERMS.',
                    style: 'small'
                },
                {
                    text: '5.3. For the FAURE HERMAN Company, the fact of performing, on request and on behalf of the Purchaser, operations other than the ones it falls to him in accordance with the trade terms as defined in the Contract, cannot, in any event, alter either the aforesaid trade terms, or the Contract contents, the Purchaser"s requestto perform such operations, shall involve necessarily the fact that the FAURE HERMAN Company shall act on the Purchaser"s behalf. The aforesaid operations and costs involved will be separately invoiced to the Purchaser, who commits himself to pay the FAURE HERMAN Company on receipt of the invoice. Especially in the case of an "Ex-works" sale, the FAURE HERMAN Company shall not be involved in the haulage Contract of the goods, even though the FAURE HERMAN Company would participate, in whatever forms it maybe, in the loading or stowing operations of the products, so as to ease the Purchaser"s or haulers work.',
                    style: 'small'
                },
                {
                    text: '6. DELIVERY - PASSING OF TITLE - INSPECTION',
                    style: 'subheader'
                },
                {
                    text: '6.1. The delivery, the passing of risks of the sold goods are supposed to take place, when these goods are placed at the Purchaser"s disposal, in compliance with the trade terms of the Contract. Transfer of title of the goods shall occur only after the buyer has discharged all its obligation towards FAURE HERMAN and especially the complete payment for the total price of the invoice. Until such time as the products shall have been paid for in full by the purchaser, the purchaser undertakes not to transfer or sell or dispose of the products in any manner whatsoever and shall keep the products so that they can be identified at all times as FAURE HERMAN property.',
                    style: 'small'
                },
                {
                    text: '6.2. The FAURE HERMAN Company reserves the right to perform partial deliveries with corresponding partial invoicing.',
                    style: 'small'
                },
                {
                    text: '6.3. All goods are sold and checked by the FAURE HERMAN Company without any inspection by the Purchaser: in case the FAURE HERMAN Purchase Order"s acceptance should schedule an inspection of the goods, this inspection will include, unless expressed otherwise, the following elements:',
                    style: 'small'
                },
                {
                    text: '- The visual inspection: The Inspector shall check the general aspect of the equipment in compliance with the Purchase Order (paint, cleaning), as well as marking (company"s name plate, tag,...). - The dimensional inspection: Tools (sliding calliper, short measuring tape), as well as drawings shall be made at the disposal of the Inspector for the purpose of the examination. - The performance inspection: by sampling of 1 for 5. The inspection activities will take place within the FAURE HERMAN plant, at the Purchaser"s costs, within s working fortnight, from the date of issue of the written inspection notification and according to the provisions defined in the Contract. Any inspection shall immediately involve the drawing-up of an inspection report signed by both parties.',
                    style: 'small'
                },
                {
                    text: '6.4. If the Purchaser, who shall be formally advised, does not attend for the purpose of inspection of the good within the time mentioned above, the inspection shall be carried out by the FAURE HERMAN Company, an inspection report will be transmitted to the Purchaser who will not be able to question the accuracy.',
                    style: 'small'
                },
                {
                    text: '6.5. If the Purchaser or his representative considers that the goods supplied do not comply with the contract specifications, he shall advise the FAURE HERMAN Company by means of a recorded delivery letter with acknowledgement of receipt, which shall be sent within four (4) calendar days at the latest from their reception.',
                    style: 'small'
                },

            ],
            styles: {
                header: {
                    fontSize: 8,
                    bold: true
                },
                subheader: {
                    fontSize: 8,
                    margin: [0, 10, 0, 5]
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 6
                },

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
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
            pageMargins: [20, 20, 20, 20],
            content: [
                {
                    image: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1NTdBRDc0NDY2QzExRUE5MzhEOTM1RUYwMDUwQkFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1NTdBRDc1NDY2QzExRUE5MzhEOTM1RUYwMDUwQkFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTU1N0FENzI0NjZDMTFFQTkzOEQ5MzVFRjAwNTBCQUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTU1N0FENzM0NjZDMTFFQTkzOEQ5MzVFRjAwNTBCQUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAgICAgICAgICAwICAgME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',
                    width: 170,
                    alignment: 'center'
                },
                {
                    text: 'Spare Parts Quotation', fontSize: 14, alignment: 'center'
                },
                { text: "    ", alignment: 'center' },

                {
                    text: 'Customer Name:',
                    style: 'body'
                },
                {
                    text: 'Email Address:',
                    style: 'body'
                },
                {
                    text: 'Phone Number:',
                    style: 'body'
                },
                {
                    text: 'Quote Number:',
                    style: 'body'
                },
                {
                    text: `Date: ${currentTime}`,
                    style: 'body'
                },
                {
                    text: 'Dear ‘Customer Name’, (*NOTE: This quote should be sent to Customers Email Address)',
                    style: 'bodyMargin'
                },
                {
                    text: 'Thank you for visiting our webstore. Please use this quote to place your order by emailing the completed form to  Sales@faureherman.com. Payment may be made by credit card (CC), Purchase Order (PO), or bank transfer.',
                    style: 'bodyMargin'
                },
                {
                    style: 'tableExample',
                    table: {
                        headerRows: 1,
                        widths: ['*', '*', '*', '*', '*', '*'],
                        body: [
                            [...props.pdfHeaders],
                            ...objectsToArrays(props.pdfValues),
                            [{colSpan: 6, text: `Total Cost: ${props.total}`, alignment: 'right'}]
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
                        body: [
                            [{ text: 'FOR US CUSTOMERS ONLY', style: 'tableHeader', colSpan: 3, alignment: 'center' }, {}, {}],
                            [{ text: 'If you are a first-time buyer OR if your last purchase was more than 2 years ago, you will need to provide your W9, resale certificate and tax exemption (if applicable) before order can be processed.', style: 'tableHeader', colSpan: 3, alignment: 'left' }, {}, {}],
                        ]
                    }
                },
                {
                    text: 'Once your information has been processed, you will receive an Order Acknowledgement with the specifics of your order confirming lead time & total amount of order, including shipping.',
                    style: 'bodyMargin'
                },
                {
                    text: 'Thank you for your order, we appreciate your business.',
                    style: 'bodyMargin'
                },
                {
                    text: 'Faure Herman',
                    style: 'bodyMargin'
                },
                {
                    text: 'FAURE HERMAN RESPECTS GLOBAL TRADE POLICIES; PRODUCTS WILL NOT BE DELIVERED TO SANCTIONED COUNTRIES',
                    style: 'marginTB'
                },
                { text: '', pageBreak: 'before', margin: [0, 0, 0, 8] },
                {
                    image: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1NTdBRDc0NDY2QzExRUE5MzhEOTM1RUYwMDUwQkFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1NTdBRDc1NDY2QzExRUE5MzhEOTM1RUYwMDUwQkFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTU1N0FENzI0NjZDMTFFQTkzOEQ5MzVFRjAwNTBCQUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTU1N0FENzM0NjZDMTFFQTkzOEQ5MzVFRjAwNTBCQUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAgICAgICAgICAwICAgME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',
                    width: 150,
                    alignment: 'center'
                },
                {
                    text: 'Orders Processed by Faure Herman France', fontSize: 14, alignment: 'center'
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
                {
                    text: '7. DELIVERY TIME',
                    style: 'subheader'
                },
                {
                    text: '7.1. Unless expressed otherwise m the FAURE HERMAN Purchase Order acceptance, the delivery time is calculated from the latest of the following dates:',
                    style: 'small'
                },
                {
                    text: 'a) Reception by the FAURE HERMAN Company of the information necessary for the execution of the Purchase Order;',
                    style: 'small'
                },
                {
                    text: 'b) Reception of the instalment of the Purchase order',
                    style: 'small'
                },
                {
                    text: '7.2. This delivery time does not take into account the annual holidays and the possible delays resulting from the inspection of goods by the Purchaser.',
                    style: 'small'
                },
                {
                    text: '7.3. If no delivery time is determined in the Contract, the FAURE HERMAN Company shall deliver according to its reduction capacities.',
                    style: 'small'
                },
                {
                    text: '8. DELIVERY DELAYS',
                    style: 'subheader'
                },
                {
                    text: '8.1 The delivery times are respected as best as possible. Delays cannot justify either the Purchase Order cancellation, or the stoppage of payments which are due.',
                    style: 'small'
                },
                {
                    text: '8.2 Subject to provisions of the below Article 14. in case of delivery delays towards the contractual delivery time, a penalty provision shall be applied, provided that this provision is part of the General Terms of Purchase and provided that it is has been accepted by the FAURE HERMAN Company. It shall apply on the value of a or the goods whose delivery was delayed. It shall specify that the penalty cannot be greater than 5% of the value of the same good. A penalty can only be applied, provided that the reason can be solely attributable to the FAURE HERMAN Company and if it caused a real prejudice stated, after due hearing of the days from the scheduled delivery date, his intention to apply the penalty.',
                    style: 'small'
                },
                {
                    text: '9. BELATED COLLECTION',
                    style: 'subheader'
                },
                {
                    text: '9.1. If, for any reason, beyond the FAURE HERMAN Company"s control, the Purchaser does not collect the goods on the date scheduled in the contract, he is nevertheless forced to respect the contractual payments settlements dates, as if these goods were effectively collected. In this event, goods will be stored by the FAURE HERMAN Company in a place of its own choosing, at the Purchaser"s own expenses and risks.',
                    style: 'small'
                },
                {
                    text: 'The FAURE HERMAN Company declines any subsequent responsibility in this respect.',
                    style: 'small'
                },
                {
                    text: '9.2. If, three (3) months after the delivery date scheduled in the contract, and eight (8) calendar days after the forwarding date of a formal notice by means of a recorded delivery letter and remained without any answer, the Purchaser did not collect the goods, the FAURE HERMAN Company shall reserve the right, without being forced to ask for termination before the Court, to back out of the Contract in relation to the aforesaid goods. Any sums due by the Purchaser of the goods, which are already delivered, will become immediately due for payment; besides the FAURE HERMAN Company shall have grounds to claim for compensations for the prejudice it has suffered.',
                    style: 'small'
                },
                {
                    text: '10. PRICE',
                    style: 'subheader'
                },
                {
                    text: '10.1 Unless expressed otherwise, prices in the bids, quotations or FAURE HERMAN Purchase Order acceptance are defined for the goods and quantities determined at the time of the Purchase Order acceptance, duty-free for "Ex-works" goods, and do not include installation and commissioning costs.',
                    style: 'small'
                },
                {
                    text: '10.2 The prices we invoice are those in force at the time of delivery. Prices are revisable without any notice and at the FAURE HERMAN Company"s request until the delivery date scheduled in the Contract.',
                    style: 'small'
                },
                {
                    text: '11. CHARGES: PAYMENTS - EXEMPTION',
                    style: 'subheader'
                },
                {
                    text: '11.1. Charges in force at the time of the invoicing are invoiced and must be paid entirely at the delivery.',
                    style: 'small'
                },
                {
                    text: '11.2. In order to benefit from the system of sales in suspension of charges at the time of invoicing, the Purchaser shall supply to the FAURE HERMAN Company, when placing an order, the supporting export documents in force. Any belated forwarding of these documents cannot hinder the payment of our invoices at the contractual settlement date, together as the included charges, the reimbursement of exempted charges and the accounting regularisation can be performed only after receiving these documents.',
                    style: 'small'
                },
                {
                    text: '12. TERMS OF PAYMENTS',
                    style: 'subheader'
                },
                {
                    text: '12.1. Terms of Payment are those stipulated at the purchaser order acceptance. - Minimum amount of invoicing: 120 euro (one hundred and twenty euro).',
                    style: 'small'
                },
                {
                    text: '12.2. Unless provided otherwise in the FAURE HERMAN acknowledgement of receipt, payments will be effected net without instalment, by cheque or by draft 30 days after the collection or the invoicing entry.',
                    style: 'small'
                },
                {
                    text: '12.3. However, the Purchase Order instalment shall be immediately paid by cheque. When a cash retention of guarantee shall be requested, it shall be limited to 5 % total amount of the Purchase Order, it shall be payable on delivery of the equipment against receipt of a bank guarantee of identical value, releasable at the expiration of the contractual guarantee deadline.',
                    style: 'small'
                },
                {
                    text: '12.4. In the event of payment delay of the Purchase Order, the FAURE HERMAN Company reserves the right, either to stop any work of his own obligations, up to complete payment of the major due sums-a payment increased by a delay interest equal to the discount rate of the European Central Bank, increased by 7 points of percentage: in this event, the delivery time shall be extended proportionally to the payment delay; or to terminate the contract 8 calendar days after the forwarding date of a formal notice by means of a recorded delivery letter and remained without any answer, and to obtain compensation for the suffered prejudice.',
                    style: 'small'
                },
                {
                    text: '13. GUARANTEE - LIABILITY',
                    style: 'subheader'
                },
                {
                    text: '13.1. PASSING OF TITLE CLAUSE DUBAUCHET LAW DATED MAY 12 Th. 1980 Passing of title for the equipment mentioned in the purchase order is conditional upon the complete payment for the said goods, should any of the agreed settlements not be paid, even partially, besides the fact that provisions specified in article 12.4 of the FAURE HERMAN general terms of trade will be applicable, the equipment will remain the property of FAURE HERMAN, up to full payment, according to the outstanding sums.',
                    style: 'small'
                },
                {
                    text: '13.2. On receipt, the Purchaser has to carry out a thorough examination of the product. To be covered by the present guarantee, the defect of the good, detectable thanks to a thorough examination, shall be reported to the FAURE HERMAN Company, within 4 calendar days from receipt of the goods. Any further appearance of a hidden defect shall be reported at once to the FAURE HERMAN Company.',
                    style: 'small'
                },
                {
                    text: '13.3. The FAURE HERMAN Company guarantees to the Purchaser to goods sold against any designing, manufacturing defect or defect in the raw material appearing within twelve (12) months (6 months for counters), from the commissioning date and at the latest eighteen (18) months after the availability of the equipment. Performances of the goods are guaranteed only within the limits of the performances stipulated expressly at the Purchase Order acceptance.',
                    style: 'small'
                },
                {
                    text: '13.4. The guarantee involved may not extend the guarantee deadline.',
                    style: 'small'
                },
                {
                    text: '13.5. For the goods re-sold in state and the components purchased by the FAURE HERMAN Company to its suppliers, the FAURE HERMAN guarantee is strictly limited to the one agreed by its suppliers.',
                    style: 'small'
                },
                {
                    text: '13.6. The guarantees defined as above cover exclusively, and according to the FAURE HERMAN Company"s preference, the standard replacement or repair by the FAURE HERMAN Company within its workshops of goods or spare parts, which are regarded by the FAURE HERMAN Company, as being defective, after the Purchaser returned the aforesaid goods or spare parts, except the haulage, packing, assembly, disassembly costs any subsidiaries, chargeable to the Purchaser. Should a technician"s intervention from the FAURE HERMAN Company on site be requested by the customer, during the guarantee period, for a reason such as:',
                    style: 'small'
                },
                {
                    text: 'localisation of the defect, repairing of equipment, performance control, etc. the expenses corresponding to the travel and stay of our labour force, should be invoiced in order, according to the rate in force at the moment of the intervention. The costs corresponding to the labour time on site and to the spare parts supplied would be borne by us, in the event of the FAURE HERMAN Company"s commitment.',
                    style: 'small'
                },
                {
                    text: '13.7. FAURE HERMAN shall not be liable for any defect arising from ordinary wear and tear, misuse by or negligence of the purchaser or any third party. Any transport, storage, installation, use of the goods not in compliance with the state-of-the-art and with the technical specifications submitted by the FAURE HERMAN Company to the Purchaser, any repair work by the Purchaser or by a third without any prior authorisation from the FAURE HERMAN Company involves the loss of the benefit from the guarantee.',
                    style: 'small'
                },
                {
                    text: 'Apart from the origin of the sold goods, FAURE HERMAN shall not be liable for any damages and direct or indirect losses (operating loss …). In any case and whatever the proved liability of FAURE HERMAN, it will be limited to the guarantees allowed by our insurance company.',
                    style: 'small'
                },
                {
                    text: '13.8. The present guarantee does not cover either the defects - resulting from the material supplied by the Purchaser or from a design imposed by the latter-or repair works resulting from normal wear of the goods or a fortuitous event, an occurrence beyond control, or the materials or consumable goods.',
                    style: 'small'
                },
                {
                    text: '13.9. For non-professional Purchasers or customers, provisions of Article 13 above do not exclude the legal guarantee of latent defect, which is due to them, whatever the case.',
                    style: 'small'
                },
                {
                    text: '14. FORCE MAJEURE - EXEMPTION REASONS',
                    style: 'subheader'
                },
                {
                    text: '14.1. In the event of Force Majeure occurrence or occurrences beyond the control of the parties affected (fire, flood, labour dispute, strikes either by the FAURE HERMAN Company, or by the suppliers, mobilisation, requisition embargo, lack of means of transportation, lack of procurement, etc.) hindering or involving unreasonably high costs for executing the obligations deriving from the Contract, the execution deadlines of these obligations well be extended by the time of the aforesaid events and shall be executed spontaneously as soon as they stop. So as the benefit from this extension, the party wishing to put forward the occurrences mentioned above has to advise at once, in writing, the other part of their intervention as well as their stoppage.',
                    style: 'small'
                },
                {
                    text: '14.2. If, owing to these occurrences, the Contract execution becomes impossible in a reasonable deadline, each party has the right to back out of the Contract, by means of a simple written notification, without being forced to demand the Contract termination before the Court.',
                    style: 'small'
                },
                {
                    text: '15. OUTSTANDING DEBTS',
                    style: 'subheader'
                },
                {
                    text: 'The Contract termination for whatever reason does not affect the existing outstanding debts between the parties.',
                    style: 'small'
                },
                {
                    text: '16. ARBITRATION',
                    style: 'subheader'
                },
                {
                    text: 'All disputes, arising from or in connection with the Contract, or being the result or the consequences shall be exclusively settled by the Commercial Court of Mamers (France), even if in case of guarantee or multiplicity of holders. The laws of France govern this agreement.',
                    style: 'small'
                },
                {
                    text: `FAURE HERMAN - ROUTE DE BONNETABLE - 72400 LA FERTE BERNARD - France \n Phone : (+33)243602860 - Fax : (+33)243602870 - Web : www.faureherman.com \n FAURE HERMAN SAS with a capital of 1 250 000,00 EUR - Intra EC TVA FR95777335944 \n SIRET : 77733594400032 - EORI : FR77733594400032`, fontSize: 8, alignment: 'center',
                    style: 'marginTB'
                },
                { text: '', pageBreak: 'before', margin: [0, 0, 0, 8] },
                {
                    image: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0OCA3OS4xNjQwMzYsIDIwMTkvMDgvMTMtMDE6MDY6NTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1NTdBRDc0NDY2QzExRUE5MzhEOTM1RUYwMDUwQkFGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1NTdBRDc1NDY2QzExRUE5MzhEOTM1RUYwMDUwQkFGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTU1N0FENzI0NjZDMTFFQTkzOEQ5MzVFRjAwNTBCQUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTU1N0FENzM0NjZDMTFFQTkzOEQ5MzVFRjAwNTBCQUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAgICAgICAgICAwICAgME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',
                    width: 150,
                    alignment: 'center'
                },
                {
                    text: `Orders Processed by Faure Herman Meter Inc.`, fontSize: 14, alignment: 'center',
                    style: 'marginTB'
                },
                {
                    text: 'Faure Herman Meter Inc. (FHMI) Terms & Conditions (T&Cs)',
                    style: 'header'
                },
                {
                    text: 'This is an agreement for the sale of goods between Faure Herman Meter Inc. (“Seller”) and Buyer. In consideration of the mutual promises set forth in this agreement, the parties agree to the terms and conditions as set forth below:',
                    style: 'small'
                },
                {
                    text: '1. ACCEPTANCE',
                    style: 'subheader'
                },
                {
                    text: 'Unless otherwise expressly provided herein, it is agreed that the sale of the products as detailed in our quotation are expressly made on the Terms and Conditions contained herein and , to the extent of any conflict shall take precedence over any terms and conditions which may appear on Buyer ’s purchase order unless expressly accepted by Seller in writing. Buyer’s acceptance of and/or payment for the product covered herein shall constitute and acceptance of these Terms and Conditions.',
                    style: 'small'
                },
                {
                    text: '2. PAYMENT TERMS. \n',
                    style: 'subheader'
                },
                {
                    text: 'All invoices are due and payable thirty (30) days from the date of invoice in U.S. currency except for export shipments for which Seller may require other arrangements, in the manner set forth in our quotation or at the time of order. In the event of any amount of payable to seller being overdue, seller may, without prejudice to any other rights, suspend delivery to buyer or terminate the contract and/or charge the buyer interest at the maximum rate authorized by law from the date on which it is due until it is paid. No payment due to the seller shall in any circumstance be offset against any sum owed by seller to buyer. Seller shall be entitled to ship any order C.O.D. or to cancel any order then outstanding and shall receive reimbursement for reasonable cancellation charges. Buyer shall be liable for all expenses attendant to collection of past due amounts, including attorneys’ fees and/or collection agency fees.',
                    style: 'small'
                },
                {
                    text: '3. CANCELLATION AND SUSPENSION BY BUYER. \n',
                    style: 'subheader'
                },
                {
                    text: 'Should Buyer cancel or suspend any or all of the products covered by the terms and conditions of the Purchase Order, Buyer is subject to the following cancellation fees(% of Purchase Order Value) based on # of weeks FHMI has received the Purchase Order.Less than 2 week: 10 %; 2-4 weeks: 25 %; 4-8 weeks: 60 %; 9-11 weeks: 90 %; after 11 weeks: 100%.',
                    style: 'small'
                },
                {
                    text: '4. TAXES. \n',
                    style: 'subheader'
                },
                {
                    text: 'All prices are exclusive of any sales, use, occupation or other tax applicable to the products covered by this order or the manufacture or sale thereof. Such taxes, when applicable, shall be added to the invoice and shall be paid by buyer unless buyer provides seller with a tax exemption certificate acceptable to the appropriate taxing authorities.',
                    style: 'small'
                },
                {
                    text: '5. F.C.A. POINT AND DELIVERY.\n',
                    style: 'subheader'
                },
                {
                    text: 'Unless different terms are specified in our quotation, all sales are made F.C.A. point of shipment and title passes to buyer, and sellers liability as to delivery ceases upon making delivery of products purchased hereunder to carrier at shipping point in good condition. All stipulated delivery or shipment dates are estimates only. Seller reserves the right to make deliveries of product types in installments and any delay in delivery or other default of any installment of any one or more products shall not relieve buyer of its obligation to accept and pay for the remaining deliveries.',
                    style: 'small'
                },
                {
                    text: '6. FREIGHT CHARGES.\n',
                    style: 'subheader'
                },
                {
                    text: 'Freight charges will be paid by the buyer. Freight charges may be estimated at the time of quotation. If actual freight charges are different, the actual freight charges will be invoiced to the buyer.',
                    style: 'small'
                },
                {
                    text: '7. INSPECTION.\n',
                    style: 'subheader'
                },
                {
                    text: 'Buyer shall inspect or reject goods within thirty (30) days from receipt thereof. If buyer fails to notify seller in writing of its rejection and the reasons therefore within the 30 days, buyer will be deemed to have accepted such shipment and waived any right to later reject the goods.',
                    style: 'small'
                },
                {
                    text: 'If tests are required to be witnessed by buyer or his representatives, notice of this requirement must be given at the time of placing the order and notice of readiness will then be given seven (7) days in advance of such tests being carried out. In the event of any delay on buyer ’s or his representative’s part in attending such test or in carrying out any inspection, after seven (7) days’ notice of readiness, the tests will proceed in buyer’s absence and shall be deemed to have been made by buyer. The buyer shall be required to promptly notify the seller, after witnessing a test or receiving test results of a witnessed or un-witnessed test, in writing, of any claimed defects in which it is claimed that the goods do not conform with the contract. Before buyer is entitled to reject any goods, the seller is to be given a reasonable time and opportunity to rectify the agreed defect.',
                    style: 'small'
                },
                {
                    text: '8. WARRANTY.\n',
                    style: 'subheader'
                },
                {
                    text: 'Seller warrants that the products furnished hereunder are, at the time of shipment, free from defects in material and workmanship only, for a period of one (1) year from the date of shipment unless otherwise stated in the quotation. No warranty is made against damage caused by accident, abuse, operating beyond design limits or faulty installation. Seller’s sole obligation hereunder shall be limited to, at seller’s option, either crediting buyer the purchase price or replacing or repairing, any products for which:',
                    style: 'small'
                },
                {
                    text: 'a. A written notice of non-conformance must be received within a reasonable time after the buyer knows or should have known of the defect, but in no event more than thirty (30) days after the expiration of the warranty period.',
                    style: 'small'
                },
                {
                    text: 'b. Any repair or replacement will not extend the warranty period. The warranty shall not apply to products which the seller determines have, by buyer or another, been subjected to operating and /or environmental conditions in excess of the maximum values thereof and the applicable specifications or otherwise have been subjected to misuse, neglected, improper installment, repair alteration or damage.',
                    style: 'small'
                },
                {
                    text: 'THIS LIMITED WARRANTY IS EXPRESSED IN LIEU OF ALL OTHER WARRANTIES, EXPRESSED, IMPLIED OR STATUTORY, INCLUDING ANY IMPLIED OR STATUTORY, INCLUDING ANY IMPLIED WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE OR MERCHANTABILITY, AND OF ALL OTHER OBLIGATIONS OR LIABILITIES ON THE SELLER’S PART.',
                    style: 'small'
                },
                {
                    text: 'SELLER NEITHER ASSUMESS NOR AUTHORIZES ANY OTHER PERSON TO ASSUME FOR SELLER ANY OTHER LIABILITIES IN CONNECTION WITH THE SALES OF SAID PRODUCTS. IN NO EVENT SHALL SELLER BE LIABLE FOR DAMAGES OF ANY KIND FROM ANY CAUSE TO THE PERSON OR PROPERTY OF OTHERS, OR FOR LOSS OF REVENUE OR PROFIT OF FOR ANY SPECIAL INCIDENTAL OR CONSEQUENTIAL DAMAGES. THE REMEDIES PROVIDED HEREIN ARE BUYER’S EXCLUSIVE REMEDIES IN THE EVENT OF ANY BREACH OF THE FOREGOING WARRANTIES. ANY ACTION OR BREACH OF WARRANTY OR OTHER ACTION UNDER THIS AGREEMENT MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER CAUSE OF ACTION ARISES.',
                    style: 'small'
                },
                {
                    text: '9. LIMITATION OF LIABILITY.\n',
                    style: 'subheader'
                },
                {
                    text: 'Buyers exclusive remedy and seller’s total liability for any and all losses and damages arising out of any cause whatsoever arising out or related to this contract (whether such cause be based in contract, negligence, strict liability, tort, infringement or otherwise) shall in no event exceed the purchase price of the goods in respect to which such cause arises, in no event shall seller be liable for incidental, consequential or punitive damages resulting from any such cause. Seller may, at its sole option, either repair or replace defective goods or refund the purchase price paid upon return of the goods to seller, and shall thereafter have no further obligation to buyer.',
                    style: 'small'
                },
                {
                    text: '10. FORCE MAJEURE/EXCUSE OF PERFORMANCE.\n',
                    style: 'subheader'
                },
                {
                    text: 'Seller shall not be liable for non-performance or delays caused by acts of God, wars, riots, strikes, fires shortages of labor or unavailability of materials or components, labor disputes, delays in transportation, governmental restrictions or any causes beyond its reasonable control, in the event of any such excused delay or failure of performance, the date of delivery shall, at the request of the seller, be deferred for a period of time equal to time lost by reason of the delay.',
                    style: 'small'
                },
                {
                    text: '11. PATENTS.\n',
                    style: 'subheader'
                },
                {
                    text: 'Buyer shall hold seller harmless against any expenses or loss resulting from infringement of patents or trademarks arising from compliance with buyer ’s designs, specifications or instructions. Except as provided in the preceding sentence, seller shall settle or defend any suit or proceeding brought against buyer so far as based on a claim that any product (or part thereof) manufactured by seller furnished under this contract and not used in combination of other products whether or not furnished hereunder constitutes an infringement of any patent of the United States if notified promptly in writing and given authority, information and assistance (at seller’s expense) for the settlement or defense of same, and seller shall pay the damages and costs awarded therein against buyer or agreed upon in such settlement.',
                    style: 'small'
                },
                {
                    text: 'Seller shall (at its own expense) either (i) procure for buyer the right to continue using said product or part, or (ii) furnish a non-infringing product, or (iii) modify it so it becomes non-infringing, or (iv) refund the purchase price and transportation cost thereof upon return authorized by seller. The foregoing states the entire liability of seller for patent or trademark infringements by said products of any part thereof.',
                    style: 'small'
                },
                {
                    text: '12. DESIGN.\n',
                    style: 'subheader'
                },
                {
                    text: 'Seller reserves the right to discontinue the manufacture of or change or modify the design and construction of any of seller’s products without incurring any obligation.',
                    style: 'small'
                },
                {
                    text: '13. RETURN OF GOODS.\n',
                    style: 'subheader'
                },
                {
                    text: 'No product or part shall be returned to seller without written authorization and shipping instructions first having been obtained from seller (RMA). Products returned for credit after invoice date or items returned in damaged condition will be subject to restocking charges.',
                    style: 'small'
                },
                {
                    text: '14. MODIFICATIONS.\n',
                    style: 'subheader'
                },
                {
                    text: 'These terms and conditions constitute the entire agreement between the parties relating to the sale of the products or services described in sellers quotations, and no addition or modification of any provision hereon, by way of changes to the drawings, designs, specifications or delivery schedule shall be binding upon seller unless made in writing and signed by a duly authorized employee of seller . No waiver or modification of any of the foregoing terms and conditions shall be valid unless it is made in writing and signed by both parties.',
                    style: 'small'
                },
                {
                    text: '15. GOVERNING LAW.\n',
                    style: 'subheader'
                },
                {
                    text: 'The parties acknowledge that the transaction that is the subject matter of this Agreement is related to the state of Texas an agree that the performance and construction of the Agreement shall be governed by the laws of the State of Texas and the United States of America, to the extent applicable. The parties specifically intend that the law of Texas cited as Uniform Commercial Code -Sales will control all aspects of the Agreement, except when this Agreement expressly provides otherwise.',
                    style: 'small'
                },
                {
                    text: `FAURE HERMAN METER INC. - 8280 WILLOW PLACE DRIVE NORTH - SUITE 150 HOUSTON TX - 77070 - USA \n Phone : 7136230808`, fontSize: 8, alignment: 'center',
                    style: 'marginTB'
                },
            ],
            styles: {
                header: {
                    fontSize: 7,
                    bold: true
                },
                subheader: {
                    fontSize: 8,
                    margin: [0, 5, 0, 0]
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 6
                },

                body: {
                    fontSize: 12
                },
                bodyMargin: {
                    fontSize: 12,
                    margin: [0, 20, 0, 0]
                },
                marginTB: {
                    fontSize: 12,
                    margin: [0, 15, 0, 15]
                },
                tableExample: {
                    margin: [0, 20, 0, 0]
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
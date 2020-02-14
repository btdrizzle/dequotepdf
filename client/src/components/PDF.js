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
                    text: `Sales Quote Generated ${currentTime}`, fontSize: 14, alignment: 'center'
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
                    text: 'Date:',
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
                    text: `Orders Processed by Faure Herman Meter Inc.`, fontSize: 14, alignment: 'center',
                    style: 'marginTB'
                },
                { text: "    ", alignment: 'center' },
                {
                    text: 'Faure Herman Meter Inc. (FHMI) Terms & Conditions (T&Cs) \n',
                    style: 'header'
                },
                {
                    text: 'This is an agreement for the sale of goods between Faure Herman Meter Inc. (“Seller”) and Buyer. In consideration of the mutual promises set forth in this agreement, the parties agree to the terms and conditions as set forth below:',
                    style: 'small'
                },
                {
                    text: '1. ACCEPTANCE \n',
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
            ],
            styles: {
                header: {
                    fontSize: 8,
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
                    margin: [0, 20, 0, 20]
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
import React from 'react'
import { useEffectOnce } from '../../../../hooks/useEffectOnce';
import Input from '../Input'

export default function Contract() {
    useEffectOnce(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return (
        <div>
            <div className='border border-black/80 p-10 mt-3'>
                <div className='flex justify-between items-center' id="big0">
                    <img src='/img/TREC.png' alt='' className='' />
                    <div className='text-center'>
                        <p className='text-lg font-medium'>PROMULGATED BY THE TEXAS REAL ESTATE COMMISSION (TREC)</p>
                        <p className='text-2xl font-bold'>ONE TO FOUR FAMILY RESIDENTIAL CONTRACT (RESALE)</p>
                        <p className='text-lg font-medium'>NOTICE: Not For Use For Condominium Transactions</p>
                    </div>
                    <img src='/img/EQUAL_HOUSING_OPPORTUNINTY.png' alt='' className='w-20 h-20' />
                </div>
                <div className='mt-4'>
                    <ul className='list-decimal'>
                        {/* 1 */}
                        <li className='bigNumber' id="big1">
                            <b>PARTIES:</b> The parties to this contract are
                            <Input width={64} />(Seller) and
                            <Input width={64} />(Buyer).
                            Seller agrees to sell and convey to Buyer and Buyer agrees to buy from Seller the Propety defines below.
                        </li>
                        {/* 2 */}
                        <li className='bigNumber' id="big2">
                            <b>Propertys:</b> The land, imporvements and accessories are collectively referred to as the Property (Property).
                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <p>
                                    LAND: Lot <Input width={20} /> Block <Input width={20} />, <Input width={64} /> Addition, City of <Input width={30} />, County of <Input width={30} />, Texas, Known as <Input width={64} />(address/zip code), or as described on attached exhibit.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <p>
                                    IMPROVEMENTS: The house, garage and all other fixtures and improvements attached to the above-described real property, including without limitation, the following <b>permanently installed and built-in items</b>, if any: all equipment and appliances, valances, screens, shutters, awnings, wall-to-wall carpeting, mirrors, ceiling fans, attic fans, mail boxes, television antennas, mounts and brackets for televisions and speakers, heating and air-conditioning units, security and fire detection equipment, wiring, plumbing and lighting fixtures, chandeliers, water softener system, kitchen equipment, garage door openers, cleaning equipment, shrubbery, landscaping, outdoor cooking equipment, and all other property attached to the above described real property.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>C.</p>
                                <p>
                                    ACCESSORIES: The following described related accessories, if any: window air conditioning units, stove, fireplace screens, curtains and rods, blinds, window shades, draperiesandrods, door keys, mailbox keys, above ground pool, swimming pool equipment and maintenance accessories, artificial fireplace logs, security systems that are not fixtures, and controls for: (i) garage doors, (ii) entry gates, and (iii) other improvements and accessories. “Controls” includes Seller's transferable rights to the (i) software and applications used to access and control improvements or accessories, and (ii) hardware used solelytocontrolimprovementsor accessories.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>D.</p>
                                <p>
                                    EXCLUSIONS: The following improvements and accessories will be retained by Seller and must be removed prior to delivery of possession: <Input width={64} />
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>E.</p>
                                <p>
                                    <Input width={64} />interests is made in accordance with an attached addendum.
                                </p>
                            </div>
                        </li>
                        {/* 3 */}
                        <li className='bigNumber' id="big3">
                            <p><b>SALES PRICE:</b></p>

                            <div className='flex justify-start gap-4 w-full'>
                                <p>A.</p>
                                <div className='w-full'>
                                    <div className='flex justify-between gap-2 w-full'>
                                        <p className='whitespace-nowrap'>
                                            Cash portion of Sales Price payable by Buyer at closing
                                        </p>
                                        <div className='flex justify-end items-end w-full'>
                                            <div className='w-full border-b border-dashed border-black/30'></div>
                                            <div className='flex justify-end text-right'>$ <Input width={32} className="text-right" /></div>
                                        </div>
                                    </div>
                                    <p>The term “Cash portion of the Sales Price” does not include proceeds from borrowing of any kind or selling other real property except as disclosed in this contract.</p>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4 w-full'>
                                <p>B.</p>
                                <div className='w-full'>
                                    <p>Sum of all financing described in the attached: X Third Party Financing Addendum,</p>
                                    <div className='flex justify-between gap-2 w-full'>
                                        <div className='flex gap-2'>
                                            <Input type="checkbox" />
                                            <p className='whitespace-nowrap'>Loan Assumption Addendum</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <Input type="checkbox" />
                                            <p className='whitespace-nowrap'>Seller Financing Addendum</p>
                                        </div>
                                        <div className='flex justify-end items-end w-full'>
                                            <div className='w-full border-b border-dashed border-black/30'></div>
                                            <div className='flex justify-end text-right'>$ <Input width={32} className="text-right" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4 w-full'>
                                <p>C.</p>
                                <div className='w-full'>
                                    <div className='flex justify-between gap-2 w-full'>
                                        <p className='whitespace-nowrap'>
                                            Sales Price (Sum of A and B)
                                        </p>
                                        <div className='flex justify-end items-end w-full'>
                                            <div className='w-full border-b border-dashed border-black/30'></div>
                                            <div className='flex justify-end text-right'>$ <Input width={32} className="text-right" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 4 */}
                        <li className='bigNumber' id="big4">
                            <p><b>LEASES:</b> Except as disclosed in this contract, Seller is not aware of any leases affecting the Property. After the Effective Date, Seller may not, without Buyer's written consent, create a new lease, amend any existing lease, or convey any interest in the Property. (Check all applicable boxes)</p>

                            <div className='flex justify-start items-start gap-2'>
                                <div className='flex justify-start items-center gap-2'>
                                    <Input type={'checkbox'} />
                                    <p>A.</p>
                                </div>
                                <p>
                                    RESIDENTIAL LEASES: The Property is subject to one or more residential leases and the Addendum Regarding Residential Leases is attached to this contract.
                                </p>
                            </div>
                            <div className='flex justify-start items-start gap-2'>
                                <div className='flex justify-start items-center gap-2'>
                                    <Input type={'checkbox'} />
                                    <p>B.</p>
                                </div>
                                <p>
                                    FIXTURE LEASES: Fixtures on the Property are subject to one or more fixtureleases(for example, solar panels, propane tanks, water softener, security system) andtheAddendum Regarding Fixture Leases is attached to this contract.
                                </p>
                            </div>
                            <div className='flex justify-start items-start gap-2'>
                                <div className='flex justify-start items-center gap-2'>
                                    <Input type={'checkbox'} />
                                    <p>C.</p>
                                </div>
                                <div>
                                    <p>
                                        NATURAL RESOURCE LEASES: “Natural Resource Lease” means an existing oil and gas, mineral, water, wind, or other natural resource lease affecting the Property to which Seller is a party.
                                    </p>

                                    <div className='flex justify-start items-start gap-4'>
                                        <div className='flex justify-start items-center gap-2'>
                                            <Input type={'checkbox'} />
                                            <p>(1)</p>
                                        </div>
                                        <p>
                                            Seller has delivered to Buyer a copy of all the Natural Resource Leases.
                                        </p>
                                    </div>
                                    <div className='flex justify-start items-start gap-4'>
                                        <div className='flex justify-start items-center gap-2'>
                                            <Input type={'checkbox'} />
                                            <p>(2)</p>
                                        </div>
                                        <p>
                                            Seller has not delivered to Buyer a copy of all the Natural Resource Leases. Seller shall provide to Buyer a copy of all the Natural Resource Leases within 3 days after the Effective Date. Buyer may terminate the contract within	days after the date the Buyer receives all the Natural Resource Leases and the earnest money shall be refunded to Buyer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 5 */}
                        <li className='bigNumber' id="big5">
                            <p><b>EARNEST MONEY AND TERMINATION OPTION:</b></p>
                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <div>
                                    <p>
                                        DELIVERY OF EARNEST MONEY AND OPTION FEE: Within 3 days after the Effective Date, Buyer must deliver to
                                        <Input width={64} />
                                        (Escrow Agent) at
                                        <Input width={64} />
                                        (address):
                                        $ <Input width={20} /> as earnest money and
                                        $ <Input width={20} /> as the Option Fee. The earnest money and Option Fee shall be made payable to Escrow Agent and may be paid separately or combined in a single payment.
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(1)</p>
                                            <p>
                                                Buyer shall deliver additional earnest money of $<Input width={48} /> to Escrow Agent within <Input width={20} /> days after the Effective Date of this contract.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(2)</p>
                                            <p>
                                                If the last day to deliver the earnest money, Option Fee, or the additional earnest money falls on a Saturday, Sunday, or legal holiday, the time to deliver the earnest money, Option Fee, or the additional earnest money, as applicable, is extended until the end of the next day that is not a Saturday, Sunday, or legal holiday.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(3)</p>
                                            <p>
                                                The amount(s) Escrow Agent receives under this paragraph shall be applied first to the Option Fee, then to the earnest money, and then to the additional earnest money.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(4)</p>
                                            <p>
                                                Buyer authorizes Escrow Agent to release and deliver the Option Fee to Seller at any time without further notice to or consent from Buyer, and releases Escrow Agent from liability for delivery of the Option Fee to Seller. The Option Fee will be credited to the Sales Price at closing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <p>
                                    TERMINATION OPTION: For nominal consideration, the receipt of which Seller acknowledges, and Buyer's agreement to pay the Option Fee within the time required, Seller grants Buyer the unrestricted right to terminate this contract by giving notice of termination to Seller within
                                    <Input width={20} /> days after the Effective   Date   of   this   contract   (Option   Period).   Notices   under   this paragraph must be given by 5:00 p.m. (local time where the Property is located) by the date specified. If Buyer gives notice of termination within the time prescribed: (i) the Option Fee will not be refunded and Escrow Agent shall release any Option Fee remaining with Escrow Agent to Seller; and (ii) any earnest money will be refunded to Buyer.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>C.</p>
                                <p>
                                    FAILURE TO TIMELY DELIVER EARNEST MONEY: If Buyer fails to deliver the earnest money within the time required, Seller may terminate this contract or exercise Seller's remedies under Paragraph 15, or both, by providing notice to Buyer before Buyer delivers the earnest money.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>D.</p>
                                <p>
                                    FAILURE TO TIMELY DELIVER OPTION FEE: If no dollar amount is stated as the Option Fee or if Buyer fails to deliver the Option Fee within the time required, Buyer shall not have the unrestricted right to terminate this contract under this paragraph 5.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>E.</p>
                                <p>
                                    TIME: <b>Time is of the essence for this paragraph and strict compliance with the time for performance is required.</b>
                                </p>
                            </div>
                        </li>
                        {/* 6 */}
                        <li className='bigNumber' id="big6">
                            <p><b>TITLE POLICY AND SURVEY:</b></p>
                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <div>
                                    <p>
                                        TITLE POLICY: Seller shall furnish to Buyer at
                                        {` `}<Input type={'checkbox'} /> Seller's
                                        {` `}<Input type={'checkbox'} /> Buyer's
                                        expense an owner policy of title insurance (Title Policy) issued by
                                        <Input width={64} />
                                        (Title Company) in the amount of the Sales Price, dated at or after closing, insuring Buyer against loss under the provisions of the Title Policy, subject to the promulgated exclusions (including existing building and zoning ordinances) and the following exceptions:
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(1)</p>
                                            <p>
                                                Restrictive covenants common to the platted subdivision in which the Property is located.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(2)</p>
                                            <p>
                                                The standard printed exception for standby fees, taxes and assessments.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(3)</p>
                                            <p>
                                                Liens created as part of the financing described in Paragraph 3.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(4)</p>
                                            <p>
                                                Utility easements created by the dedication deed or plat of the subdivision in which   the Property is located.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(5)</p>
                                            <p>
                                                Reservations or exceptions otherwise permitted by this contract or as may be approved by Buyer in writing
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(6)</p>
                                            <p>
                                                The standard printed exception as to marital rights.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(7)</p>
                                            <p>
                                                The standard printed exception as to waters, tidelands, beaches, streams, and related matters.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(8)</p>
                                            <div>
                                                <p>
                                                    The standard printed exception as to discrepancies, conflicts, shortages in area or boundary lines, encroachments or protrusions, or overlapping improvements:
                                                </p>
                                                <div className='flex justify-start items-start gap-4'>
                                                    <div className='flex justify-start items-center gap-2'>
                                                        <Input type={'checkbox'} />
                                                        <p>(i)</p>
                                                    </div>
                                                    <p>
                                                        will not be amended or deleted from the title policy; or
                                                    </p>
                                                </div>
                                                <div className='flex justify-start items-start gap-4'>
                                                    <div className='flex justify-start items-center gap-2'>
                                                        <Input type={'checkbox'} />
                                                        <p>(ii)</p>
                                                    </div>
                                                    <p>
                                                        will be amended to read, "shortages in area" at the expense of
                                                        {` `}<Input type={'checkbox'} /> Seller's
                                                        {` `}<Input type={'checkbox'} /> Buyer's
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(9)</p>
                                            <p>
                                                The exception or exclusion regarding minerals approved by the Texas Department of Insurance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <p>
                                    COMMITMENT: Within 20 days after the Title Company receives a copy of this contract, Seller shall furnish to Buyer a commitment for title insurance (Commitment) and, at Buyer's expense, legible copies of restrictive covenants and documents evidencing exceptions in the Commitment (Exception Documents) other than the standard printed exceptions. Seller authorizes the Title Company to deliver the Commitment and Exception Documents to   Buyer   at   Buyer's   address shown in Paragraph 21. If the   Commitment   and   Exception   Documents   are   not   delivered   to Buyer within the specified time, the time for delivery will be automatically extended up to 15 days or 3 days before the Closing Date, whichever is earlier. If the Commitment and Exception Documents are not delivered within the time required, Buyer may terminate this contract and the earnest money will be refunded to Buyer.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>C.</p>
                                <div>
                                    <p>
                                        SURVEY: The survey must be made by a registered professional land surveyor acceptable to the Title Company and Buyer's lender(s). (Check one box only)
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(1)</p>
                                            </div>
                                            <p>
                                                Within <Input width={20} /> days after the Effective Date of this contract, Seller shall furnish to Buyer and
                                                Title Company Seller's existing survey of the Property and   a   Residential   Real   Property Affidavit promulgated by the Texas Department of Insurance (T-47 Affidavit). If Seller fails to furnish   the   existing   survey   or   affidavit   within   the   time   prescribed,   Buyer    shall obtain a new survey at Seller's expense no later than 3 days prior to Closing Date. If the existing survey or affidavit is not acceptable to Title Company or Buyer's lender(s),
                                                Buyer shall obtain a new survey at
                                                {` `}<Input type={'checkbox'} /> Seller's
                                                {` `}<Input type={'checkbox'} /> Buyer's
                                                expense no later than 3 days prior to Closing Date.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(2)</p>
                                            </div>
                                            <p>
                                                Within <Input width={20} /> days after the Effective Date of this contract, Buyer shall obtain a new survey at Buyer's expense. Buyer is deemed to receive the survey on the date of actual receipt or the date specified in this paragraph, whichever is earlier.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(3)</p>
                                            </div>
                                            <p>
                                                Within <Input width={20} /> days after the Effective Date of this contract, Seller, at Seller's expense shall furnish a new survey to Buyer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>D.</p>
                                <p>
                                    OBJECTIONS: Buyer may object in writing to defects, exceptions, or encumbrances to title: disclosed on the survey other than items 6A(1) through (7) above; disclosed in the Commitment other than items 6A(1) through (9) above; or which prohibit the following use or activity: <Input width={'[370px]'} />.
                                    Buyer must object the earlier of (i) the Closing Date or (ii) <Input width={20} /> days after Buyer receives the
                                    Commitment, Exception Documents, and the survey. Buyer's failure to object within the time allowed will constitute a waiver of Buyer's right to object; except that the requirements in Schedule C of the Commitment are not waived by Buyer. Provided Seller is not obligated to incur any expense, Seller shall cure any timely objections of Buyer or any third party lender within 15 days after Seller receives the objections (Cure Period) and the Closing Date will be extended as necessary. If objections are not cured within the Cure Period, Buyer may, by delivering notice to Seller within 5 days after the end of the Cure Period: (i) terminate this contract and the earnest money will be refunded to Buyer; or (ii) waive the objections. If Buyer does not terminate within the time required, Buyer shall be deemed to have waived the objections. If the Commitment or survey is revised or any new Exception Document(s) is delivered, Buyer may object to any new matter revealed in the revised Commitment or survey or new Exception Document(s) within the same time stated in this paragraph to make objections beginning when the revised Commitment, survey, or Exception Document(s) is delivered to Buyer.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>E.</p>
                                <div>
                                    <p>
                                        TITLE NOTICES:
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(1)</p>
                                            <p>
                                                ABSTRACT OR TITLE POLICY: Broker advises Buyer to have an abstract of title covering the Property examined by an attorney of Buyer's selection, or Buyer should be furnished with or obtain a Title Policy. If a Title Policy is furnished, the Commitment should be promptly reviewed by an attorney of Buyer's choice due to the time limitations on Buyer's right to object.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(2)</p>
                                            <p>
                                                MEMBERSHIP IN PROPERTY OWNERS ASSOCIATION(S): The Property <Input type={'checkbox'} />is <Input type={'checkbox'} />is not subject
                                                to mandatory membership in a property owners association(s).
                                                If the Property is subject to mandatory membership in a property owners association(s), Seller notifies Buyer under
                                                §5.012, Texas Property Code, that, as a purchaser of property in the residential community identified in Paragraph 2A in which the Property is located, you are obligated to be a member of the property owners association(s).
                                                Restrictive covenants governing the use and occupancy of the Property and all dedicatory instruments governing the establishment, maintenance, or operation of this residential community have been or will be recorded in the Real Property Records of the county in which the Property is located.
                                                Copies of the restrictive covenants and dedicatory instruments may be obtained from the county clerk. <br />
                                                <b>You are obligated to pay assessments to the property owners association(s). </b>
                                                The amount of the assessments is subject to change. Your failure to pay the assessments could result in enforcement of the association's lien on and the foreclosure of the Property.
                                                Section 207.003, Property Code, entitles an owner to receive copies of any document that governs the establishment, maintenance, or operation of a subdivision, including, but not limited to, restrictions, bylaws, rules and regulations, and a resale certificate from a property owners' association.
                                                A resale certificate contains information including, but not limited to, statements specifying the amount and frequency of regular assessments and the style and cause number of lawsuits to which the property owners' association is a party, other than lawsuits relating to unpaid ad valorem taxes of an individual member of the association.
                                                These documents must be made available to you by the property owners' association or the association's agent on your request.
                                                <b>If Buyer is concerned about these matters, the TREC  promulgated  Addendum  for  Property  Subject  to Mandatory Membership in a Property Owners Association(s) should be used.</b>
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(3)</p>
                                            <p>
                                                STATUTORY TAX DISTRICTS: If the Property is situated in a utility or other statutorily created district providing water, sewer, drainage, or flood control facilities and services, Chapter 49, Texas Water Code, requires Seller to deliver and Buyer to sign the statutory notice relating to the tax rate, bonded indebtedness, or standby fee of the district prior to final execution of this contract.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(4)</p>
                                            <p>
                                                TIDE WATERS: If the Property abuts the tidally influenced waters of the state, §33.135, Texas Natural Resources Code, requires a notice regarding coastal area property to be included in the contract. An addendum containing the notice promulgated by TREC or required by the parties must be used
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(5)</p>
                                            <p>
                                                ANNEXATION: If the Property is located outside the limits of a municipality, Seller notifies Buyer under §5.011, Texas Property Code, that the Property may now or later be included in the extraterritorial jurisdiction of a municipality and   may   now   or   later   be   subject   to annexation by the municipality.   Each   municipality   maintains   a   map   that   depicts   its boundaries and extraterritorial jurisdiction. To determine if the Property is located within a municipality's extraterritorial jurisdiction or is likely to be located within a municipality's extraterritorial jurisdiction, contact all municipalities located in the general proximity of the Property for further information.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(6)</p>
                                            <p>
                                                PROPERTY LOCATED IN A CERTIFICATED SERVICE AREA OF A UTILITY SERVICE PROVIDER: Notice required by §13.257, Water Code: The real property, described in Paragraph 2, that you are about to purchase may be located in a certificated water or sewer service area, which is authorized by law to provide water or sewer service to the properties in   the certificated area. If your property is located in a certificated area there may be special costs or charges that you will be required to pay before you can receive water or sewer service. There may be a period required to construct lines or other facilities necessary to provide water or sewer service to your property. You are advised to determine if the property is in a certificated area and contact the utility service provider to determine the cost that you will be required to pay and the period, if any, that is required to provide water or sewer service to your property. The undersigned   Buyer   hereby   acknowledges   receipt   of   the   foregoing notice at or before the execution of a binding contract for the purchase of the real property described in Paragraph 2 or at closing of purchase of the real property.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(7)</p>
                                            <p>
                                                PUBLIC IMPROVEMENT DISTRICTS: If the Property is in a public improvement district, Seller must give Buyer written notice as required by §5.014,   Property   Code.   An   addendum containing the required notice shall be attached to this contract.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(8)</p>
                                            <p>
                                                TRANSFER FEES: If the Property is subject to a private transfer fee obligation,   §5.205, Property Code, requires Seller to notify Buyer as follows: The private transfer fee obligation may be governed by Chapter 5, Subchapter G of the Texas Property Code.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(9)</p>
                                            <p>
                                                PROPANE GAS SYSTEM SERVICE AREA: If the Property is located in a propane gas system service area owned by a distribution system retailer, Seller must give Buyer written notice as required by §141.010, Texas Utilities Code. An addendum containing the notice approved by TREC or required by the parties should be used.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(10)</p>
                                            <p>
                                                NOTICE OF WATER LEVEL FLUCTUATIONS: If the Property adjoins an   impoundment   of water, including a reservoir or lake, constructed and maintained under Chapter 11, Water Code, that has a storage capacity of at least 5,000 acre-feet at the impoundment's normal operating level, Seller hereby notifies Buyer: “The water level of the impoundment of water adjoining the Property fluctuates for various reasons, including as a result of: (1) an entity lawfully exercising its right to use the water stored in the impoundment; or (2) drought or flood conditions.”
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(11)</p>
                                            <p>
                                                REQUIRED NOTICES: The following notices have been given or are attached to this contract (for example, MUD, WCID, PID notices):
                                                <Input width={'[500px]'} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 7 */}
                        <li className='bigNumber' id="big7">
                            <p><b>PROPERTY CONDITION:</b></p>


                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <p>
                                    ACCESS, INSPECTIONS AND UTILITIES: Seller shall permit Buyer and Buyer's agents access to the Property at reasonable times. Buyer may have the   Property   inspected   by   inspectors selected by Buyer and licensed by TREC or otherwise permitted by law to make inspections. Any hydrostatic testing must be separately authorized by Seller in writing.   Seller   at   Seller's expense shall immediately cause existing utilities to be turned on and shall keep the utilities on during the time this contract is in effect.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <div>
                                    <p>
                                        SELLER'S DISCLOSURE NOTICE PURSUANT TO §5.008, TEXAS PROPERTY CODE (Notice): (Check one box only)
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(1)</p>
                                            </div>
                                            <p>
                                                Buyer has received the Notice.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(2)</p>
                                            </div>
                                            <p>
                                                Buyer has not received the Notice. Within	<Input width={20} /> days after the Effective Date of this contract, Seller shall deliver the Notice to Buyer.   If   Buyer   does   not   receive   the   Notice, Buyer may terminate this contract at any time prior to the closing and the earnest money will be refunded to Buyer. If Seller delivers the Notice, Buyer may terminate this contract for any reason within 7 days after Buyer receives the Notice or   prior   to   the   closing, whichever first occurs, and the earnest money will be refunded to Buyer.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(3)</p>
                                            </div>
                                            <p>
                                                The Seller is not required to furnish the notice under the Texas Property Code.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>C.</p>
                                <p>
                                    SELLER'S DISCLOSURE OF LEAD-BASED PAINT AND LEAD-BASED PAINT HAZARDS is required by Federal law for a residential dwelling constructed prior to 1978.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>D.</p>
                                <div>
                                    <p>
                                        ACCEPTANCE OF PROPERTY CONDITION: "As Is" means the present condition of the Property with any and all defects and without warranty except for   the   warranties   of   title   and   the warranties in this contract. Buyer's agreement to accept the   Property   As   Is   under   Paragraph 7D(1) or (2) does not preclude Buyer from inspecting the Property under Paragraph 7A, from negotiating   repairs   or   treatments   in   a   subsequent   amendment,   or   from   terminating    this contract during the Option Period, if any.
                                        <br />
                                        (Check one box only)
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(1)</p>
                                            </div>
                                            <p>
                                                Buyer accepts the Property As Is.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <div className='flex justify-start items-center gap-2'>
                                                <Input type={'checkbox'} />
                                                <p>(2)</p>
                                            </div>
                                            <p>
                                                Buyer accepts the Property As Is provided Seller, at Seller's expense, shall complete the following specific repairs and treatments:
                                                <Input width={'full'} />
                                                <br />
                                                (Do not insert general phrases, such as "subject to inspections" that do not identify specific repairs and treatments.)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>E.</p>
                                <p>LENDER REQUIRED REPAIRS AND TREATMENTS: Unless otherwise agreed in writing, neither party is obligated to pay for lender   required   repairs,   which   includes   treatment   for   wood destroying insects. If the parties do not agree to pay for   the   lender   required   repairs   or treatments, this contract will   terminate   and   the   earnest   money   will   be   refunded   to   Buyer.   If the cost of lender required repairs and treatments exceeds 5% of the Sales Price, Buyer may terminate this contract and the earnest money will be refunded to Buyer.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>F.</p>
                                <p>
                                    COMPLETION OF REPAIRS AND TREATMENTS: Unless otherwise agreed in writing, Seller shall complete all agreed repairs and treatments prior to the Closing Date and obtain any required permits. The repairs and   treatments   must   be   performed   by   persons   who   are   licensed   to provide such repairs or treatments or, if no   license   is   required   by   law,   are   commercially engaged in the trade of providing   such   repairs   or   treatments.   Seller   shall:   (i)   provide   Buyer with copies of documentation from   the   repair   person(s)   showing   the   scope   of   work   and payment for the work completed; and (ii) at Seller's expense, arrange for the transfer of any transferable warranties with respect to the repairs and treatments to Buyer at closing. If Seller fails to complete any agreed repairs and treatments prior to   the   Closing   Date,   Buyer   may exercise remedies under Paragraph 15 or extend the Closing Date up to 5 days if necessary for Seller to complete the repairs and treatments.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>G.</p>
                                <p>
                                    ENVIRONMENTAL MATTERS: Buyer is advised that the presence of wetlands, toxic substances, including asbestos and wastes or other environmental hazards, or the presence of a threatened or endangered species or its habitat may affect Buyer's intended use of the Property. If Buyer is concerned about these matters, an addendum promulgated   by   TREC   or   required   by   the parties should be used.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>H.</p>
                                <p>
                                    RESIDENTIAL SERVICE CONTRACTS: Buyer may purchase a residential service contract from a provider or administrator licensed by   the   Texas   Department   of   Licensing   and   Regulation.   If Buyer purchases a residential service contract, Seller shall reimburse Buyer at closing for the
                                    cost of the residential service contract in an amount not exceeding $<Input width={20} />.
                                    Buyer should review any residential service contract for the scope   of   coverage,   exclusions   and limitations. {` `}
                                    <b>The purchase   of   a   residential   service   contract   is   optional.   Similar   coverage may be purchased from various companies authorized to do business in Texas.</b>
                                </p>
                            </div>
                        </li>
                        {/* 8 */}
                        <li className='bigNumber' id="big8">
                            <p><b>BROKERS AND SALES AGENTS:</b></p>
                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <p>
                                    BROKER OR SALES AGENT DISCLOSURE: Texas law requires a real estate broker or sales agent who is a party to a transaction or acting on behalf of a spouse, parent, child, business entity in which the broker or sales   agent   owns   more   than   10%,   or   a   trust   for   which   the broker or sales agent acts as a trustee or of which the broker or sales agent or the broker or sales agent's spouse, parent or   child   is   a   beneficiary,   to   notify   the   other   party   in   writing before entering into a contract of sale. Disclose if applicable:
                                    <Input width={'full'} />
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <p>
                                    BROKERS' FEES: All obligations of the parties for payment of brokers' fees are contained in separate written agreements.
                                </p>
                            </div>
                        </li>
                        {/* 9 */}
                        <li className='bigNumber' id="big9">
                            <p><b>CLOSING:</b></p>

                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <p>
                                    The closing of the sale will be on or before	<Input width={30} />, <Input width={20} />, or within 7 days
                                    after objections made under Paragraph 6D have been cured or waived, whichever date is later (Closing Date). If either party fails to close the sale by the Closing Date, the non-defaulting party may exercise the remedies contained in Paragraph 15.
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <div>
                                    <p>
                                        At closing:
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(1)</p>
                                            <p>
                                                Seller shall execute and deliver a general warranty deed conveying title to the Property to Buyer and showing no additional exceptions to those permitted in Paragraph 6 and furnish tax statements or certificates showing no delinquent taxes on the Property.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(2)</p>
                                            <p>
                                                Buyer shall pay the Sales Price in good funds acceptable to the Escrow Agent.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(3)</p>
                                            <p>
                                                Seller and Buyer shall execute and deliver any notices, statements, certificates, affidavits, releases, loan documents, transfer of any   warranties,   and   other   documents   reasonably required for the closing of the sale and the issuance of the Title Policy.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(4)</p>
                                            <p>
                                                There will be no liens,   assessments,   or   security   interests   against   the   Property   which   will not be satisfied out of the sales proceeds unless securing   the   payment   of   any   loans assumed by Buyer and assumed loans will not be in default.
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(5)</p>
                                            <p>
                                                Private transfer fees (as defined by Chapter 5, Subchapter G of the Texas Property Code) will be the obligation of Seller unless provided otherwise in this contract. Transfer   fees assessed by a property owners' association are governed by the Addendum for   Property Subject to Mandatory Membership in a Property Owners Association.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 10 */}
                        <li className='bigNumber' id="big10">
                            <p><b>POSSESSION:</b></p>

                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <p>
                                    BUYER'S POSSESSION: Seller shall deliver to Buyer possession of the Property in its present or
                                    required condition,   ordinary   wear   and   tear   excepted:{` `}
                                    <Input type={"checkbox"} />upon closing and funding
                                    <Input type={"checkbox"} />according to a temporary residential lease form promulgated by TREC or other written lease required by the parties
                                    Any possession by Buyer prior to closing or by Seller after closing which is not authorized by a written lease will establish a tenancy at sufferance   relationship   between   the parties. {` `}
                                    <b>Consult your insurance agent prior to   change   of   ownership   and   possession because insurance coverage may   be   limited   or   terminated.   The   absence   of   a   written lease or appropriate insurance coverage may expose the parties to economic loss.</b>
                                </p>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <div>
                                    <p>
                                        SMART DEVICES: “Smart Device” means a device that   connects   to   the   internet   to   enable remote use, monitoring, and management of: (i) the Property; (ii) items identified in any Non- Realty Items Addendum; or (iii) items in a Fixture Lease assigned to Buyer. At the time Seller delivers possession of the Property to Buyer, Seller shall:
                                    </p>

                                    <div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(1)</p>
                                            <p>
                                                deliver   to   Buyer   written   information   containing   all   access   codes,   usernames,   passwords, and applications Buyer will need to   access,   operate,   manage,   and   control   the   Smart Devices; and
                                            </p>
                                        </div>
                                        <div className='flex justify-start items-start gap-4'>
                                            <p>(2)</p>
                                            <p>
                                                terminate and remove all   access   and   connections   to   the   improvements   and   accessories from any of Seller's personal devices including but not limited to phones and computers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 11 */}
                        <li className='bigNumber' id="big11">
                            <p>
                                <b>SPECIAL PROVISIONS:</b>&nbsp;
                                (This paragraph is intended to be used only for additional informational items. An informational item is a statement that completes a blank in a contract form, discloses factual information, or provides instructions. Real estate brokers and sales agents are prohibited from practicing law and shall not add to, delete, or modify any provision of this contract unless drafted by a party to this contract or a party's attorney.) </p>
                            <Input width={'full'} />
                        </li>
                        {/* 12 */}
                        <li className='bigNumber' id="big12">
                            <p><b>SETTLEMENT AND OTHER EXPENSES::</b></p>
                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <div>
                                    <p>
                                        The following expenses must be paid at or prior to closing:
                                    </p>
                                    <div className='flex justify-start items-start gap-4'>
                                        <p>(1)</p>
                                        <div>
                                            <p>
                                                Expenses payable by Seller (Seller's Expenses):
                                            </p>
                                            <div className='flex justify-start items-start gap-4'>
                                                <p>(a)</p>
                                                <div>
                                                    <p>
                                                        Releases of existing liens, including prepayment penalties and recording fees; release of Seller's loan liability; tax statements or certificates;   preparation   of   deed;   one-half   of escrow fee; and other expenses payable by Seller under this contract.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-start gap-4'>
                                                <p>(b)</p>
                                                <div>
                                                    <p>
                                                        Seller shall also pay an amount not to exceed $<Input width={30} /> to be applied in the
                                                        following order: Buyer's Expenses which Buyer is prohibited from paying by FHA, VA, Texas Veterans Land Board or other governmental loan programs, and then to   other Buyer's Expenses as allowed by the lender.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-start items-start gap-4'>
                                        <p>(2)</p>
                                        <p>Expenses payable by Buyer (Buyer's Expenses): Appraisal fees; loan   application   fees; origination charges; credit   reports;   preparation   of   loan   documents;   interest   on   the   notes from date of disbursement   to   one   month   prior   to   dates   of   first   monthly   payments; recording fees; copies of easements and restrictions; loan title policy   with   endorsements required by   lender;   loan-related   inspection   fees;   photos;   amortization   schedules;   one-half of escrow fee; all prepaid   items,   including   required   premiums   for   flood   and   hazard insurance, reserve deposits for insurance, ad valorem taxes and special governmental assessments; final   compliance   inspection;   courier   fee;   repair   inspection;   underwriting   fee; wire transfer fee; expenses   incident   to   any   loan;   Private   Mortgage   Insurance   Premium (PMI), VA Loan Funding Fee, or FHA Mortgage Insurance Premium (MIP) as required by the lender; and other expenses payable by Buyer under this contract.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <p>
                                    If any expense exceeds an amount expressly stated in this contract for such expense to be paid by a party, that party may terminate this contract unless the other party agrees to pay such excess. Buyer may not pay charges and fees expressly prohibited by FHA, VA, Texas Veterans Land Board or other governmental loan program regulations.
                                </p>
                            </div>
                        </li>
                        {/* 13 */}
                        <li className='bigNumber' id="big13">
                            <p>
                                <b>PRORATIONS:</b>&nbsp;
                                Taxes   for   the   current   year,   interest,   rents,    and    regular    periodic    maintenance fees, assessments, and dues (including prepaid items) will be prorated through the Closing Date. The tax proration may be calculated taking into consideration any change in exemptions that will affect the current year's taxes. If taxes for the current year vary from the amount prorated at closing, the parties shall adjust the prorations when tax statements for the current year are available. If taxes are not paid at or prior to closing, Buyer shall pay taxes for the current year.
                            </p>
                        </li>
                        {/* 14 */}
                        <li className='bigNumber' id="big14">
                            <p>
                                <b>CASUALTY LOSS:</b>&nbsp;
                                If any part of the Property is damaged or destroyed by fire or other casualty after the Effective Date of this contract, Seller shall restore the Property to its previous condition as soon as reasonably possible, but in any event by the Closing Date. If Seller fails to do so due to factors beyond Seller's control, Buyer may (a) terminate this contract and the earnest money will be refunded to Buyer (b) extend the time for performance up to 15 days and the Closing Date will be extended as necessary or (c) accept the Property in   its   damaged   condition   with   an assignment of   insurance   proceeds,   if   permitted   by   Seller's   insurance   carrier,   and   receive   credit from Seller at closing in the   amount   of   the   deductible   under   the   insurance   policy.   Seller's obligations under this paragraph are independent of any   other   obligations   of   Seller   under   this contract.
                            </p>
                        </li>
                        {/* 15 */}
                        <li className='bigNumber' id="big15">
                            <p>
                                <b>DEFAULT:</b>&nbsp;
                                If Buyer fails to comply with this contract, Buyer will be in default, and Seller may (a) enforce specific performance, seek such other relief as may be provided by law, or both, or (b) terminate this contract and   receive   the   earnest   money   as   liquidated   damages,   thereby   releasing both parties from this contract. If Seller fails to comply with this contract, Seller will be in default and Buyer may (a) enforce specific performance, seek such other relief as may be provided by law, or both, or (b) terminate this contract and receive the earnest money, thereby releasing both parties from this contract.
                            </p>
                        </li>
                        {/* 16 */}
                        <li className='bigNumber' id="big16">
                            <p>
                                <b>MEDIATION:</b>&nbsp;
                                It is the policy of the State of Texas to encourage resolution of disputes through alternative   dispute   resolution   procedures   such   as   mediation.   Any   dispute    between    Seller   and Buyer   related   to   this   contract   which   is   not   resolved   through   informal    discussion    will    be submitted to a   mutually   acceptable   mediation   service   or   provider.   The   parties   to   the   mediation shall bear the mediation costs equally. This paragraph does not preclude a party   from   seeking equitable relief from a court of competent jurisdiction.
                            </p>
                        </li>
                        {/* 17 */}
                        <li className='bigNumber' id="big17">
                            <p>
                                <b>ATTORNEY'S FEES:</b>&nbsp;
                                A Buyer, Seller, Listing Broker, Other Broker, or Escrow Agent who prevails in any legal proceeding   related   to   this   contract   is   entitled   to   recover   reasonable   attorney's   fees and all costs of such proceeding.
                            </p>
                        </li>
                        {/* 18 */}
                        <li className='bigNumber' id="big18">
                            <p><b>ESCROW:</b></p>
                            <div className='flex justify-start gap-4'>
                                <p>A.</p>
                                <p>
                                    ESCROW: The Escrow Agent is not (i) a party to this contract and does not have liability for the performance or nonperformance of any party to this   contract,   (ii)   liable   for   interest   on   the earnest money and (iii) liable for the loss of any earnest money caused by the failure of any financial institution in which the   earnest   money   has   been   deposited   unless   the   financial institution is acting as Escrow Agent. Escrow Agent may require any disbursement made in connection with this contract to be conditioned on Escrow Agent's collection of good funds acceptable to Escrow Agent.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>B.</p>
                                <p>
                                    EXPENSES: At closing, the earnest money must be applied first to any cash down payment, then to Buyer's Expenses and any excess refunded to Buyer. If no closing occurs, Escrow Agent may: (i) require a written release of liability of   the   Escrow   Agent   from   all   parties   before releasing any earnest money; and (ii) require payment of unpaid expenses incurred on behalf of a party. Escrow Agent may deduct authorized expenses from the earnest money payable to a party. “Authorized expenses” means expenses incurred by Escrow Agent on behalf of the party entitled to the earnest money that were authorized by this contract or that party.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>C.</p>
                                <p>
                                    DEMAND: Upon termination of this contract, either party or the   Escrow   Agent   may   send   a release of earnest money to each party and   the   parties   shall   execute   counterparts   of   the release and deliver same to the Escrow Agent. If either party fails to execute the release, either party may make a written demand to the Escrow Agent for the earnest money. If only one party makes written demand for the   earnest   money,   Escrow   Agent   shall   promptly   provide   a copy of the demand to the other party. If Escrow Agent does not receive written objection to the demand from the other party within   15   days,   Escrow   Agent   may   disburse   the   earnest money to the party making demand reduced by the amount of unpaid expenses incurred on behalf of the party receiving the earnest money and Escrow Agent may pay the same to the creditors. If Escrow Agent complies with the provisions of this paragraph, each party   hereby releases Escrow Agent from all adverse claims related to the disbursal of the earnest money.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>D.</p>
                                <p>
                                    DAMAGES: Any party who wrongfully fails or refuses to sign a release acceptable to the Escrow Agent within 7 days of receipt of the request will be liable to the other party for (i) damages;
                                    (ii) the earnest money; (iii) reasonable attorney's fees; and (iv) all costs of suit.
                                </p>
                            </div>
                            <div className='flex justify-start gap-4'>
                                <p>E.</p>
                                <p>
                                    NOTICES: Escrow Agent's notices will be effective when sent in compliance with Paragraph 21. Notice of objection to the demand will be deemed effective upon receipt by Escrow Agent.
                                </p>
                            </div>
                        </li>
                        {/* 19 */}
                        <li className='bigNumber' id="big19">
                            <p>
                                <b>REPRESENTATIONS:</b>&nbsp;
                                All   covenants,   representations   and   warranties   in    this    contract    survive closing. If any representation of Seller in this contract is untrue on the Closing Date, Seller will be in default. Unless expressly prohibited by written agreement,   Seller   may   continue   to   show   the Property and receive, negotiate and accept back up offers.
                            </p>
                        </li>
                        {/* 20 */}
                        <li className='bigNumber' id="big20">
                            <p>
                                <b>FEDERAL TAX REQUIREMENTS:</b>&nbsp;
                                If Seller is a "foreign person," as defined by Internal Revenue Code and its regulations, or if Seller   fails   to   deliver   an   affidavit   or   a   certificate   of   non-foreign status to Buyer that Seller is not a "foreign person," then Buyer shall   withhold   from   the   sales proceeds an amount sufficient to comply with applicable   tax   law   and   deliver   the   same   to   the Internal   Revenue   Service   together   with   appropriate   tax   forms.    Internal    Revenue    Service regulations require filing written reports   if   currency   in   excess   of   specified   amounts   is   received   in the transaction.
                            </p>
                        </li>
                        {/* 21 */}
                        <li className='bigNumber' id="big21">
                            <p>
                                <b>NOTICES:</b>&nbsp;
                                All notices from one party to the other must   be   in   writing   and   are   effective   when mailed to, hand-delivered at, or transmitted by fax or electronic transmission as follows:
                            </p>
                            <div className='flex justify-between gap-6 mt-2'>
                                <div className='w-full'>
                                    <p className='flex whitespace-nowrap'><b>To Buyer at: </b> <Input width={'full'} /> </p>
                                    <div className='mt-2'>
                                        <Input width={'full'} />
                                    </div>
                                    <p className='flex justify-between gap-9 whitespace-nowrap mt-2'>
                                        Phone:
                                        <Input width={'full'} />
                                    </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-2'>E-mail/Fax: <Input width={'full'} /> </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-2'>E-mail/Fax: <Input width={'full'} /> </p>
                                    <p className='mt-2'>
                                        With a copy to Buyer's agent at:
                                        <Input width={'full'} />
                                    </p>
                                </div>
                                <div className='w-full'>
                                    <p className='flex whitespace-nowrap'><b>To Seller at: </b> <Input width={'full'} /> </p>
                                    <div className='mt-2'>
                                        <Input width={'full'} />
                                    </div>
                                    <p className='flex justify-between gap-9 whitespace-nowrap mt-2'>
                                        Phone:
                                        <Input width={'full'} />
                                    </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-2'>E-mail/Fax: <Input width={'full'} /> </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-2'>E-mail/Fax: <Input width={'full'} /> </p>
                                    <p className='mt-2'>
                                        With a copy to Buyer's agent at:
                                        <Input width={'full'} />
                                    </p>
                                </div>
                            </div>
                        </li>
                        {/* 22 */}
                        <li className='bigNumber' id="big22">
                            <p>
                                <b>AGREEMENT OF PARTIES:</b>&nbsp;
                                This   contract   contains    the    entire    agreement    of    the    parties and cannot be changed except by their written agreement.   Addenda   which   are   a   part   of   this contract are (Check all applicable boxes):
                            </p>
                            <div className='flex justify-between gap-6'>
                                <div className='w-full'>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Third Party Financing Addendum</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Seller Financing Addendum</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Property Subject to Mandatory Membership in a Property Owners Association</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Buyer's Temporary Residential Lease</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Loan Assumption Addendum</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Sale of Other Property by Buyer</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Reservation of Oil, Gas and Other Minerals</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for "Back-Up" Contract </p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Coastal Area Property</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Authorizing Hydrostatic Testing</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum Concerning Right to Terminate Due to Lender's Appraisal</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Environmental Assessment, Threatened or Endangered Species and Wetlands Addendum</p>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Seller's Temporary Residential Lease</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Short Sale Addendum</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Property Located Seaward of the Gulf Intracoastal Waterway</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Seller's Disclosure of Information on Lead-based Paint and Lead-based Paint Hazards as Required by Federal Law</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum for Property in a Propane Gas System Service Area</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum Regarding Residential Leases</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum Regarding Fixture Leases</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p>Addendum containing Notice of Obligation to Pay Improvement District Assessment</p>
                                    </div>
                                    <div className='flex justify-start gap-3 items-start'>
                                        <Input type={'checkbox'} className="mt-[6px]" />
                                        <p className=''>Other (list): <Input width={'64'} /></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 23 */}
                        <li className='bigNumber' id="big23">
                            <p>
                                <b>CONSULT AN ATTORNEY BEFORE SIGNING:</b>&nbsp;
                                TREC rules prohibit real estate brokers and sales agents from giving legal advice. READ THIS CONTRACT CAREFULLY.
                            </p>
                            <div className='flex justify-between gap-6 mt-2'>
                                <div className='w-full'>
                                    <p className='flex whitespace-nowrap'>Buyer's Attorney is:<Input width={'full'} /> </p>
                                    <div className='mt-2'>
                                        <Input width={'full'} />
                                    </div>
                                    <p className='flex justify-between gap-6 whitespace-nowrap mt-2'>
                                        Phone:
                                        <Input width={'full'} />
                                    </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-11'>Fax: <Input width={'full'} /> </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-6'>E-mail: <Input width={'full'} /> </p>
                                </div>
                                <div className='w-full'>
                                    <p className='flex whitespace-nowrap'>Seller's Attorney is: <Input width={'full'} /> </p>
                                    <div className='mt-2'>
                                        <Input width={'full'} />
                                    </div>
                                    <p className='flex justify-between gap-6 whitespace-nowrap mt-2'>
                                        Phone:
                                        <Input width={'full'} />
                                    </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-11'>Fax: <Input width={'full'} /> </p>
                                    <p className='flex whitespace-nowrap mt-2 gap-6'>E-mail: <Input width={'full'} /> </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='border border-black/80 p-10 mt-10'>
                <div className='border border-black mt-40 p-3'>
                    <p><b>EXECUTED the <Input width={20} />day of <Input width={64} /> (Effective Date).  </b></p>
                    <p><b>(BROKER: FILL IN THE DATE OF FINAL ACCEPTANCE.)</b></p>
                </div>
                <div className='mt-20 flex justify-between gap-6'>
                    <div className='w-full'>
                        <Input width={'full'} />
                        <p>Buyer</p>
                    </div>
                    <div className='w-full'>
                        <Input width={'full'} />
                        <p>Seller</p>
                    </div>
                </div>
                <div className='flex justify-between gap-6'>
                    <div className='w-full'>
                        <Input width={'full'} />
                        <p>Buyer</p>
                    </div>
                    <div className='w-full'>
                        <Input width={'full'} />
                        <p>Seller</p>
                    </div>
                </div>
                <div className='border border-black p-3 flex justify-between items-center gap-4 mt-40'>
                    <img src='/img/trec.png' alt='' />
                    <p className='text-sm'>The form of this contract has been approved by the Texas Real Estate Commission. TREC forms are intended for use only by trained real estate license holders. No representation is made as to the legal validity or adequacy of any provision in any specific transactions. It is not intended for   complex transactions. Texas Real Estate Commission, P.O. Box 12188, Austin, TX 78711-2188, (512) 936-3000 (http://www.trec.texas.gov) TREC NO. 20-17. This form replaces TREC NO. 20-16.</p>
                </div>
            </div>
        </div>
    )
}

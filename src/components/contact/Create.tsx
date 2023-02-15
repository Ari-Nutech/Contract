import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { setAlert } from '../../../actions/alert';
// import { createCard } from '../../actions/card';

function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardHolderName: '',
    cardType: '',
    cardUUID: '',
    encryptedNumber: '',
    expirationMonth: '',
    expirationYear: '',
    // firstSix: '',
    // lastFour: '',
    securityCode: ''
  });

  const {
    cardHolderName,
    cardType,
    cardUUID,
    encryptedNumber,
    expirationMonth,
    expirationYear,
    // firstSix,
    // lastFour,
    securityCode
  } = formData;

  const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // setLoading(true);

    // const res = await dispatch(
    //   createCard({
    //     cardHolderName,
    //     cardType,
    //     cardUUID,
    //     encryptedNumber,
    //     expirationMonth,
    //     expirationYear,
    //     // firstSix,
    //     // lastFour,
    //     securityCode
    //   })
    // );

    // setLoading(false);
    // if (res) {
    //   navigate('/card/get');
    // }
  };


  const Input = ({ type = "text", width, className }: any) => {
    return (
      <input type={type} className={`${className} border-b border-black/50 outline-none shadow-sm w-${width}`} />
    )
  }

  return (
    <div>
      <div className="n-container py-10">
        <div className="flex justify-center mt-10">
          <Link to={'/'}>
            <img src="/img/HorizontalLogoNegative.png" className="cursor-pointer w-[500px]" alt="" />
          </Link>
        </div>
        <h1 className="text-4xl font-bold underline text-center mt-4">Create</h1>

        <div className="mt-10 m-auto">
          <form className="form" onSubmit={onSubmit}>
            <div className='border p-10'>

              <div className='flex justify-between items-center'>
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
                  <li className='bigNumber'>
                    <b>PARTIES:</b> The parties to this contract are
                    <Input width={64} />(Seller) and
                    <Input width={64} />(Buyer).
                    Seller agrees to sell and convey to Buyer and Buyer agrees to buy from Seller the Propety defines below.
                  </li>
                  <li className='bigNumber'>
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
                  <li className='bigNumber'>
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
                  <li className='bigNumber'>
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
                  <li className='bigNumber'>
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
                  <li className='bigNumber'>
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
                            <p>
                              The standard printed exception as to discrepancies, conflicts, shortages in area or boundary lines, encroachments or protrusions, or overlapping improvements:
                            </p>
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
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-5">
              <input
                disabled={isLoading}
                type="submit"
                value={isLoading ? 'Loading...' : 'Create'}
                className="w-32 px-6 py-3 border border-[#5C6BC0] text-[#5C6BC0] cursor-pointer font-medium rounded shadow-lg"
              />
              <Link to={'/'}>
                <button className="w-32 px-6 py-3 border border-[#5C6BC0] text-[#5C6BC0] cursor-pointer font-medium rounded shadow-lg">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;

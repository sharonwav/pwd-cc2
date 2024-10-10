import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductPage = () => {
  return (
    <main className='product'>
      <section className='bg-white pt-[6rem]'>
        <div className='m-auto max-w-screen-xl min-h-min flex flex-col items-center justify-center py-[2rem]'>
            <p className='text-black h1 text-center pt-[5rem] pb-[2rem]'>
                Begin with better forms.<br/>
                End with better results.
            </p>
            <p className='text-xl text-center'>
                Whether you need customers, feedback, or something else, Typeform helps you collect up to <b>3.5x more data.</b><br/>
                Try for free.
            </p>
            <Link href="" className='btn-black btn-black-thin mt-[2rem]'>Sign up</Link>
            <div className='flex flex-col items-center justify-center py-[5rem] gap-6'>
                <p>Rates 4.5 out of 600+ reviews on G2.com and trusted by</p>
                <div className='flex items-center justify-center gap-[6rem]'>
                    <Image src={'https://www.typeform.com/static/homepage/partners/airbnb-logo.svg'} width={100} height={130} alt='Picture'/>
                    <Image src={'https://www.typeform.com/static/homepage/partners/mailchimp-logo.svg'} width={100} height={100} alt='Picture'/>
                    <Image src={'https://www.typeform.com/static/homepage/partners/hermes-logo.svg'} width={100} height={100} alt='Picture'/>
                    <Image src={'https://www.typeform.com/static/homepage/partners/hubspot-logo.svg'} width={100} height={100} alt='Picture'/>
                    <Image src={'https://www.typeform.com/static/homepage/partners/barrys-logo.svg'} width={100} height={100} alt='Picture'/>
                </div>
            </div>
            <p className='h1a mt-[5rem]'>Build forms people fill out</p>
            <div className='grid grid-cols-3 gap-5 py-[5rem]'>
                <div className='flex flex-col gap-4'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/7MiTzHwoxKeQKbY4z5NDFK/f36f7ced773f8fefe197adcbd35a6e05/PhotoBuild_forms_people_.png?fm=webp&q=75&w=500'} width={500} height={500} alt='Picture'/>
                    <p className='text-xl'>Ask questions naturally</p>
                    <p>
                        Make form-filling feel effortless by replacing walls of<br/>
                        questions with just one at a time. By mirroring a real<br/>
                        conversation, you get more engagement.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/4rhXbbhpaPZQyr5WmLCPvv/835106dedd638c1a92c9161b15602a60/PhotoBuild_forms_people_-1.png?fm=webp&q=75&w=500'} width={500} height={500} alt='Picture'/>
                    <p className='text-xl'>Match your brand</p>
                    <p>
                        From logos to colors, upload your brand assets to<br/>
                        customize forms in a click. When they're instantly<br/>
                        recognizable, people trust that it's really you.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/5BM15aRzpV1O0UMjhAyXTZ/42ce936e71a3cd5508395267ea2bb5a7/PhotoBuild_forms_people_-2.png?fm=webp&q=75&w=500'} width={500} height={500} alt='Picture'/>
                    <p className='text-xl'>Adapt in real-time</p>
                    <p>
                        Treat everyone as individuals so they feel encouraged<br/>
                        to fill out your form. Call form takers by their name<br/>
                        and ask follow-up questions based on their answers.
                    </p>
                </div>
            </div>
            <Link href="" className='underline mt-[3rem]'>Browse templates</Link>
            <p className='h1a mt-[5rem] text-center'>Get more from those<br/>forms</p>
            <div className='grid grid-cols-3 gap-5 py-[5rem]'>
                <div className='flex flex-col gap-4'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/tfzufdXO3yxLEjtcQQpBu/4a26bae0d84cb738c79a32f9c4ba8b74/PhotoGet_more_from_those.png?fm=webp&q=75&w=500'} width={500} height={500} alt='Picture'/>
                    <p className='text-xl'>Gather all data types</p>
                    <p>
                        From name and email to ranking and rating, ask your<br/>
                        form takers anything. Choose from 28 editable<br/>
                        question types to build your form.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/gCBb41SzDoDTO6VSKH8HA/fb38f1429e4160e3b309ff3585e6376c/imageproduct_pages.png?fm=webp&q=75&w=500'} width={500} height={500} alt='Picture'/>
                    <p className='text-xl'>Share where people browse</p>
                    <p>
                        Reach more potential form takers. Paste a link to post<br/>
                        your on form social, or copy-ready-made code to<br/>
                        embed in emails and landing pages.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/Tpr4ZZh3H7APk4b6jDVaI/4360bc49f94d8c010064bf6a38f04cb2/PhotoGet_more_from_those-2.png?fm=webp&q=75&w=500'} width={500} height={500} alt='Picture'/>
                    <p className='text-xl'>Reveal clear insights</p>
                    <p>
                        Make the most of the data you collect. See a detailed<br/>
                        analysis, including insights like average and most<br/>
                        popular responses, for each form question.
                    </p>
                </div>
            </div>
            <p className='h3 mt-[5rem] text-center'>Easily integrate with all your essential apps</p>
            <div className='flex items-center justify-center gap-[7rem] py-[4rem]'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/2ce7dpftnIctKE20Kfo0Cl/844de8d5277aee839ec84a964c3852eb/Integration_Logos-zapier.png?fm=webp&q=75'} width={60} height={60} alt='Picture'/>
                    <p className='text-mini'>Zapier</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image src={'https://fonts.gstatic.com/s/i/productlogos/sheets_2020q4/v10/192px.svg'} width={60} height={60} alt='Picture'/>
                    <p className='text-mini'>Google Sheets</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <Image src={'https://www.typeform.com/static/homepage-refresh/integrations/slack-logo.svg'} width={56} height={56} alt='Picture'/>
                    <p className='text-mini'>Slack</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image src={'https://www.typeform.com/static/homepage-refresh/integrations/analytics-logo.svg'} width={56} height={56} alt='Picture'/>
                    <p className='text-mini'>Google Analytics</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <Image src={'https://www.typeform.com/static/homepage-refresh/integrations/hubspot-logo.svg'} width={56} height={56} alt='Picture'/>
                    <p className='text-mini'>Hubspot</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image src={'https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg'} width={60} height={60} alt='Picture'/>
                    <p className='text-mini'>HubSpot</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5 py-[5rem]'>
                <Link href="" className="btn-black btn-black-thin">Sign up</Link>
                <Link href="" className="text-white btn-white-thin-bordered">Browse 120+ integrations</Link>
            </div>
            <div className='flex items-center justify-center w-[100%]'>
                <div className='w-[50%] flex items-center justify-center'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/9kClHUZx6LdyM2FzEQIsu/0c31157d2f2f178affdc6f3869b7bf14/optimizing.png?fm=webp&q=75'} width={581} height={581} alt='Picture'/>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className='flex flex-col items-start justify-center gap-3'>
                        <p>TYPEFORM AI</p>
                        <p className='h3'>
                            Building forms has<br/>
                            never been easier
                        </p>
                        <p>
                            Effortlessly co-create your forms with AI. Then keep<br/>
                            improving them with AI insights.
                        </p>
                        <Link href="" className='btn-white-thin-bordered'>Find out more</Link>
                    </div>
                </div>
            </div>
            <div className='product-box flex items-center justify-center my-[5rem]'>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className='flex flex-col items-start justify-center gap-3'>
                        <p className='h3'>"It's just a better design"</p>
                        <p>
                            Chase Clark, Senior UX Researcher at Calm, explains why they choose Typeform over<br/>
                            other tools.
                        </p>
                        <Link className='btn-black btn-black-thin-two' href="/services">Read customer story</Link>
                    </div>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/6ExDP9cZBPdZ0938MFVolW/499fd587e75e56722639ee1c1f00a815/Photo-CALM.png?fm=webp&q=75'} width={479} height={599} alt='Picture'/>
                </div>
            </div>
            <div className='flex items-center justify-center w-[100%] my-[3rem]'>
                <div className='w-[50%] flex items-center justify-center'>
                    <Image src={'https://images.ctfassets.net/co0pvta7hzrh/4gI2IjIMLr41rIdAmWpfSz/84a0ed851ed1900009bdfa2d0263688a/enterprise_product_overview.png?fm=webp&q=75'} width={581} height={581} alt='Picture'/>
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <div className='flex flex-col items-start justify-center gap-3'>
                        <p>TYPEFORM ENTERPRISE</p>
                        <p className='h3'>
                            Forms that keep every<br/>
                            team happy
                        </p>
                        <p>
                            Our enterprise plan is designed to keep you secure,<br/>
                            compliant, and on brand--so everyone approves.
                        </p>
                        <Link href="" className='btn-white-thin-bordered'>Find out more</Link>
                    </div>
                </div>
            </div>
            <p className='h3 mt-[5rem] text-center'>Try Typeform for free</p>
            <p className='text-center'>Create unlimited forms, access 3,000+ templates, and start getting responses.</p>
            <div className='flex items-center justify-center gap-5 py-[5rem]'>
                <Link href="" className="btn-black btn-black-thin">Sign up</Link>
                <Link href="" className="text-white btn-white-thin-bordered">Compare plans</Link>
            </div>
        </div>
      </section>
      <section className='m-auto max-w-screen-xl min-h-min'>
        <div className="flex items-start justify-center py-[5rem] gap-[1rem]">
          {/* ROW 1 */}
          <div className="flex flex-col items-start gap-[2rem]">
            <div>
              <p className="text-white">PRODUCT</p>
            </div>
            <div className="flex flex-col mt-5">
              <Link href="" className="text-dp text-white text-anm">Pricing</Link>
              {/* DROPDOWN */}
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Enterprise</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Enterprise overview</Link>
                    <Link href="" className="text-white text-anm">Healthcare</Link>
                  </div>
                </div>
              </div>
              <Link href="" className="text-anm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="24"
                  fill="#fffff"
                  viewBox="0 0 134 24"
                >
                  <path
                    fill="#ffffff"
                    d="M32.4 6.92h3.052l3.126 8.02 3.126-8.02h3.053l-5.154 12.286h-2.051L32.399 6.92zM59.148 19.4c-1.808 0-3.2-.568-4.176-1.706-.962-1.154-1.442-2.697-1.442-4.632 0-1.933.48-3.47 1.441-4.607.977-1.153 2.37-1.73 4.176-1.73.6-.001 1.192.132 1.734.39.554.26.97.568 1.246.926V1.947h3.029v17.259h-3.029v-1.268c-.195.357-.57.69-1.123 1-.538.308-1.156.462-1.856.462zm.415-2.584c.83 0 1.506-.325 2.027-.974.537-.667.806-1.592.806-2.78 0-1.186-.269-2.104-.806-2.754-.521-.666-1.197-1-2.027-1-.83 0-1.514.334-2.052 1-.537.65-.806 1.568-.806 2.754 0 1.17.27 2.088.806 2.755.538.666 1.222.999 2.052.999zM73.366 19.4c-1.336 0-2.45-.308-3.346-.926a5.794 5.794 0 01-1.954-2.388 7.772 7.772 0 01-.61-3.024c0-1.04.203-2.04.61-2.998a5.589 5.589 0 011.954-2.389c.896-.633 2.01-.95 3.346-.95 1.286 0 2.36.309 3.224.926a5.394 5.394 0 011.904 2.291c.401.898.61 1.87.612 2.852v1.244h-8.67c.031.472.17.918.414 1.34.26.423.619.772 1.075 1.048.472.26 1.01.39 1.612.39 1.237 0 2.238-.585 3.004-1.754l2.417 1.267c-1.172 2.048-3.036 3.072-5.592 3.072V19.4zm2.882-7.654c-.163-.748-.48-1.356-.952-1.828-.473-.472-1.116-.707-1.93-.707-.782 0-1.432.252-1.954.755a3.24 3.24 0 00-.952 1.78h5.788zM87.192 19.4c-1.22 0-2.287-.284-3.2-.853a5.88 5.88 0 01-2.124-2.291c-.489-.975-.733-2.04-.733-3.194 0-1.153.244-2.21.733-3.168a5.837 5.837 0 012.125-2.316c.912-.568 1.978-.853 3.199-.853 1.222 0 2.288.284 3.2.853a5.666 5.666 0 012.1 2.316c.505.958.758 2.015.758 3.168a6.844 6.844 0 01-.758 3.194 5.704 5.704 0 01-2.1 2.291c-.912.569-1.978.853-3.2.853zm0-2.584c.994 0 1.76-.365 2.296-1.096.554-.732.83-1.618.83-2.658 0-1.04-.276-1.925-.83-2.656-.537-.732-1.302-1.097-2.296-1.097-.993 0-1.766.365-2.32 1.096-.538.732-.806 1.617-.806 2.657s.268 1.926.806 2.658c.554.731 1.327 1.096 2.32 1.096zM99.26 19.4c-1.09 0-1.986-.325-2.686-.974-.7-.65-1.05-1.568-1.05-2.756 0-.796.22-1.494.66-2.096.438-.617 1.058-1.088 1.855-1.413.798-.342 1.71-.512 2.735-.512h2.052v-.536c0-.65-.204-1.138-.611-1.463-.406-.325-.919-.488-1.538-.488a2.2 2.2 0 00-1.295.415c-.374.26-.65.69-.83 1.292l-2.564-.731a4.488 4.488 0 011.71-2.463c.862-.633 1.856-.95 2.979-.95 1.596 0 2.833.398 3.713 1.194.879.78 1.318 2.096 1.318 3.949v7.338h-2.345l-.317-1.56c-.96 1.17-2.223 1.754-3.786 1.754zm.415-2.462c.522 0 1.018-.113 1.491-.341.466-.21.87-.538 1.172-.95.309-.423.464-.91.464-1.463v-.268h-2.223c-.733 0-1.302.146-1.71.438-.39.276-.586.708-.586 1.292 0 .342.123.642.367.903.244.26.586.39 1.025.39zm14.023 2.462c-2.768 0-4.576-1.226-5.423-3.68l2.736-.951c.228.715.562 1.235 1.001 1.56.44.325 1.034.488 1.783.488.587 0 1.067-.106 1.441-.317.391-.228.586-.512.586-.854 0-.324-.187-.584-.561-.78-.375-.21-1.051-.422-2.027-.633-2.768-.602-4.152-1.918-4.152-3.95 0-.698.203-1.316.61-1.852a3.901 3.901 0 011.612-1.268 5.408 5.408 0 012.149-.438c2.198 0 3.802.918 4.812 2.754l-2.174 1.512c-.586-1.122-1.457-1.682-2.613-1.682a2.15 2.15 0 00-1.124.292c-.309.195-.464.447-.464.756 0 .325.155.593.464.804.309.211.896.406 1.759.585 1.53.292 2.661.724 3.394 1.292.75.552 1.124 1.357 1.124 2.413 0 1.22-.473 2.187-1.417 2.901-.928.7-2.1 1.048-3.516 1.048zm8.16-17.453h3.028v9.531l4.03-4.558h3.663l-5.25 5.63 5.813 6.656h-3.664l-4.592-5.583v5.583h-3.028V1.947zM48.883 5.336c-.553 0-1.017-.186-1.392-.56-.374-.374-.561-.838-.561-1.39 0-.552.187-1.016.561-1.39.375-.373.84-.56 1.392-.56.554 0 1.019.187 1.392.56.375.374.563.838.563 1.39 0 .552-.188 1.016-.562 1.39-.374.374-.84.56-1.393.56zM47.37 6.92h3.028v12.286H47.37V6.92zm-29.399.222a3.574 3.574 0 01-3.577-3.57A3.574 3.574 0 0117.97 0a3.574 3.574 0 013.578 3.571 3.574 3.574 0 01-3.578 3.571zm-10.793 0A3.574 3.574 0 013.6 3.572 3.574 3.574 0 017.178 0a3.574 3.574 0 013.577 3.571 3.574 3.574 0 01-3.577 3.571zm-5.811 4.447c-.846 0-1.516.728-1.338 1.554A12.792 12.792 0 0012.533 23.2c6.134 0 11.26-4.307 12.505-10.057.178-.826-.492-1.554-1.338-1.554H1.367z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col items-start gap-[2rem]">
            <div>
              <p className="text-white">TEMPLATES</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Popular templates</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Interactive story template</Link>
                    <Link href="" className="text-white text-anm">Trivia Quiz</Link>
                    <Link href="" className="text-white text-anm">Job application form</Link>
                    <Link href="" className="text-white text-anm">Event registration form</Link>
                    <Link href="" className="text-white text-anm">NPS survey</Link>
                  </div>
                </div>
              </div>
              {/* DROPDOWN */}
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Recent templates</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Photo upload form</Link>
                    <Link href="" className="text-white text-anm">Customer satisfaction<br/>form</Link>
                    <Link href="" className="text-white text-anm">Website questionnaire<br/>template</Link>
                    <Link href="" className="text-white text-anm">Beta product feedback<br/>survey</Link>
                    <Link href="" className="text-white text-anm">Pre-order form template</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Popular categories</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Lead gen forms</Link>
                    <Link href="" className="text-white text-anm">Lead gen quizzed</Link>
                    <Link href="" className="text-white text-anm">Registration forms</Link>
                    <Link href="" className="text-white text-anm">Customer success forms</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Recent categories</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">File upload forms</Link>
                    <Link href="" className="text-white text-anm">Job application forms</Link>
                    <Link href="" className="text-white text-anm">Application forms</Link>
                    <Link href="" className="text-white text-anm">Event forms</Link>
                    <Link href="" className="text-white text-anm">Educational templates</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="flex flex-col items-start gap-[2rem]">
            <div>
              <p className="text-white">INTEGRATIONS</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Popular integration apps</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Slack Integration</Link>
                    <Link href="" className="text-white text-anm">Mailchimp Integration</Link>
                    <Link href="" className="text-white text-anm">Klaviyo Integration</Link>
                    <Link href="" className="text-white text-anm">WordPress Integration</Link>
                    <Link href="" className="text-white text-anm">PipeDrive Integration</Link>
                  </div>
                </div>
              </div>
              {/* DROPDOWN */}
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">More integration apps</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Google Calendar<br/>Integration</Link>
                    <Link href="" className="text-white text-anm">Zoho Integration</Link>
                    <Link href="" className="text-white text-anm">Office 365 Integration</Link>
                    <Link href="" className="text-white text-anm">Zendesk Integration</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Popular app categories</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Analytics Reporting<br/>Integration</Link>
                    <Link href="" className="text-white text-anm">Sales and CRM Integration</Link>
                    <Link href="" className="text-white text-anm">Payments Integration</Link>
                    <Link href="" className="text-white text-anm">Scheduling Integration</Link>
                    <Link href="" className="text-white text-anm">Email Marketing<br/>Integration</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">More app categories</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Customer Support<br/>Integration</Link>
                    <Link href="" className="text-white text-anm">Automation Integration</Link>
                    <Link href="" className="text-white text-anm">Documents Integration</Link>
                    <Link href="" className="text-white text-anm">Rewards Integration</Link>
                    <Link href="" className="text-white text-anm">Collaboration Integration</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 4 */}
          <div className="flex flex-col items-start gap-[2rem]">
            <div>
              <p className="text-white">RESOURCES</p>
            </div>
            <div className="flex flex-col mt-3">
              <Link href="" className="text-dp text-white py-2 text-anm">Blog</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Help center</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Community</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Tutorials</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">FAQs</Link>
              {/* DROPDOWN */}
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Why Typeform?</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Typeform vs Jotform</Link>
                    <Link href="" className="text-white text-anm">Typeform vs Formstack</Link>
                  </div>
                </div>
              </div>
              <Link href="" className="text-dp text-white text-anm">Referral Program</Link>
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Partners</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Agency</Link>
                    <Link href="" className="text-white text-anm">Technology</Link>
                    <Link href="" className="text-white text-anm">Agency directory</Link>
                  </div>
                </div>
              </div>
              <Link href="" className="text-dp text-white py-2 text-anm">System status</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Developers / API</Link>
            </div>
          </div>

          {/* ROW 5 */}
          <div className="flex flex-col items-start gap-[2rem]">
            <div>
              <p className="text-white">GET TO KNOW US</p>
            </div>
            <div className="flex flex-col items-start mt-3">
              <Link href="" className="text-dp text-white py-2 text-anm">About us</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Brand</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Carrers</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Contact sales</Link>
              {/* DROPDOWN */}
              <div className="flex flex-col">
                <div className="collapse collapse-arrow text-white">
                  <input type="checkbox"/>
                  <div className="collapse-title text-white text-dp p-0 flex items-center">Terms & conditions</div>
                  <div className="collapse-content flex flex-col ml-3 gap-3">
                    <Link href="" className="text-white text-anm">Terms & conditions</Link>
                    <Link href="" className="text-white text-anm">NFIR</Link>
                    <Link href="" className="text-white text-anm">Modern Slavery<br/>Statement</Link>
                  </div>
                </div>
              </div>
              <Link href="" className="text-dp text-white py-2 text-anm">Typeform (es)</Link>
              <Link href="" className="text-dp text-white py-2 text-anm">Newsletter</Link>
              <div className="flex items-center py-2 gap-3">
                <Link href="" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M.295 12.925c0 5.966 4.357 10.927 10.056 11.932l.067-.053-.068-.013v-8.514H7.333v-3.352h3.017v-2.682c0-3.017 1.944-4.693 4.693-4.693.871 0 1.81.134 2.681.269v3.083h-1.542c-1.475 0-1.81.738-1.81 1.676v2.347h3.218l-.536 3.352h-2.682v8.514l-.066.013.067.053c5.699-1.005 10.056-5.966 10.056-11.932 0-6.637-5.43-12.068-12.067-12.068C5.725.857.295 6.287.295 12.925z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="currentColor"
                      d="M14.559 10.586L23.665 0h-2.158L13.6 9.191 7.284 0H0l9.55 13.9L0 25h2.158l8.35-9.707L17.178 25h7.284l-9.904-14.414zm-2.956 3.436l-.968-1.384-7.7-11.013H6.25l6.214 8.887.967 1.384 8.077 11.553h-3.315l-6.59-9.427z"
                    ></path>
                  </svg>
                </Link>
                <Link href="" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill="currentColor"
                      d="M7.734.941c-1.277.06-2.148.264-2.91.564A5.873 5.873 0 002.7 2.893a5.878 5.878 0 00-1.38 2.126c-.295.764-.495 1.637-.552 2.915C.712 9.21.7 9.622.706 12.88c.006 3.26.02 3.668.082 4.948.061 1.277.264 2.148.564 2.91.308.79.72 1.458 1.388 2.123a5.873 5.873 0 002.128 1.38c.763.296 1.636.497 2.914.553 1.277.055 1.688.068 4.946.062 3.258-.006 3.668-.02 4.948-.081 1.28-.06 2.147-.265 2.91-.563a5.881 5.881 0 002.122-1.389 5.88 5.88 0 001.38-2.128c.296-.763.496-1.636.552-2.912.056-1.281.069-1.69.063-4.949-.007-3.258-.021-3.666-.082-4.946-.06-1.28-.264-2.149-.563-2.912a5.891 5.891 0 00-1.388-2.123 5.857 5.857 0 00-2.128-1.38c-.764-.295-1.636-.496-2.913-.551C16.35.867 15.94.852 12.68.859 9.422.865 9.014.879 7.734.94zm.14 21.694c-1.17-.051-1.805-.246-2.228-.408a3.736 3.736 0 01-1.382-.895 3.695 3.695 0 01-.9-1.378c-.165-.424-.363-1.058-.417-2.228-.06-1.265-.072-1.645-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.17.246-1.805.408-2.229.216-.561.477-.96.895-1.381a3.704 3.704 0 011.379-.9c.423-.166 1.057-.362 2.227-.418 1.265-.06 1.644-.072 4.848-.079 3.203-.007 3.583.005 4.85.061 1.168.051 1.805.245 2.227.408.561.216.96.476 1.382.895.422.42.682.818.9 1.379.166.422.362 1.056.417 2.226.06 1.266.074 1.645.08 4.848.006 3.203-.006 3.584-.061 4.848-.051 1.17-.245 1.806-.408 2.23a3.72 3.72 0 01-.895 1.381c-.42.422-.819.681-1.379.9-.422.165-1.057.362-2.226.417-1.266.06-1.645.072-4.85.08-3.204.006-3.582-.007-4.847-.061m9.782-16.191a1.44 1.44 0 102.88-.005 1.44 1.44 0 00-2.88.005zM6.543 12.87a6.162 6.162 0 1012.323-.026 6.162 6.162 0 00-12.323.026zm2.161-.005a4 4 0 118-.016 4 4 0 01-8 .016z"
                    ></path>
                  </svg>
                </Link>
                <Link href="" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="21"
                    fill="none"
                    viewBox="0 0 25 21"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22.265 2.274a3.13 3.13 0 012.21 2.21c.522 1.95.522 6.017.522 6.017s0 4.067-.523 6.017a3.13 3.13 0 01-2.21 2.21c-1.949.522-9.766.522-9.766.522s-7.816 0-9.766-.523a3.13 3.13 0 01-2.21-2.21C0 14.569 0 10.502 0 10.502s0-4.067.522-6.017a3.13 3.13 0 012.21-2.21c1.95-.522 9.766-.522 9.766-.522s7.817 0 9.767.522zM9.999 6.751v7.5l6.494-3.75-6.494-3.75z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    fill="none"
                    viewBox="0 0 25 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2.36.2C1.444.2.703.94.703 1.853V21.86c0 .915.741 1.656 1.655 1.656h20.006c.915 0 1.655-.741 1.655-1.655V1.853C24.02.94 23.28.2 22.365.2H2.36zm3.578 7.24a2.023 2.023 0 100-4.045 2.023 2.023 0 000 4.045zm3.875 1.495h3.352v1.536s.91-1.82 3.385-1.82c2.208 0 4.037 1.088 4.037 4.403v6.991h-3.474v-6.144c0-1.955-1.044-2.17-1.84-2.17-1.651 0-1.934 1.424-1.934 2.425v5.89H9.813V8.934zm-2.112 0H4.174v11.11h3.527V8.935z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>

              </div>
            
            </div>
          </div>
        </div>
      </section>
      <section className="home-footer flex items-center">
        <div className="m-auto m-w-screen-sm flex items-center gap-[5rem]">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="17"
              fill="none"
              ariaHidden="true"
              className="sc-5876ea6-11 htzHev"
              viewBox="0 0 12 17"
            >
              <path d="M0 0H10V14H0z" transform="translate(1.474 1.328)"></path>
              <path
                stroke="#ffffff"
                d="M6.474 8.328c1.103 0 2-.898 2-2 0-1.103-.897-2-2-2s-2 .897-2 2c0 1.102.897 2 2 2z"
              ></path>
              <path
                stroke="#ffffff"
                d="M2.945 2.758a5.016 5.016 0 013.53-1.43c1.333 0 2.586.508 3.53 1.43 1.757 1.72 1.974 4.958.456 6.937l-3.986 5.633L2.48 9.686c-1.51-1.97-1.294-5.208.464-6.928z"
              ></path>
            </svg>
            <p className="text-mini text-white">With lovee, from Barcelona</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 20 20"
            >
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
              ></path>
            </svg>
            <div className="dropdown dropdown-top">
              <div tabIndex={0} role="button" className="text-white m-1 text-mini">English</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a className="text-dp">English</a></li>
                <li><a className="text-dp">Espanyol</a></li>
              </ul>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none" class="sc-386f720f-0 fbWMJR mb-0.5"><path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.0" d="M12.75 5.33 8.854 9.226a.5.5 0 0 1-.708 0L4.25 5.33"></path></svg>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="" className="text-mini text-white underline">Cookie Settings</Link>
            <Link href="" className="text-mini text-white underline">Check our Cookie Policy to delete cookies</Link>
            <Link href="" className="text-mini text-white underline">Report abuse</Link>
          </div>
          <p className="text-mini text-white">© Typeform</p>
        </div>
      </section>
    </main>
  )
}

export default ProductPage

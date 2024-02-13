const { default: Image } = require("next/image")
import ScrollToTop from '@/elementsClient/ScrollToTop/ScrollToTop'
import Link from 'next/link'
import styles from './home.module.css'

const Home = () => {
    return (
        <>
            <ScrollToTop />

            <section className='my-5'>
                <div className="flex justify-center items-center gap-4 mb-3">
                    <Image src="/media/alhamd.gif" width={50} height={50} alt="basmalah"/>
                    <Image src="/media/bism.gif" width={200} height={50} alt="basmalah"/>
                    <Image src="/media/alhamd.gif" width={50} height={50} alt="basmalah"/>
                </div>
                <Image src="/media/dal1.gif" width={200} height={200} className="m-auto" alt="cat"/>

                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <h3 className="text-lg font-bold">Never argue with stupid people. First they'll drag you down to their level, then they will beat you with their experience.</h3>
                    <marquee>Åä ÇáäÇÓ íäÙÑæä Åáì ãÇ ÃäÙÑ.. æáßäåã áÇ íÑæä ãÇ ÃÑì</marquee>
                    <p>Þíá áÍßíã ãÇ ÇáÚÇÝíå: ÞÇá Ãä íãÑ Èß Çáíæã ÈáÇ ÐäÈ</p>
                    <h3 className="text-lg font-bold">Why am i trying to give ... when no one gives me a try !</h3>
                </div>

                <Image src="/media/welcome4.gif" width={250} height={250} className="m-auto mt-3" alt="emojis"/>
            </section>

            <hr />

            <section className='my-5'>
                <div className={styles.tableShow}>
                    <div className="pb-2 text-center">
                        <Link href="http://www.geocities.com/Area51/4441/space.html" className='link link-error'>
                            <Image src="/media/saabring.jpg" width={125} height={80} align="left" alt='image'/>
                        </Link>
                        <Link href="http://www.webring.org/cgi-bin/webring?ring=space&amp;id=90&amp;next" className='link link-error'>
                            <Image src="/media/nextsite.jpg" width={125} height={80} align="right" alt='image'/>
                        </Link>
                        <p>This <Link href="http://www.geocities.com/Area51/4441/space.html" className='link link-error className="link link-error"'>S:AAB Ring</Link> site is owned by</p>
                        <Link href="mailto:aljabi@bjservices.ae">Baraa Al-Jabi</Link>.
                        <p className='my-3'>Want to join the <Link href="http://www.geocities.com/Area51/4441/space.html" className='link link-error className="link link-error"'>S:AAB Ring</Link>?</p>
                    </div>
                    <div className="text-center text-lg">
                        [<Link href="http://www.webring.org/cgi-bin/webring?ring=space&amp;id=90&amp;sprev" target="_blank" className='link link-error'>Skip Prev</Link>]
                        [<Link href="http://www.webring.org/cgi-bin/webring?ring=space&amp;id=90&amp;prev" target="_blank" className='link link-error'>Prev</Link>]
                        [<Link href="http://www.webring.org/cgi-bin/webring?ring=space&amp;id=90&amp;next" target="_blank" className='link link-error'>Next</Link>]
                        [<Link href="http://www.webring.org/cgi-bin/webring?ring=space&amp;id=90&amp;skip" target="_blank" className='link link-error'>Skip Next</Link>]
                        [<Link href="http://www.webring.org/cgi-bin/webring?random&amp;ring=space" target="_blank" className='link link-error'>Random</Link>]
                        [<Link href="http://www.webring.org/cgi-bin/webring?ring=space&amp;id=90&amp;next5" target="_blank" className='link link-error'>Next 5</Link>]
                        [<Link href="http://www.webring.org/cgi-bin/webring?ring=space&amp;list" target="_blank" className='link link-error'>List Sites</Link>]
                    </div>
                </div>

                <h6 className='text-sm my-5 text-center'>This webring is made possible by <Link href="http://www.webring.org/" className='link link-error className="link link-error"'>WebRing</Link></h6>
                <Image src="/media/syriaaa.gif" width={150} height={150} className='mx-auto mt-5' alt='flag'/>
                {/* <embed src="https://members.tripod.com/~baraa/Mawtinee.mid" className='m-auto'></embed> */}
            </section>

            <hr />

            <section className='my-5'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <Image src="/media/coollink.gif" width={350} height={350} alt='links'/>
                    <div className='flex justify-center items-center gap-3'>
                        <Image src="/media/wavstick.gif" width={200} height={200} alt='links'/>
                        <Link href="http://www.geocities.com/hollywood/set/8630/pictures3.html" className="link link-error">Pictures ... of JMDGrs </Link>:
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <Image src="/media/BJLogo90x65.gif" width={100} height={100} alt='links'/>
                        <Link href="http://www.bj%20services.com/" className="link link-error">BJ Services Company</Link>:
                    </div >
                    <div className='flex justify-center items-center gap-3'>
                        <Image src="/media/bateel.gif" width={150} height={150} alt='links'/>
                        <Link href="http://www.albateel-interior.com/" className="link link-error">Quality Design &amp; Fabrication</Link>:
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <Image src="/media/UFO.gif" width={120} height={120} alt='links'/>
                        <Link href="http://www.wildcards.freeserve.co.uk/home.htm" className="link link-error">Space Above &amp; Beyond</Link>:
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <Image src="/media/33.gif" width={50} height={50} alt='links'/>
                        <Link href="https://members.tripod.com/~baraa/clock2.swf" className="link link-error">Click Clock &amp; Calendar </Link>:
                    </div>
                </div>
            </section>

            <hr />

            <section className='my-5'>
                <div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src="/media/Baraa-txt.jpg"width={400} height={400} alt='links' />
                        <Image src="/media/MailB2C3.gif" width={30} height={30} alt='links' />
                        <Image src="/media/em3.gif" width={80} height={80} alt='links' />
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Link href="mailto:al-jabi@bjservices.ae" className='text-xl mt-5 link link-error'>al-jabi@bjservices.ae</Link>
                        <Image src="/media/arr85.gif" width={50} height={50} alt='links' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1 mt-3'>
                        <Image src="/media/signg.gif" width={175} height={175} alt='links' />
                        {/* <Link href="http://htmlgear.lycos.com/specs/guest.html"><Image width={100} height={100} className='link link-error' alt='links' src="/media/gb_white.gif" /></Link> */}
                        <Link href="http://htmlgear.tripod.com/guest/control.guest?u=aljabi-baraa&amp;i=1&amp;a=view" className='link link-error'>View My Guestbook</Link>
                        <Link href="http://htmlgear.tripod.com/guest/control.guest?u=aljabi-baraa&amp;i=1&amp;a=sign" className='link link-error'>Sign My Guestbook</Link>
                    </div>
                </div>
            </section>

            <hr />

            <section className='my-5'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <Image src="/media/mexicanwave.gif" width={250} height={250} alt='footer' />
                    <div className='flex justify-center items-center'>
                        <p>This page has been visited</p>
                        <Image src="/media/index.html" width={50} height={50} alt='footer' />
                        <p>times, since 20-Oct-1997.</p>
                    </div>
                    <Image src="/media/counter.gif" width={200} height={200} alt='footer' />
                </div>
            </section>
        </>
    )
}

export default Home
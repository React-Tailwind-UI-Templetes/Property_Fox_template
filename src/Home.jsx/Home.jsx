/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import { IoIosStar } from "react-icons/io";
import img from '../../public/img.png'
import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
import zeppelin from '../../public/zeppelin.png'
import oracle from '../../public/oracle.png'
import morpheus from '../../public/morpheus.png'
import samsung from '../../public/samsung.png'
import monday from '../../public/monday.png'
import segment from '../../public/segment.png'
import protonet from '../../public/protonet.png'
import icon from '../../public/icon.png'
import { FaArrowRightLong, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import man2 from '../../public/2man.png'
import ellipse from '../../public/Ellipse.png'
import man3 from '../../public/man3.png'
import hand from '../../public/hand.png'
import money from '../../public/money.png'
import background from '../../public/background.png'
import { Link } from 'react-scroll'
import { useState } from "react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

    const gradientStyle = {
        background: 'linear-gradient(to bottom right, #F7E0EB,  #F2FFF2',
      };
    return (
     <div className=" sm:w-full  mx-auto ">
        {/* Nav and slider */}
   <div style={gradientStyle} className=" ">
    {/* nav */}
    
    <nav className="p-4">
      <div className="container mx-auto font-medium flex justify-between items-center">
        <div className='cursor-pointer'>
          <Link to=""
            spy={true}
            smooth={true}
            duration={500} className="text-black text-lg font-bold">Property Fox</Link>
        </div>
        <div className={`md:flex space-x-4 cursor-pointer ${mobileMenuOpen ? 'hidden' : 'hidden md:flex'}`}>
          <Link to=""
            spy={true}
            smooth={true}
            duration={500} className="text-[#FF56BB]">Home</Link>
          <Link spy={true}
            smooth={true}
            duration={500} to="features" className="text-black">Features</Link>
          <Link spy={true}
            smooth={true}
            duration={500} to="pricing" className="text-black">Pricing</Link>
          <Link spy={true}
            smooth={true}
            duration={500} to="about" className="text-black">About Us</Link>
          <Link spy={true}
            smooth={true}
            duration={500} to="user-guide" className="text-black">User Guide</Link>
          <Link spy={true}
            smooth={true}
            duration={500} to="faq" className="text-black">FAQ</Link>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button (hamburger icon) */}
          <button className="text-black focus:outline-none" onClick={toggleMobileMenu} onDoubleClick={closeMobileMenu}>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex hidden space-x-4 ${mobileMenuOpen ? '' : 'hidden'}`}>
          <button className="text-[#FF56BB]">Login</button>
          <button className="bg-[#FF56BB] hover:bg-[#d21185] text-white px-4 py-2 rounded">Get Started</button>
        </div>
      </div>
      {/* Mobile menu (hidden by default) */}
      <div className={`md:hidden mt-2 flex flex-col cursor-pointer items-center space-y-2 ${mobileMenuOpen ? '' : 'hidden'}`}>
        <Link to="" spy={true} smooth={true} duration={500} className="text-[#FF56BB]" onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="features" spy={true} smooth={true} duration={500} className="text-black" onClick={closeMobileMenu}>
          Features
        </Link>
        <Link to="pricing" spy={true} smooth={true} duration={500} className="text-black" onClick={closeMobileMenu}>
          Pricing
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="text-black" onClick={closeMobileMenu}>
          About Us
        </Link>
        <Link to="user-guide" spy={true} smooth={true} duration={500} className="text-black" onClick={closeMobileMenu}>
          User Guide
        </Link>
        <Link to="faq" spy={true} smooth={true} duration={500} className="text-black" onClick={closeMobileMenu}>
          FAQ
        </Link>
      </div>
    </nav>
    {/* banner/ slider */}
   <div className="md:flex  mx-auto container  md:gap-6 px-4 justify-between items-center pt-5">
   <div className='md:w-1/2'>
        <h1 className="text-6xl font-semibold mb-7">The right mortgage at the <span className="text-[#FF56BB] ">right moment</span></h1>
        <p className="text-lg ">Property Fox empowers advisors with the expertise to seamlessly transition their clients between mortgage products as circumstances and opportunities evolve.</p>
        <Link to='pricing' spy={true}
              smooth={true}
              duration={500}><button className="bg-[#FF56BB] hover:bg-[#d21185] mt-5  text-white px-4 py-2 rounded">Try It Today</button></Link>
        
    </div>
    <div className="flex md:w-1/2 relative flex-col items-center justify-center  h-max w-fit">
      <img src={img1} alt="Image 1    " className="order-1 md:left-4 w-64 mb-2 absolute sm:top-5 top-6 xl:top-28 xl:left-8 2xl:left-52 2xl:top-5 lg:top-12   md:top-3" />
      <img src={img} loading="lazy" alt="Image 2" className="order-2 mb-2 w-full" />
      <img src={img2} alt="Image 3" className="order-3 mb-2 absolute bottom-16 md:bottom-2 md:right-1 right-14 2xl:right-14 2xl:bottom-56 sm:bottom-24 lg:bottom-36 w-64" />
    </div>
   </div>
   </div>
   {/* partner section */}
   <section className='py-20 px-4      container mx-auto'>
    <div>
        <p className='font-medium text-center'>Over 8M+ Home Buyers businesses growing with Property Fox </p>
        <div className='md:grid-cols-7 grid-cols-4 grid gap-4 py-5 md:gap-2 '>
            <img className='h-5 w-28' src={zeppelin} alt="Image" />
            <img className='h-5 w-28' src={oracle} alt="Image" />
            <img className='h-5 w-28' src={morpheus} alt="Image" />
            <img className='h-5 w-28' src={samsung} alt="Image" />
            <img className='h-5 w-28' src={monday} alt="Image" />
            <img className='h-5 w-28' src={segment} alt="Image" />
            <img className='h-5 w-28' src={protonet} alt="Image" />
            
        </div>
    </div>
   </section>
    {/* How Property Fox Works details  */}
    <section id="features" className='mx-auto container md:flex gap-6 items-center px-4 py-20      self-center md:justify-center'>
    <div className='md:w-3/5 bg-gradient-to-bl form-[#F1FFF1] to-[#a18c8c]'>
        <h1 className='font-bold text-2xl my-3'>How Property Fox Works</h1>
        <p>Property Fox equips you with a proactive approach to lead management and a wealth of tools to assist your clients in their mortgage decisions, ensuring you are always one step ahead in the competitive mortgage market.</p>
        <Link to='pricing' spy={true}
              smooth={true}
              duration={500}> <button className='text-white bg-[#FF56BB] mt-5 rounded-lg px-4 py-2 hover:bg-[#8a0e59]'>Get Started</button></Link>
       
    </div>
    <div className='md:w-2/5 mt-7'>
  <ol className=' font-semibold'>
  
    <li className='items-start flex relative before:block before:absolute before:left-[-30px] before:top-1'>
      <img src={icon} alt='List Item 1' className='w-6 h-6 mr-2 inline' />
      Get Started with Quick Data Entry and Portfolio Monitoring
    </li>
    <li className='items-start flex relative before:block before:absolute before:left-[-30px] before:top-1'>
      <img src={icon} alt='List Item 1' className='w-6 h-6 mr-2 inline' />
      Prioritize Leads and Gain
Client Insights
    </li>
    <li className='items-start flex relative before:block before:absolute before:left-[-30px] before:top-1'>
      <img src={icon} alt='List Item 1' className='w-6 h-6 mr-2 inline' />
      Optimize Mortgages and
Engage Clients for Life
    </li>
 
   
  </ol>
</div>
   </section>
   {/* Each mortgage section */}
   <section style={sectionStyle}  className=' '>

<h1  className='text-3xl py-20 font-medium text-center px-12 md:px-2 lg:px-64 2xl:px-96 '>Each mortgage you have written and every evaluation you have conducted represents an opportunity to discover your next deal.</h1>
   </section>

   {/* Our Pricing Policy section */}
   <section id='pricing' className='  px-4    bg-gradient-to-r from-[#FFEAF6]  to-[#DEFAE7] before:bg-blur-md after:bg-blur-md    mx-auto items-center justify-between '>
    <h1 className='pt-11 text-2xl font-bold text-center'>Our Pricing Policy </h1>
 <div className="mx-auto  container items-center justify-center flex ">
 <div className='md:flex py-16 md:justify-center px-96 mx-auto gap-4 md:gap-16     '>
        <div className='before:bg-blur-md after:bg-blur-md mb-12 md:mb-0 border-slate-300 rounded-xl bg-slate-50 h-[540px] w-[360px] shadow-2xl relative p-4'>
            <p className='text-gray-500 font-medium mb-2'>Individual</p>
            <p><span className='text-4xl text-black font-bold'>$49 </span > <span className='text-gray-500 font-medium text-2xl'>per month</span></p>
            <hr className='my-4' />
            <p className='text-gray-500 font-medium mb-3'>WHAT’S INCLUDED:</p>
            <p className='mb-2 font-medium'>Includes:</p>
            <ul className='list-disc ml-5'>
                <li>Everything</li>
                <li>Data validation included</li>
                <li>Lead report sent via email</li>
                <li>Unlimited mortgage deals</li>
            </ul>
            <p className='my-2'>Upload your deals individually or in bulk, with our assistance as needed.</p>
            <p className='my-2 pb-5'>Risk Free: Monthly payment plan, no long term contract, cancel anytime</p>
            <div className='bg-[#519967] hover:bg-[#38854f] w-full absolute bottom-0 left-0 mt-8 pt-6  text-white  flex justify-between items-center p-4 rounded-s-2xl rounded-b-2xl'> <span className='text-xl font-medium'>Subscribe</span><span><FaArrowRightLong />
 </span></div>
        </div>
        <div className='before:bg-blur-md after:bg-blur-md border-slate-300 rounded-xl bg-slate-50 w-[360px] shadow-2xl relative p-4'>
            <p className='text-gray-500 font-medium mb-2'>Enterprise</p>
            <p><span className='text-4xl text-black font-bold'>$2500  </span > <span className='text-gray-500 font-medium text-2xl'>Annual</span></p>
            <hr className='my-4' />
            <p className='mt-6 mb-3'>Then expand as needed with additional users at just $39/user per month</p>
            <p className='my-2'>Deal for small or large brokerages, looking for a cost-effective solution. Our experts will be available to help you set up and optimize your account to get the most out of Property Fox​.</p>
            
            <p className='mb-2 mt-4 font-medium'>Includes:</p>
            <ul className='list-disc ml-5'>
                <li>Everything</li>
                <li>Data validation included</li>
                <li>Lead report sent via email</li>
                <li>Unlimited mortgage deals</li>
            </ul>
            <p className='my-2'>Upload your deals individually or in bulk, with our assistance as needed.</p>
            <p className='my-2 pb-16'>Risk Free: Monthly payment plan, no long term contract, cancel anytime</p>
            <div className='bg-[#FF56BB] hover:bg-[#d82c93] w-full absolute bottom-0 left-0 mt-8 pt-6  text-white  flex justify-between items-center p-4 rounded-s-2xl rounded-b-2xl'> <span className='text-xl font-medium'>Subscribe</span><span><FaArrowRightLong />
 </span></div>
        </div>
        
        
    </div>
 </div>
   </section>

  
   {/* About property fox section */}
   <section id='about' className="bg-gradient-to-r px-4      from-[#FFEAF6]  to-[#DEFAE7">
   <div  className='mx-auto container py-20 md:flex justify-between  gap-6 '>

<div className='md:w-1/2'>
<img src={man2} alt="Image" />
</div>
<div className='md:w-1/2'>
    <h1 className='text-[#FF95D4] font-semibold mt-7 text-2xl my-3'>About Property Fox</h1>
    <h1 className='text-4xl font-bold mb-3'>Empowering Mortgage Brokers</h1>
    <p>In the heart of Vancouver, BC, Property Fox emerged with a transformative vision. We aimed to empower mortgage brokers and financial advisors with the knowledge to be able to move their clients freely between mortgage products as the need and opportunity arises. Our journey began as Broker Scout, a name that echoed our commitment to exploring uncharted territories.</p>
    <Link to='pricing' spy={true}
          smooth={true}
          duration={500}>
    <button className='text-white bg-[#FF56BB] mt-5 rounded-lg px-4 py-2 hover:bg-[#8a0e59]'>Try Property Fox Today</button></Link>
</div>
</div>
   </section>
   {/* Real Life Result */}
<section className="container mx-auto py-20 px-4     ">
    <h1 className='text-4xl font-bold mb-3 text-center'>Real Life Result</h1>
    <p className='text-center'>Hear What Others Have to Say About Their Experience with Us</p>
    <div className='my-8 md:flex gap-5'>
        <div className="border-l-2 pl-4 border-green-800">
            <div className="flex mb-3">
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo!</div>
            <div className="flex gap-2 my-3 items-center"><img src={ellipse} alt="Image" />
            <p className='text-lg font-medium'>Jason buck</p></div>
        </div>
        <div className="border-l-2 pl-4 border-green-800 mt-8 md:mt-0">
            <div className="flex mb-3">
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo!</div>
            <div className="flex gap-2 my-3 items-center"><img src={ellipse} alt="Image" />
            <p className='text-lg font-medium'>Jason buck</p></div>
        </div>
        <div className="border-l-2 pl-4 border-green-800 mt-8 md:mt-0">
            <div className="flex mb-3">
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                <IoIosStar className="  text-yellow-500 size-5" />
                </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo!</div>
            <div className="flex gap-2 my-3 items-center"><img src={ellipse} alt="Image" />
            <p className='text-lg font-medium'>Jason buck</p></div>
        </div>
    </div>
</section>

{/* Don't wait for rate  */}
<section id="user-guide" className="bg-gradient-to-r from-[#F2FFF2] via-[#F2FFF2] to-[#F4F3EF] text-center">
<section  className=" mx-auto container  py-24">
    <h1 className="text-2xl font-bold text-center text-gray-800">Don't Wait for Rate Change Surprises – Be <br />
Prepared with Property Fox</h1>
<p className="my-4  md:px-28">Forecast interest rate changes and evaluate which of your clients would benefit before their renewal becomes competitive, and more frequently than just an annual review. Don't wait for rate changes to contact your clients and risk losing them to discount rate providers or  their bank.</p>
<Link to='footer' spy={true}
              smooth={true}
              duration={500}>
        <button className='text-white bg-[#569C6C] mt-5  self-center rounded-lg px-4 py-2 hover:bg-[#2b7a44]'>Sign Up Today</button></Link>
</section>
</section>
{/* communicate personalized section */}
<section className="bg-gradient-to-r from-[#FFFFFF] via-[#FEEAF7] to-[#FFFEFE]"><div className="md:flex justify-between items-center gap-4  container mx-auto px-4      py-24 ">
<div className="md:w-1/2">

    <p className="text-2xl font-medium">Communicate personalized recommendations to your clients backed by real data, going beyond generic touchpoints like "happy birthday" messages. </p>
    <Link to='footer' spy={true}
              smooth={true}
              duration={500}>
        <button className='text-white bg-[#FF56BB] mt-5 rounded-lg px-4 py-2 hover:bg-[#8a0e59]'>Contact Us</button></Link>
</div>
<div className="md:w-1/2 mt-5 md:mt-0"><img src={man3} alt="Image" /></div>
</div></section>

{/* Work for me */}
<section className="py-24 px-4      bg-[#FFF4FA]">
    <div className="mx-auto container">
    <h1 className="font-bold text-2xl text-center">Will Property Fox work for me?</h1>
    <p className="text-center mt-3 mb-16">Boost sales and drive leads into your pipeline</p>
    <div className="md:flex gap-7 items-center">
        <div className="md:w-1/2 ">
        <img src={money} alt="Money" />

        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-gray-800 font-medium text-2xl">How will Property Fox help me
improve sales?</h1>
<p className="">Mortgage holders are always looking for the best mortgage.
Ideally, they want to balance minimal interest with affordable
payments. Advisors that consistently achieve that for their clients
grow faster and sign more deals. Evaluating new incoming mortgages while reviewing all of your
past mortgages to find winning refinancing opportunities can
seem overwhelming</p>
<div className="flex gap-8">
<Link to='footer' spy={true}
              smooth={true}
              duration={500}>
        <button className='text-white bg-[#FF56BB] mt-5  self-center rounded-lg px-4 py-2 hover:bg-[#c7388e]'>Sign Up Today</button></Link>
        <Link to='about' spy={true}
              smooth={true}
              duration={500}>
        <button className='text-[#FF56BB] border-2 border-[#FF56BB] mt-5 font-medium  self-center rounded-lg px-4 py-2 hover:bg-[#FF56BB] hover:text-white'>Learn More</button></Link>
</div>
        </div>
        </div>
    </div>
</section>
{/* You get Everything */}
<section id="faq" className="py-12 px-4       bg-[#FFF4FA]">
   
    <div className="md:flex container md:justify-between mx-auto gap-7 items-center">
        
        <div className="md:w-1/2">
            <h1 className="text-gray-800 font-medium my-4 text-2xl">One price and you get everything
improve sales?</h1>
<p className="">Property Fox offers competitive pricing plans tailored to meet the specific needs of mortgage brokers and financial advisors. Our pricing is designed provide value and affordability for business of all sizes from individuals to large organizations. </p>

<Link to='pricing' spy={true}
              smooth={true}
              duration={500}>
        <button className='text-white bg-[#FF56BB] mt-5  self-center rounded-lg px-4 py-2 hover:bg-[#c7388e]'>Get Pricing</button></Link>
        

        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={hand} alt="Image" />

        </div>
        </div>
</section>
{/* Predict Interest Rate  */}
<section className=" text-center mx-auto container my-12 py-8">
    <h1 className="text-2xl font-bold text-center text-gray-800">Predict Interest Rate Shifts and Benefit Your Clients</h1>
<p className="my-4 md:px-28 text-current  ">Don't limit your client outreach to annual reviews; anticipate interest rate shift may put your clients at risk of opting for discount rate   providers or sticking changes well before their renewals become competitive. Waiting until rates with their bank. Empower your clients  and secure their financial success with Property Fox.</p>
<Link to='footer' spy={true}
              smooth={true}
              duration={500}>
        <button className='text-white bg-[#569C6C] mt-5  self-center rounded-lg px-4 py-2 hover:bg-[#2b7a44]'>Sign Up Today</button></Link>
</section>
        {/* footer  */}
         <footer id="footer"  className="   mx-auto bg-[#1A281A]
 text-white p-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Pages</h3>
            <ul>
              <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="/#" className="text-white hover:text-gray-300">Features</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Legal Notice</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Career</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
            <div className="flex space-x-2">
              <a href="#" className="text-white hover:text-gray-300"><FaFacebook></FaFacebook></a>
              <a href="#" className="text-white hover:text-gray-300"><FaTwitter></FaTwitter></a>
              <a href="#" className="text-white hover:text-gray-300"><FaLinkedin></FaLinkedin></a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-2">Get News from Us</h3>
            <input type="email" placeholder="Email address" className="border text-black p-2 w-full" />
            <button className='text-white bg-[#b83282] rounded-lg mt-2 px-3 py-2 hover:bg-[#8a0e59]'>Subscribe</button>
          </div>
        </div>
      </footer>
     </div>
    );
  };
  
  export default Home;
  
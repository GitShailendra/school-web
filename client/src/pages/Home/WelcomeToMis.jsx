import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { IoMdClose } from 'react-icons/io';
import { Label, Checkbox } from 'flowbite-react';
import file from '../../assets/Files/Terms_and_Conditions.pdf';
import logo from '../../assets/Images/LogoAndOthers/hori-xnjhSTpu.png';
import { useEnrollMutation } from '../../../Redux/authApi';

const WelcomeToMIS = () => {
  const [open, setOpen] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  const initialStudentInfo = {
    name: '',
    dob: '',
    phone: '',
    category: 'Pre-School',
    address: '',
  };

  const [studentInfo, setStudentInfo] = useState(initialStudentInfo);
  const [enroll, { isLoading, isError, error }] = useEnrollMutation();


  const handleSubmit = async(e) => {
    e.preventDefault();

    // Check if terms and conditions are agreed
    if (!termsChecked) {
      toast.error('Please agree to the terms and conditions.');
      return;
    }

    // Check if all  fields are filled except altPhone
    for (const key in studentInfo) {
      if (key !== 'altPhone' && studentInfo[key] === '') {
        toast.warn(`Please fill in the ${key} field.`);
        return;
      }
    }

  await enroll(studentInfo).unwrap();



    toast.success('Form submitted successfully');
    setStudentInfo(initialStudentInfo);
    setTermsChecked(false);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the studentInfo state based on input changes
    setStudentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };
  useEffect(() => {
    if (isError) {
      toast.error(error.data.err);
    }
  }, [isError, error]);

  Modal.setAppElement('#root');

  return (
    <>
      <ToastContainer style={{zIndex:99}}/>
      <div className="p-6 lg:px-20 lg:py-28 space-y-10 md:space-y-0 bg-secondary text-white md:grid md:grid-cols-2 tracking-wide">
        <div>
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
          className="col-span-1 pb-5">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-title">
            Welcome to <span className="font-subtext">MIS</span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mt-[-8px]">
            Empower. Excel. Educate
          </h3>
          </motion.div>
          <p className="text-justify font-sans tracking-wide font-normal mb-3">
            Welcome to Mysore International School, a place where every
            student's journey is crafted with care and purpose. Here, education
            goes beyond textbooks, shaping young minds into confident, curious
            learners. Our vibrant community of educators and students fosters an
            environment of collaboration and growth. As you embark on this
            educational adventure with us, you'll discover not just a school but
            a supportive family, dedicated to unlocking the full potential of
            each individual.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
            onClick={handleToggleModal}
            className="md:w-1/3 rounded-md mt-5 shadow-sm border p-2 font-semibold tracking-widest bg-ctcPrimary text-white"
          >
            Enroll Today
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="col-span-1 flex justify-center md:justify-end items-center"
        >
          <img
            src={logo}
            alt="MIS Logo"
            className="w-[200px] sm:w-[250px] lg:w-1/2 h-auto "
          />
        </motion.div>
      </div>
      <Modal
        isOpen={open}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setOpen(false)}
        className=""
        style={{
          overlay: {
            zIndex: 98,
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
          },
          content: {
            width: '90%', // Adjust the width for small screens
            maxWidth: '600px',
            height: '90vh', // Set height to auto for responsiveness
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection: 'column',
            color: '#580B57',
            overflowY: 'auto', // Enable vertical scrolling
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
            border: 'none',
            outline: 'none',
          },
        }}
      >
          <button
          className="absolute top-5 right-5 cursor-pointer font-semibold text-3xl"
          onClick={() => setOpen(false)}
        >
          <IoMdClose />
        </button>
        <h2 className=" mb-5 md:mt-0 mt-[12rem] text-center font-semibold capitalize text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] ">
           Enrollment form
        </h2>



        <form
          onSubmit={handleSubmit}
          className="md:grid grid-cols-2 gap-6 space-y-5 md:space-y-0 px-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="name">
              Student name*
            </label>
            <input
              className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950 md:text-base"
              onChange={handleChange}
              type="text"
              name="name"
              id='name'
              value={studentInfo.name}
              
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="dob">
              Date of Birth*
            </label>
            <input
              className="rounded-md outline-none border-slate-400 font-serif tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="date"
              name="dob"
              id='dob'

              value={studentInfo.dob}
              
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="phone">
              Phone number*
            </label>
            <input
              className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="text"
              name="phone"
              value={studentInfo.phone}
              id='phone'

              
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="altPhone">
              Alternative Phone number
            </label>
            <input
              className="rounded-md outline-none border-slate-400 font-sans tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              type="text"
              name="altPhone"
              id='altPhone'
              value={studentInfo.altPhone}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2 my-8 md:my-0">
          <label className="text-black font-sans tracking-wide font-semibold" htmlFor="category">
              Category*
            </label>
            <select name="category" id="select" className="rounded-md font-serif tracking-wide uppercase text-fuchsia-950">
              <option value="1">Primary-School</option>
              <option value="2">Middle-School</option>
              <option value="3">High-School</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-black font-sans tracking-wide font-semibold" htmlFor="address">
              Address
            </label>
            <textarea
              className="rounded-md outline-none border-slate-400 h-[60px] font-serif tracking-wide uppercase text-fuchsia-950"
              onChange={handleChange}
              name="address"
              value={studentInfo.address}
              id='address'
            />
          </div>
          <div className="flex items-center gap-2 justify-between col-span-full">
  <div>
    <Checkbox
      id="agree"
      checked={termsChecked}
      onChange={handleCheckboxChange}
    />
  </div>
  <div className="w-full">
    <Label htmlFor="agree" className="flex">
      I agree with the&nbsp;
      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-600 hover:underline dark:text-cyan-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>
          </div>

          <div className="col-span-2 text-center">
            <button
            disabled={isLoading}
              type="submit"
              className="bg-ctcPrimary text-white px-4 py-2 rounded-full font-semibold tracking-wide transition-all ease-in-out duration-800"
            >
              {isLoading?"loading...":"Submit"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default WelcomeToMIS;

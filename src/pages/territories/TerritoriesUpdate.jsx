import React, {  useEffect,  useState } from "react";
import Footer from "../../component/Footer";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from 'sweetalert';
import axios from "axios";
import Navbar from "../../component/Navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";

export default function index() {
    document.title = "Territory";
    const navigation = useNavigate()
    const { id } = useParams()
    const [state, setState] = useState({ country: "USA" })
    const [stateOptions, setStateOptions] = useState([])
    const [licensee, setLicensee] = useState([])
    const [territoryDetails, setTerritoryDetails] = useState({})
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const getStates = () => {
        axios.get(`/global/states`).then((res) => {
            setStateOptions(res?.data)
        })
    }

    const getLicensees = () => {
        axios.get(`/user/licensee`).then((res) => {
            setLicensee(res?.data)
        })
    }
    useEffect(() => {
        getStates()
        getLicensees()

    }, [])

    useEffect(() => {
        axios.get(`/territory/${id}`).then((res) => {
            setTerritoryDetails(res?.data)
        })
    }, [id])

    useEffect(() => {

        if (territoryDetails) {
            const { country,  county, notes } = territoryDetails
            setState({
                ...state,
                country,
                county,
                state:territoryDetails?.state,
                defaultUrl: territoryDetails?.[`default-url`],
                licenseeId: territoryDetails?.[`licensee-id`],
                notes,


            })
        }
    }, [territoryDetails])

    const handleDelete = () => {
        axios.delete(`/territory/delete/${id}`).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: res.data.message,
                    icon: 'success',
                    timer: 2000,
                })
                navigation("/Territories")
            }
            else {
                Swal({
                    text: res?.data?.message,
                    icon: 'error',
                    timer: 2000,
                })

            }

        }).catch((err) => {
            Swal({
                title: err.response?.data?.message,
                icon: 'error',
                timer: 4000,

            })
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`territory/update/${id}`, state).then((res) => {
            if (!res.data.error) {
                Swal({
                    text: "Territory updated successfully.",
                    icon: 'success',
                    timer: 2000,
                })

                navigation("/territories")
            }
            else {
                Swal({
                    text: res?.data?.message,
                    icon: 'error',
                    timer: 2000,
                })
            }

        }).catch((err) => {
            Swal({
                title: err.response?.data?.message,
                icon: 'error',
                timer: 4000,

            })
        })
    }







    return (
        <>
            <Navbar />

            {/* A Smart Solution */}
            <div className="bg-white pl-3 pr-5 lg:pr-9 lg:ml-44">
                <div className="max-w-full mb-2 ">
                    <div className="container mx-auto py-4">
                        <h1
                            className=" text-[#2E5FB7]  lg:text-left font-inter font-semibold   md:text-[27px] text-[23px] md:text-3xl lg:text-4xl leading-10  lg:w-[450px] w-full   mb-5"
                        >
                            Territory (#{id})

                        </h1>



                        <div className="box  ">
                            <Formik initialValues={state} >
                                <Form onSubmit={handleSubmit} >
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="country" className="block mb-2">
                                                Country:
                                            </label>
                                            <Field
                                                type="text"
                                                id="country"
                                                name="country"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                onChange={handleChange}
                                                value={state.country}
                                                disabled={true}
                                            />
                                            <ErrorMessage name="country" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="state" className="block mb-2">
                                                State:
                                            </label>
                                            <Field
                                                as="select"
                                                id="state"
                                                name="state"
                                                value={state.state}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={""} >{"Select State"}</option>

                                                {stateOptions && stateOptions.length !== 0 &&
                                                    stateOptions?.map((option) => (

                                                        <option value={option.name}>{option.name}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="state" component="div" className="text-red-500" />
                                        </div>
                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="county" className="block mb-2">
                                                County:
                                            </label>
                                            <Field
                                                type="text"
                                                id="county"
                                                name="county"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                                value={state.county}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="county" component="div" className="text-red-500" />
                                        </div>  <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="defaultUrl" className="block mb-2">
                                                URL:
                                            </label>
                                            <Field
                                                id="defaultUrl"
                                                name="defaultUrl"
                                                value={state.defaultUrl}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            />

                                            <ErrorMessage name="defaultUrl" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full md:w-1/2 px-2 mb-4">
                                            <label htmlFor="licenseeId" className="block mb-2">
                                                Licensee:
                                            </label>
                                            <Field
                                                as="select"
                                                id="licenseeId"
                                                name="licenseeId"
                                                value={state.licenseeId || "Select Rating"}
                                                onChange={handleChange}
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                required
                                            >
                                                <option value={""} >{"Select Licensee"}</option>

                                                {licensee && licensee.length !== 0 &&
                                                    licensee?.map((option) => (

                                                        <option value={option?.id}>{option?.[`name-first`] + " " + option?.[`name-last`]}</option>
                                                    ))
                                                }

                                            </Field>
                                            <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        </div>

                                        <div className="w-full px-2 mb-4">
                                            <label htmlFor="notes" className="block mb-2">
                                                Notes:
                                            </label>
                                            <Field
                                                as="textarea"
                                                rows="4"
                                                className="w-full border border-gray-300 px-3 py-2 rounded-sm"
                                                name="notes"
                                                id="notes"
                                                value={state.notes}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="notes" component="div" className="text-red-500" />

                                        </div>


                                    </div>

                                    <div className="flex justify-center">

                                        <React.Fragment>
                                            <button
                                                type="submit"
                                                className="bg-[#EC672C] mb-4 mr-2 px-5 py-1 rounded-sm text-white"
                                            >
                                                Update
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    Swal({
                                                        text: 'Are you sure you want to remove this record?',
                                                        icon: 'warning',
                                                        buttons:{
                                                            cancel:"Cancel",
                                                            confirm:"OK"
                                                        },
                                                    }).then((result) => {
                                                        if(result){

                                                            handleDelete()
                                                        }
                                                        else{
                                                            swal.close()
                                                        }
                                                    })
                                                }}
                                                className="bg-[#EC672C] mb-4 ml-2 px-5 py-1 rounded-sm text-white"
                                            >
                                                Delete
                                            </button>
                                        </React.Fragment>

                                    </div>
                                </Form>
                            </Formik>

                        </div>
                    </div>
                </div>
            </div >

            <Footer />

        </>
    );
}

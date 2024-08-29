import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
import GooglePayButton from "@google-pay/button-react";
import { orderValidation } from "../../utils/orderValidation/orderValidation";
import validationsuccsessful from "../../recourses/validationsuccessful.png";
import styles from "./adoptAPetModal.module.css";

const PaySuccessfulMessage = ({ isSuccessfulPayment, closeModal }) => {
  if (!isSuccessfulPayment) return null;

  return (
    <div onClick={closeModal} className={styles["adopt-apet-modal__overlay"]}>
      <div className={styles["adopt-apet-modal__content"]}>
        <div className={styles["adopt-apet-modal__close"]}>
          <button onClick={closeModal}>
            <i className="fa-solid fa-xmark" style={{ color: "#000000" }}></i>
          </button>
        </div>
        <div className={styles["adopt-apet-modal__message"]}>
          <img className={styles["adopt-apet-modal__succsess"]} src={validationsuccsessful} alt="validation-icon-of-success" />
          <h2 className={styles["adopt-apet-modal__title"]}>Payment success!</h2>
          <p className={styles["adopt-apet-modal__message-successful"]}>
            Thank you for adoption! We will contact you in 29 minutes to
            complete the order. Your receipt has been sent to your email.
          </p>
        </div>
      </div>
    </div>
  );
};

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    birth: '',
    nickname: '',
    agreement: false,
}

const AdoptAPetModal = ({ closeModal }) => {
  const {values, handleBlur, handleChange, handleSubmit, errors} = useFormik({

      initialValues: initialValues,
      validationSchema: orderValidation,
        onSubmit: (values) => {
          const saveDataOrder = localStorage.getItem("isOrderDataSubmited");

          if (!saveDataOrder) {
            localStorage.setItem("isOrderDataSubmited", JSON.stringify(values));
          }
            console.log(values);
        }
    })

    const [isValidationSuccess, setIsValidationSuccess] = useState(false);

    const toogleValidationSuccess = () => {
       setIsValidationSuccess(!isValidationSuccess);
    }

    const [isSuccessfulPayment, setIsSuccessfulPayment] = useState(false);
    
    const [isModalOpen, setIsModalOpen] = useState(() => {
        const savedState = localStorage.getItem("isModalOpen");
        return savedState ? JSON.parse(savedState) : true;
    });


    useEffect(() => {
         localStorage.setItem("isModalOpen", JSON.stringify(isModalOpen));
    }, [isModalOpen]);

    const handlePaymentSuccess = () => {
        setIsSuccessfulPayment(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        closeModal();
    };

    if (!isModalOpen) return null;

    return (
      <div className={styles["adopt-apet-modal__overlay"]}>
          <div className={styles["adopt-apet-modal__content"]}>
            <div className={styles["adopt-apet-modal__close"]}>
              <button onClick={handleCloseModal}>
                  <i className="fa-solid fa-xmark" style={{ color: "#000000" }}></i>
              </button>
          </div>

          <div className={styles["adopt-apet-modal__message"]}>
              <h2 className={styles["adopt-apet-modal__logo"]}>sAp</h2>
                <p>Lets save pets safely together!</p>
                  <p>We appreciate your choice.</p>
            </div>

          <h1 className={styles["adopt-apet-modal__header"]}>
            Confirm your order:
          </h1>

          <Formik
              initialValues={initialValues}
              validationSchema={orderValidation}
          >
          <Form 
              className={styles["adopt-apet-modal__form"]}
              action="#"
              onSubmit={handleSubmit}
          >
            <div className={styles["adopt-apet-modal__form-person"]}>
              <ul>
                <li className={styles["adopt-apet-modal__form-item"]}>
                  <label htmlFor="firstname">First name:</label>

                  <Field
                    type="text"
                    name="firstname"
                    className="typing-area"
                    placeholder="Your real first name in passport"
                    value={values.firstname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.firstname && <small className={styles["error-validation"]}>{errors.firstname}</small>}
                </li>

                <li className={styles["adopt-apet-modal__form-item"]}>
                  <label htmlFor="lastname">Last name:</label>

                  <Field
                    type="text"
                    name="lastname"
                    className="typing-area"
                    placeholder="Your real last name in passport"
                    value={values.lastname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.lastname && <small className={styles["error-validation"]}>{errors.lastname}</small>}
                </li>
                
                <li className={styles["adopt-apet-modal__form-item"]}>
                  <label htmlFor="email">Email:</label>

                  <Field 
                    type="email"
                    name="email"
                    className="typing-area"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                   />
                  {errors.email && <small className={styles["error-validation"]}>{errors.email}</small>}
                </li>
                
                <li className={styles["adopt-apet-modal__form-item"]}>
                  <label htmlFor="phone">Phone number:</label>

                  <Field 
                    type="number" 
                    name="phone"
                    className="typing-area"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                    {errors.phone && <small className={styles["error-validation"]}>{errors.phone}</small>}
                </li>
                
                <li className={styles["adopt-apet-modal__form-item"]}>
                  <label htmlFor="address">Address:</label>

                  <Field
                    type="text"
                    name="address"
                    placeholder="Name street and number, city and state"
                    className="typing-area"
                    value={values.address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.address && <small className={styles["error-validation"]}>{errors.address}</small>}
                </li>
                
                <li className={styles["adopt-apet-modal__form-item"]}>
                  <label htmlFor="birth">Birthdate:</label>

                  <Field
                    type="date"
                    name="birth"
                    className="typing-area"
                    value={values.birth}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.birth && <small className={styles["error-validation"]}>{errors.birth}</small>}
                </li>
                
                <li className={styles["adopt-apet-modal__form-item"]}>
                  <label htmlFor="cutiename">Real cutie name:</label>

                  <Field 
                    type="text" 
                    name="nickname"
                    placeholder="ex. Luna"
                    className="typing-area"
                    value={values.text}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                    {errors.nickname && <small className={styles["error-validation"]}>{errors.nickname}</small>}
                </li>
                
              </ul>
            </div>

          <div className={styles["adopt-apet-modal__info-order"]}>
            <p>
              <input 
                type="checkbox"
                name="agreement"
                className="typing-area"
                value={values.agreement}
                onBlur={handleBlur}
                onChange={handleChange} 
                  /> I agree with{" "} 
                <Link
                  className={styles["adopt-apet-modal__terms-policy"]}
                  to="/cuties/adoption-care-terms-and-conditions"
                >
                  Terms and Policy
                </Link>{" "}
                about adoption care 
              </p>
              {errors.agreement && <small className={styles["error-validation"]}>{errors.agreement}</small>}
              
              <p>Total amount: 838.00 INR</p>

              <button className={styles["pay-button"]} onClick={toogleValidationSuccess} type="submit">Pay</button>
            </div>
          </Form>
          </Formik>

          {errors && !isValidationSuccess ? (
            !GooglePayButton
          ) : (
            <div className={styles["adopt-apet-modal__pay"]}>
                <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                              type: "CARD",
                              parameters: {
                                allowedAuthMethods: ["PAN_ONLY"],
                                allowedCardNetworks: ["MASTERCARD", "VISA"],
                              },
                              tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                  gateway: "example",
                                  gatewayMerchantId: "exampleGatewayMerchantId",
                                },
                              },
                            },
                          ],
                          merchantInfo: {
                            merchantId: "4441114431076932",
                            merchantName: "David Klymenko",
                          },
                          transactionInfo: {
                            totalPriceStatus: "FINAL",
                            totalPriceLabel: "Total",
                            totalPrice: "838.00",
                            currencyCode: "INR",
                            countryCode: "IN",
                          },
                        }}
                        onLoadPaymentData={handlePaymentSuccess}
                      />
                      <PaySuccessfulMessage
                        isSuccessfulPayment={isSuccessfulPayment}
                        closeModal={handleCloseModal}
                      />
                </div>
              )}
        </div>
      </div>
    );
};

export default AdoptAPetModal;
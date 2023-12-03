import { FormSchema } from "../validations/FormValidation";
import styles from "./SignIn.module.css";
import {Formik , Form , Field , ErrorMessage} from "formik"
const SignIn = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formImage}></div>
      <div className={styles.mainForm}>
        <div className={styles.mainFormSubset}>
          <Formik 
          initialValues={{
            firstName : "",
            secondName : "",
            phone : "",
            email : "",
            password : "",
            reTypePassword:""

          }}
          validationSchema={FormSchema}
          onSubmit={(values)=>{
            console.log(values)
          }}
          >
            <Form>
          <table className={styles.formTable}>
            <tr>
              <label className={styles.inputLabel}>FirstName:</label>
              <Field
                type="text"
                name="firstName"
                className={`${styles.formInputs} , ${styles.formFirstName} `}
                placeholder="first name"
              />
              <ErrorMessage name="firstName" render={(msg) =>(<p style={{display:"inline" , color:"red"}}>{msg}</p>)}/>
            </tr>

            <tr>
              <label className={styles.inputLabel}>SecondName:</label>
              <Field
                type="text"
                name="secondName"
                className={`${styles.formInputs} , ${styles.formSecondName} `}
                placeholder="second name"
              />
                            <ErrorMessage name="secondName" render={(msg) =>(<p style={{display:"inline" , color:"red"}}>{msg}</p>)}/>
            </tr>
            <tr>
              <label className={styles.inputLabel}>Phone:</label>
              <Field
                type="text"
                name="phone"
                className={`${styles.formInputs} , ${styles.formPhone} `}
                placeholder="phone number"
              />
              <ErrorMessage name="phone" render={(msg) =>(<p style={{display:"inline" , color:"red"}}>{msg}</p>)}/>
            </tr>
            <tr>
              <label className={styles.inputLabel}>Email:</label>
              <Field
                type="text"
                name="email"
                className={`${styles.formInputs} , ${styles.formEmail} `}
                placeholder="email@email.com"
              />
                <ErrorMessage name="email" render={(msg) =>(<p style={{display:"inline" , color:"red"}}>{msg}</p>)}/>
            </tr>
            <tr>
              <label className={styles.inputLabel}>Password:</label>
              <Field
                type="text"
                name="password"
                className={`${styles.formInputs} , ${styles.formPassword} `}
                placeholder="password"
              />
                <ErrorMessage name="password" render={(msg) =>(<p style={{display:"inline" , color:"red"}}>{msg}</p>)}/>
            </tr>
            <tr>
              <label className={styles.inputLabel}>Re-Type-Password:</label>
              <Field
                type="text"
                name="reTypepassword"
                className={`${styles.formInputs} , ${styles.formReTypePassword} `}
                placeholder="re-type-password"
              />
                <ErrorMessage name="reTypepassword" render={(msg) =>(<p style={{display:"inline" , color:"red"}}>{msg}</p>)}/>
            </tr>
            <tr>
              <button className={styles.cancelBtn}>Cancel</button>
              <button className={styles.submitBtn}>Submit</button>
            </tr>
          </table>
          </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

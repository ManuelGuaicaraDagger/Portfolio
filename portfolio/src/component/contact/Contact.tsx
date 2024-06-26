import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import gmail from "../../assets/images/gmail.png"

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (!formRef.current) return;
  
      const serviceId = "service_epmoayf";
      const templateId = "template_t2fgziq";
      const apiKey = "qhld2l2tND90gek3r";
  
      emailjs
        .sendForm(serviceId, templateId, formRef.current, apiKey)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Mensaje enviado!",
            showConfirmButton: false,
            timer: 1500,
          });
          formRef.current?.reset();
        })
        .catch((error) =>
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          }),
        );
    };

    return (
        <section className="flex flex-col justify-center items-center mt-[60px]" id="contacto">
            <h2 className="text-[52px] font-bold">Contacto</h2>
            <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center mt-[30px]"
          >
            <input
              className="text-black h-[40px] w-[500px] bg-sih-grey rounded-[15px] px-2 outline-0 m-[10px]"
              type="text"
              name="name"
              placeholder="Nombre"
              required
            />
            <input
              className="text-black h-[40px] w-[500px] bg-sih-grey rounded-[15px] px-2 outline-0 m-[10px]"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <textarea
              name="message"
              id=""
              className="text-black w-[500px] bg-sih-grey rounded-[15px] px-2 outline-0 m-[10px] h-[150px] p-[5px] resize-none"
              placeholder="Escribe aquí tu mensaje"
            ></textarea>
            <button
              type="submit"
              className="w-[175px] h-[35px] rounded-[10px] mt-[10px]  flex justify-center items-center bg-pt-blue text-black"
            >
              Enviar
            </button>
          </form>
          <div className="flex mt-[30px] items-center">
            <img src={gmail} alt="Gmail" className="h-[50px] w-auto mr-[10px]"/>
            <span className="text-2xl">manuelguaicara17@gmail.com</span>
          </div>
        </section>
    )
}

export default Contact
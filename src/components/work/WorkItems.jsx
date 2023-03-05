import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="work__card" key={item.id}>
        <figure className="image-item">
          <img
            src={item.image}
            alt=""
            onClick={toggleModal}
            className="work__img"
          />
        </figure>
        <h3 className="work__title" onClick={toggleModal}>
          {item.title}
        </h3>
        <span className="work__button" onClick={toggleModal}>
          View Details
          <i className="uil uil-arrow-right work__button-icon"></i>
        </span>
      </div>
      {/** POPUP MODAL */}
      {modal && (
        <div className="project__modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="project__modal-content">
            <div className="project__modal-img">
              <img src={item.image} alt="" />
            </div>
            <div className="project__modal-description">
              <span className="subtitle"> Featured - Design</span>
              <h1 className="project__modal-title">{item.title}</h1>
              <div className="project__description">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam suscipit voluptatem excepturi error neque, a quisquam
                  culpa magni?
                </p>
                <p>Voluptates laborum consequatur minima eos non quia fugit</p>
              </div>

              <div className="modal__buttons">
                <button className="btn-modal">
                  LIKE <i className="bx bxs-heart project__modal-icon"></i>
                </button>

                <button className="btn-modal">
                  Demo
                  <i className="bx bx-chevron-right project__modal-icon"></i>
                </button>
              </div>

              <button className="project__modal-close" onClick={toggleModal}>
                <i className="uil uil-times project__modal-close"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkItems;

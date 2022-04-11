import React from "react";
import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { v4 as uuid } from "uuid";

const LocalQuote = () => {
  const [quote, setQuote] = React.useState("");
  const [quoteAut, setQuoteAut] = React.useState("");
  let data = [
    {
      id: 1,
      quoteTitie: "Success is how high you bounce when you hit bottom.",
      autor: "Gen. George Patton",
    },
    {
      id: 2,
      quoteTitie:
        "The only place success comes before work is in the dictionary.",
      autor: "Vince Lombardi",
    },
  ];
  //   console.log(viewQuote);
  const [viewQuote, setViewQuote] = React.useState([]);

  console.log(quote, quoteAut);

  const pushQuote = () => {
    const uid = uuid();
    const data = { id: uid, quoteTitie: quote, autor: quoteAut };
    setViewQuote([...viewQuote, data]);
    setQuote("");
    setQuoteAut("");
  };

  React.useEffect(() => {
    const ref = JSON.parse(localStorage.getItem("view"));
    setViewQuote(ref);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("view", JSON.stringify(viewQuote));
  }, [viewQuote]);

  //   React.useEffect(() => {
  //     setViewQuote(data);
  //   }, []);

  return (
    <Container>
      <Uploade>
        <span>
          <div>Put in your best QUOTE</div>
          <input
            placeholder="Type in a Quote"
            value={quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
          />
        </span>
        <span>
          <div>Who originated this Quote???</div>
          <input
            value={quoteAut}
            onChange={(e) => {
              setQuoteAut(e.target.value);
            }}
            placeholder="Quote Autor"
          />
        </span>
        <button
          onClick={() => {
            pushQuote();
            console.log(viewQuote);
          }}
        >
          Post a Quote
        </button>
      </Uploade>
      <ViewUpload>
        <h2>Quotes For Inspiration</h2>
        {viewQuote?.map((props) => (
          <UpCard key={props.id}>
            <Hold>
              <Title>
                {" "}
                <FaQuoteLeft /> {props.quoteTitie} <FaQuoteRight />
              </Title>

              <SubT> {props.autor} </SubT>
            </Hold>
          </UpCard>
        ))}
      </ViewUpload>
    </Container>
  );
};

export default LocalQuote;

// const Sho = styled.h2`
//   display: none;
//   font-family: "Fredoka One", cursive;
//   margin: 50px;
//   text-align: center;
//   @media (max-width: 900px) {
//     display: block;
//   }
// `;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Uploade = styled.div`
  height: 100%;
  width: 40%;
  min-height: 100vh;
  background-color: darkcyan;
  font-family: poppins;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (max-width: 600px) {
    width: 100%;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      font-size: small;
      font-weight: 600;
    }

    input {
      height: 30px;
      width: 300px;
      font-family: poppins;
      border: none;
      outline: none;
      margin-bottom: 25px;
      border-radius: 3px;
    }
  }

  button {
    padding: 12px 38px;
    background-color: #4285f4;
    border: none;
    outline: none;
    font-family: poppins;
    border-radius: 5px;
    font-weight: 600;
    color: #fff;
    border: 1px solid #fff;
  }
`;
const ViewUpload = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 60%;
  background-color: #eee;
  font-family: "Fredoka One", cursive;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const UpCard = styled.div`
  width: 85%;
  border-radius: 6px;
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  transition: all 300ms;

  :hover {
    transform: scale(1.04);
    cursor: pointer;
    color: #fff;
    background: #00b4db; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #0083b0,
      #00b4db
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #0083b0,
      #00b4db
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
`;
const Title = styled.div``;
const SubT = styled.div`
  font-family: "Freehand", cursive;
  font-size: 17px;
`;

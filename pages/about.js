import styled from "styled-components";
import imgAbout from "../public/images/gjAbout.jpg";
import Image from "next/image";

function About() {
  const Container = styled.div`
    background-color: white;
    width: 600px;
    margin: auto;
    margintop: 20px;
    padding-top: 80px;
    border-radius: 30px;
    padding-bottom: 10px;
    @media (max-width: 600px) {
      width: 340px;
    }
  `;

  const InnerContainer = styled.div`
    background-color: #b8ad8d;
    width: 90%;
    margin: auto;
    border-radius: 30px;
    padding: 10px;
  `;

  const Img = styled(Image)`
    position: relative;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 150px;
    border-radius: 50%;
    border: solid 5px #b8ad8d;
  `;
  return (
    <div>
      <Container>
        <InnerContainer>
          <Img src={imgAbout} alt="" />
          <h3
            style={{ textAlign: "center", color: "white", marginTop: "-50px" }}
          >
            Hello
          </h3>
          <p
            style={{ textAlign: "center", color: "white", marginBottom: "0px" }}
          >
            My Name is Gaurav Joshi
          </p>
          <p
            style={{ textAlign: "center", color: "white", marginBottom: "0px" }}
          >
            i have done my schooling in 2012 and Electrical engineering in 2016
            after the engineering i began my career in textile industry as
            trainee engineer then i moved in power tranmision indusrty as
            project engineer, i have worked 3 years in this field
          </p>
          <h4
            style={{ textAlign: "center", color: "white", marginTop: "20px" }}
          >
            {" "}
            Change in Career
          </h4>
          <p
            style={{
              textAlign: "center",
              color: "white",
              paddingBottom: "30px",
            }}
          >
            In march 2020 we have faced Corona pendemic and we have to stay
            inside our home for more than 3 months, in this period of time i
            dont have to do anything so i have start learning coding and buy
            some courses on udemy. when i found my self in love with programming
            i decided to choose web developer as career, now its been three
            years i am working as professional developer. I have done so many
            projects over the years and satisfied so many clients.
          </p>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default About;

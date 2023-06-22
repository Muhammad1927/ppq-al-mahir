import logo from "./../asset/bsi.png";
import "./footer.css";

const Footer1 = () => {
  return (
    <div>
      {" "}
      <div id="footer">
        <div id="f1">
          <div id="d1">
            <h4>Rekening :</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                margin: "20px 0px",
              }}
            >
              <img id="gf" src={logo} alt="" />
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "20px" }}>
                  6565698893
                </h3>
                <p style={{ fontSize: "10px" }}>
                  Yayasan Almahir Attarbawiyyah
                </p>
              </div>
            </div>
          </div>
          <div id="d2">
            <h4>Konfirmasi donasi :</h4>
            <p>+62 812-3210-4431</p>
          </div>
          <div id="d3">
            <h4>Alamat :</h4>
            <p>
              Jl. Adi Sumarmo Rt 01/07 <br></br> Gawanan, Colomadu, <br></br>{" "}
              Karanganyar, Jawa Tengah <br></br> 57175
            </p>
          </div>
          <div id="d4">
            <h4>Contact :</h4>
            <p>0813-2892-1421 (Rusyd)</p>
            <p>0821-3327-7548 (Dedit)</p>
          </div>
        </div>
        <hr />
        <div id="f2">
          <div>
            <p>Copyright &copy; Muhammad Mufid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;

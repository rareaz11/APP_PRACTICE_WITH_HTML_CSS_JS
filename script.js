const content = document.getElementById("content");

const pages = {
  home: `
        <section class="section">
          <h2>Dobrodošao 👋</h2>
          <p>
            Ova aplikacija služi za vježbanje GitHuba, Netlify deploya
            i rada s čistim HTML, CSS i JavaScriptom.
          </p>
        </section>

        <section class="section about">
          <h3>About me</h3>
          <p>
            Junior Full Stack Developer (1 godina iskustva) i ovo je moj playground
            za testiranje ideja, API-ja i modernog dizajna bez frameworka.
          </p>
          <p>
            Fokus: čisti kod, razumijevanje compiler i dobar Git workflow i CND.
          </p>
        </section>
      `,
  food: `
        <h2>🍕 Hrana API</h2>
        <p>
          Ovdje ćeš dohvaćati podatke o hrani (npr. recepte, kalorije).
        </p>
        <div class="placeholder">
          fetch() → Food API → render u DOM
        </div>
      `,
  planes: `
        <h2>✈️ Avioni API</h2>
        <p>
          Prikaz letova, visine, brzine ili random aviona.
        </p>
        <div class="placeholder">
          Idealno za OpenSky ili sličan API
        </div>
      `,
};

function showPage(page) {
  content.innerHTML = pages[page];
}

// default page
showPage("home");

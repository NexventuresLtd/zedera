import Reveal from "./Reveal";

interface PageIntroProps {
  chip: string;
  title: string;
  description: string;
}

const PageIntro = ({ chip, title, description }: PageIntroProps) => {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #f8fbff 0%, #eef5fb 58%, #ffffff 100%)",
      }}
    >
      <div className="container section-padding">
        <Reveal>
          <div style={{ maxWidth: "780px" }}>
            <span className="accent-chip">{chip}</span>

            <h1
              style={{
                marginTop: "1rem",
                fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
                lineHeight: 1.02,
                fontWeight: 800,
                color: "var(--color-primary-dark)",
                letterSpacing: "-0.04em",
              }}
            >
              {title}
            </h1>

            <p
              style={{
                marginTop: "1.3rem",
                maxWidth: "680px",
                color: "var(--color-text-light)",
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PageIntro;
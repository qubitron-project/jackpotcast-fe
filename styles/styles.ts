export const styles = {
  pageContainer: {
    padding: "20px 24px",
    "@media (max-width: 900px)": {
      padding: "20px 10px",
    },
  },
  headTxt: { fontSize: 26, mb: 1 },
  moviesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(325px, 1fr) )",
    justifyItems: "center",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
    },
  },
  loadBtn: { width: "100%" },
  emptyList: {
    display: "grid",
    justifyItems: "center",
    textAlign: "center",
    gap: "30px",
  },
};

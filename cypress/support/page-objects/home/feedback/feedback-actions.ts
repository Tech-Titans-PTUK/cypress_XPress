class FeedbackActions {
  elements = {};

  openHomePage() {
    cy.visit("/home");
  }
}

export default FeedbackActions;

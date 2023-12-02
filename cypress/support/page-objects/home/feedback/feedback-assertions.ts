class FeedbackAssertions {
  elements = {
    whatOurClientsSaySection: () => cy.get("[data-cy=what-our-clients-say]"),
  };

  verifyWhatOurClientsSaySectionIsVisible() {
    this.elements.whatOurClientsSaySection().should("be.visible").as("What our clients say section");
  }
}

export default FeedbackAssertions;

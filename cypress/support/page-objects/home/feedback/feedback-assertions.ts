class FeedbackAssertions {
  elements = {
    whatOurClientsSaySection: () => cy.get("[data-cy=what-our-clients-say]"),
  };

  verifyWhatOurClientsSaySectionIsVisible() {
    this.elements.whatOurClientsSaySection().scrollIntoView().should("be.visible").as("What our clients say section");
  }
}

export default FeedbackAssertions;

import FeedbackActions from "../../support/page-objects/home/feedback/feedback-actions";
import FeedbackAssertions from "../../support/page-objects/home/feedback/feedback-assertions";

let feedbackActions: FeedbackActions = new FeedbackActions();
let feedbackAssertions: FeedbackAssertions = new FeedbackAssertions();

describe("Home: Verify Feedback functionality", () => {
  beforeEach(() => {
    feedbackActions.openHomePage();
  });

  it("TC-01: Should display 'What our clients say' section", () => {
    feedbackAssertions.verifyWhatOurClientsSaySectionIsVisible();
  });
});

import {
  AFFORDABILITY_RESULT,
  LOAN_COMPARISON_RESULT,
  PRE_QUAL_RESULT,
  REFINANCE_RESULT,
} from './content';
import { PurchaseTimeline, SearchStage } from './enums';
import type { OnboardingResult } from './types';

export function getOnboardingResult(
  searchStage: SearchStage,
  purchaseTimeline: PurchaseTimeline
): OnboardingResult | null {
  switch (true) {
    case purchaseTimeline === PurchaseTimeline.SEVEN_PLUS:
      return AFFORDABILITY_RESULT;

    case purchaseTimeline === PurchaseTimeline.FOUR_TO_SIX:
    case purchaseTimeline === PurchaseTimeline.NOT_SURE:
      return PRE_QUAL_RESULT;

    case searchStage === SearchStage.SHORTLISTED:
    case purchaseTimeline === PurchaseTimeline.ZERO_TO_THREE:
      return LOAN_COMPARISON_RESULT;

    case searchStage === SearchStage.SELL_THEN_BUY:
      return REFINANCE_RESULT;

    default:
      return null;
  }
}

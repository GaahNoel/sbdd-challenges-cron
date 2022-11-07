import { renewChallenges } from "../helpers/renew-challenges.js"

async function renewWeeklyChallenges() {
  await renewChallenges('weekly')
}

renewWeeklyChallenges()
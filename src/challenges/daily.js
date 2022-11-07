import { renewChallenges } from "../helpers/renew-challenges.js"

async function renewDailyChallenges() {
  await renewChallenges('daily')
}

renewDailyChallenges()
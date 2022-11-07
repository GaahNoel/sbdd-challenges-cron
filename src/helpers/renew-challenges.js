import axios from "axios"
import { env } from "../config/env.js"
import { getAccountIds } from "./get-account-ids.js"

export async function renewChallenges(periodicity) {
  const accountIds = await getAccountIds()
  await Promise.all(accountIds.map(async(accountId) => {
    await axios.get(`${env.SBDD_API_URL}/api/challenge/renew/${accountId}`, {
      params: {
        periodicity,
      }
    })
  }))
}
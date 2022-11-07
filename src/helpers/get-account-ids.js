import { env } from "../config/env.js";

export async function getAccountIds() {
  try {
    const response = await fetch(`${env.SBDD_API_URL}/api/account/all`)
    const data = await response.json()
    return data.accountIds;
  } catch(error) {
    console.error(error)
    return []
  }
}
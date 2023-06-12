import { NextResponse , NextRequest} from 'next/server';

import {openAI} from './openai.js';

  export async function POST(request) {

    const requestData = await request.json();
    const {prompt} = requestData;
    const verified_status = await openAI(prompt);

    return NextResponse.json({ result: verified_status});
  }
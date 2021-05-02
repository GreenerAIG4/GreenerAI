# BERT

## What is BERT?
BERT is an open-sourced “neural network-based technique for natural language processing (NLP) pre-training called Bidirectional Encoder Representations from **Transformers**” introduced by Google in 2018.

You don’t have to calculate/compute vectors every time. The vectors are pre-calculated for each word/phrase and saves in a database for retrieval when one needs
- BERT was created using Wikipedia as the training database.
- So, when you want to fine-tune the BERT model with your domain type, it is easier and faster

BERT can see the WHOLE sentence on either side of a word contextual language modeling and all of the words almost at once. This means that BERT is Bi-directional ML system.

BERT uses transformers’ attention, part of this actually focuses on the pronouns and all the words’ meanings that go together to try and tie back who’s being spoken to or what is being spoken about in any given context.

Masked language modeling stops the target word from seeing itself. The mask is needed because it prevents the word that’s under focus from actually seeing itself.

When the mask is in place, BERT just guesses at what the missing word is. It’s part of the fine-tuning process as well.

## Why was BERT made?
Google is using BERT to better understand the user searches as of 2019.
The Google BERT update means searchers can get better results from longer conversational-style queries. Now there’s less necessity for resorting to “keyword-ese” types of queries – typing strings you think the search engine will understand, even if it’s not how one would normally ask a question. 


## Strengths
- Faster and easier
- Parallel understanding of the words and the context of the sentence- meaning it does understand the sentence from both sides. 
- Good for Sentiment analysis
- BERT can better understand long term queries and as a result surface more appropriate results during search engine manipulation.
## Weaknesses
- BERT is a very heavy model - it is very computer intensive at inference time, meaning that if you want to use it in the production of scale, it can become costly. 
- It also makes it compute-intensive and hard to bring into production.
- For search engine manipulation: BERT is not a ranking signal. Therefore, you cannot optimize pages for a signal that doesn’t exist.
- It doesn’t judge content per se. It just better understands what’s out there.
- Glove model + fastrack is good. Combining glove models with BERT is not a good idea.


## What Types of Natural Language Tasks Does BERT Help With?
BERT will help with things like:
- Named entity determination.
- Textual entailment next sentence prediction.
- Coreference resolution.
- Question answering.
- Word sense disambiguation.
- Automatic summarization.
- Polysemy resolution.

## References:
[Link 1] (https://blog.marketmuse.com/google-bert-update/)
[Link 2] (https://deepai.org/machine-learning-glossary-and-terms/vector)
[Link 3] (https://nlp.stanford.edu/projects/glove/)
[Link 4] (https://www.searchenginejournal.com/bert-explained-what-you-need-to-know-about-googles-new-algorithm/337247/#close)

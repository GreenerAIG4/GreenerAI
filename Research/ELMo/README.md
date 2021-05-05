# ELMo

## What is ELMo?
In 2018, ELMo is developed by AllenNLP and it is presented in the name of the paper Deep contextualized word presentations. ELMo stands for Embeddings from Language Model. Unlike Word2Vec and GloVE, ELMo has the characteristics of word embeddings according to the surrounding context. 

For example:
1. The plane took off at exactly nine o’clock.
2. The plane surface is a must for any cricket pitch.
3. Plane geometry is fun to study.

If Word2Vec and GloVE check these sentences above, the **plane** will be embedded into the same vector. However, ELMo contextually identifies and embeds words, so **plane** will have three different vectors. Thus, ELMo results in better natural language processing performance.
In addition, ELMo uses a pre-trained language model to do word embeddings, so we called ELMo is BiLM (deep bidirectional language model). It means ELMo can embed through scanning a sentence or sentences by utilizing both LM in both directions

Need to provide these processes for training and embedding ELMo (with Python):
- a vocabulary file
- a set of training files
- a set of held out files

## What is ELMo used for?
 
ELMo is not only used for the task of text classification. We can also use it for vectorizing text data.
 
Below are a few more NLP tasks where we can utilize ELMo:
- Machine Translation
- Language Modeling
- Text Summarization
- Named Entity Recognition
- Question-Answering Systems
 
Here is one example utilizing ELMo for spam classification.

https://towardsdatascience.com/how-to-use-elmo-word-vectors-for-spam-classification-1891c0da8f1d

## ELMo Strengths and Weaknesses
##### Strengths
- ELMo’s word embedding has a more natural word context. (one word with different meanings)
- ELMo uses bi-directional LSTM, it can be understood not just for the following words, but for the previous words.
- ELMo can categorize whether they have negative or positive sensibilities through given sentences. 
##### Weaknesses
- All LSTM models suffer from the following issues:
- Sequential computation means parallelization is impossible
- No explicit modeling of long/short range dependencies
- When sentences are long/context is far away, LSTM models struggle

## References
[Link 1] (https://towardsdatascience.com/elmo-why-its-one-of-the-biggest-advancements-in-nlp-7911161d44be) \n
[Link 2] (https://medium.com/saarthi-ai/elmo-for-contextual-word-embedding-for-text-classification-24c9693b0045)
[Link 3] (https://www.analyticsvidhya.com/blog/2019/03/learn-to-use-elmo-to-extract-features-from-text/)
[Link 4] (https://web.stanford.edu/class/cs224n/slides/cs224n-2019-lecture13-contextual-representations.pdf)
[Link 5] (https://jalammar.github.io/illustrated-bert/)

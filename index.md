---
layout: homepage
---

# About Me

I'm an incoming Ph.D. student in Computer Science at the University of Virginia, advised by [Prof. Ferdinando Fioretto](https://nandofioretto.github.io/) as part of the **Responsible AI for Science and Engineering (RAISE)** group. I am honored to be awarded the UVA CS Scholar fellowship to support my PhD studies. I earned my BSc in Mathematics from Beloit College.

My research develops **safe, verifiable, and robust generative models by design** - architectures and algorithms that embed geometric, physical, and behavioral constraints directly into the generative process. This includes diffusion models, flow matching, autoregressive LLMs, and neural samplers where safety properties (invariance, monotonicity, physical laws, fairness constraints) are guaranteed from the ground up through latent space design, decoding mechanisms, or optimization. The goal is to make generative AI not just expressive, but inherently aligned and trustworthy: a system that can be deployed in high-stakes scientific, engineering, and societal contexts with provable safety assurances and minimal unpredictability.

I'm broadly interested in constrained generative modeling, robustness and fairness as prerequisites for safety, and AI alignment & societal risk mitigation. I’m always happy to connect with others working on safe AI, verifiable generative models, or the trustworthy deployment of machine learning systems.

# Research

Modern generative AI - from diffusion models to large language models - produces remarkably realistic outputs, but remains notoriously difficult to control, verify, or align with hard safety requirements. Unconstrained models can violate physical laws, exhibit harmful biases, engage in reward hacking, or generalize goals in unintended and dangerous ways. As these systems are deployed in increasingly autonomous roles, the lack of built-in safety guarantees poses a systemic risk.

My research addresses this gap by treating safety not as an afterthought, but as a first-class design principle. I build generative models whose safety properties - robustness, fairness, alignment, and constraint satisfaction - are provably guaranteed *by construction*, not through brittle post-hoc filtering or heuristic guardrails.

## Core Research Directions

### 1. Safe-by-Design Generative AI

I develop methods to enforce constraints (e.g., invariance, monotonicity, physical laws, logical consistency) directly during the training or inference of diffusion models, flow matching, and LLMs. This includes:

- Designing latent spaces and decoding mechanisms that provably satisfy safety constraints
- Efficient training and post‑training techniques (including RL‑based fine‑tuning) that reduce unpredictability and computational overhead while preserving expressivity
- Integrating optimization layers and constrained Bayesian inference into generative sampling dynamics

The outcome is a family of generative models that are **verifiable and aligned from the ground up**, eliminating the need for expensive sampling‑time filtering or unreliable prompting strategies.

### 2. Robustness & Fairness as Safety Prerequisites

A model that is not robust or fair cannot be truly safe. I treat fairness, robustness to distribution shift, and interpretability as essential pillars of safe AI. My work integrates explicit constraints into model design and post‑training to:

- Improve reliability under adversarial or naturally occurring distribution shifts
- Mitigate harmful biases and ensure equitable treatment across groups
- Make model outputs transparent, auditable, and certifiable for high‑stakes applications (scientific simulations, engineering control, automated decision systems)

These constraints serve as structural guarantees that directly support safety certification and regulatory compliance.

### 3. AI Safety & Societal Risk Mitigation

Beyond technical constraints, I investigate how structural and fairness‑aware design prevents high‑level harmful behaviors such as reward hacking, goal misgeneralization, and unsafe outputs. This direction includes:

- Analyzing secure deployment strategies to minimize systemic risks, from adversarial vulnerabilities to unintended societal impacts
- Developing alignment techniques that keep generative AI beneficial and controllable as models scale in capability and autonomy
- Bridging formal verification, fairness auditing, and risk assessment to provide holistic safety guarantees

The ultimate aim is to ensure that generative AI systems remain aligned with human values and operational requirements, even when deployed in novel or adversarially chosen environments.

## Why This Matters for AI Safety

AI safety has moved from a theoretical concern to an urgent engineering challenge. Generative models are already being trusted with scientific discovery, automated decision support, and real‑world control tasks - yet we lack systematic methods to certify that they will not produce unsafe outputs, amplify biases, or pursue misaligned goals. My research provides the theoretical and algorithmic foundations to build **safe‑by‑design generative AI**: models whose safety properties are guaranteed, not hoped for. This transforms generative AI from a black‑box approximator into a verifiable, control‑aware, and trustworthy tool - essential for high‑stakes deployment in science, engineering, and society.

# News

- **[Aug. 2026]** Starting my Ph.D. in Computer Science at the University of Virginia, focusing on generative models as part of the RAISE group!

## Publications

Please view my [Google Scholar](https://scholar.google.com/citations?user=v3_DrtcAAAAJ&hl=en) profile for the latest updates.

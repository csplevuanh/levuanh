---
layout: homepage
---

# About Me

I'm an incoming Ph.D. student in Computer Science at the University of Virginia, advised by [Prof. Ferdinando Fioretto](https://nandofioretto.github.io/) as part of the **Responsible AI for Science and Engineering (RAISE)** group. I am honored to be awarded the UVA CS Scholar fellowship to support my PhD studies. I earned my BSc in Mathematics from Beloit College.

My research develops **safe and constrained generative models** for science and engineering - building systems that learn how the physical world behaves and how to act within it, while *provably* respecting the laws of physics, safety envelopes, and engineering constraints. I work across four model classes: **physics-informed machine learning**, **world models**, **large action models**, and **world action models**, under a single principle - *constraints are first-class properties of the generative process, not post-hoc corrections*.

I am broadly interested in constrained projection, responsible AI, and AI safety, with applications in robotics, materials design, and cyber-physical systems. I'm always happy to connect with researchers working on physics-informed generative models, safe embodied AI, or trustworthy foundation models for engineering.

# Research

![World Action Models Framework](assets/img/wam.png)

Modern generative and foundation models can produce remarkably realistic designs, dynamics, and action policies - yet they often ignore the hard physical and safety constraints that govern real-world systems. Unconstrained models may hallucinate impossible physics, propose unsafe robot behaviors, or generate action sequences that violate actuator limits. In engineering practice, these failures are unacceptable.

My research treats physical laws and safety specifications as **first-class design principles**. I build generative architectures whose compliance with physics and safety is *guaranteed by construction*, not enforced through brittle filtering. This program spans four model classes, each addressing a different layer of the gap between learned models and physical reality.

## Core Research Directions

### 1. Physics-Informed Machine Learning

I design learning architectures that internalize physical laws - conservation principles, symmetries, PDE structure, and material constraints - as *hard* inductive biases rather than soft regularizers. This includes constrained projection layers, structure-preserving neural operators, and physics-informed latent spaces whose outputs are provably consistent with governing equations. The goal is to make physics a property of the *model*, not a property of the loss.

### 2. World Models

I develop generative models of environment dynamics that are **physically grounded and safety-aware**. Rather than learning unconstrained latent dynamics, my world models embed invariances (energy, momentum, monotonicity), respect manifold structure, and expose certifiable safety envelopes. This makes them reliable substrates for downstream planning, control, and counterfactual reasoning in safety-critical settings.

### 3. Large Action Models

I investigate how to scale safe generative principles to **foundation models for sequential decision-making**. As large action models emerge as general-purpose policies across robotics, automation, and control, the central question is how to retain certifiable safety and constraint satisfaction at scale. I work on constrained decoding, optimization-layer integration, and verification-aware training schemes that turn large action models into *trustworthy* engineering agents rather than capable but uncertifiable ones.

### 4. World Action Models

I study how to *act* within learned worlds - coupling environment understanding with constrained action synthesis for embodied agents. My work focuses on action-conditioned generative models (diffusion policies, flow-matching controllers, autoregressive action transformers) that respect kinematic limits, collision constraints, and dynamic feasibility *at sampling time*. The expected result is embodied behavior that is immediately executable in the physical world, with safety guarantees baked into the generative process itself.

## Why This Matters

Science and engineering are entering an era where generative AI co-designs materials, drives robots, and closes the loop on cyber-physical systems. Without built-in constraints, these models risk proposing solutions that are physically impossible or outright dangerous. My research provides the algorithmic foundations to make generative AI a **trusted partner**: one that speaks the language of physics, respects safety limits, and empowers engineers and scientists to push what can be designed, simulated, and controlled - responsibly.

# News

- **[Aug. 2026]** Starting my Ph.D. in Computer Science at the University of Virginia, focusing on safe and constrained generative models as part of the RAISE group!

# Publications

Please view my [Google Scholar](https://scholar.google.com/citations?user=v3_DrtcAAAAJ&hl=en) profile for the latest updates.

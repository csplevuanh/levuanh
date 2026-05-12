---
layout: homepage
---

# About Me

I'm an incoming Ph.D. student in Computer Science at the University of Virginia, advised by [Prof. Ferdinando Fioretto](https://nandofioretto.github.io/) as part of the **Responsible AI for Science and Engineering (RAISE)** group. I am honored to be awarded the UVA CS Scholar fellowship to support my PhD studies. I earned my BSc in Mathematics from Beloit College.

My research develops **constrained generative models for mechanical applications** - architectures and algorithms that embed geometric, physical, and behavioral constraints directly into the generative process. I build diffusion models, flow matching, and related frameworks where safety properties are guaranteed from the ground up. The goal is to make generative AI a trusted tool for mechanical engineering: systems that are inherently safe, physically realizable, and ready for deployment in robotics, materials design, automation, and control.

I'm broadly interested in constrained generative modeling, embodied AI, and the integration of generative methods with cyber‑physical systems. I’m always happy to connect with researchers working on physics‑informed generative models, safety‑critical control, or trustworthy AI for engineering.

# Research

Modern generative AI can produce remarkably realistic designs, motions, and control policies, yet it often ignores the hard physical and safety constraints that govern real‑world mechanical systems. Unconstrained models may synthesize structurally impossible materials, unsafe robot trajectories, or controllers that violate actuator limits - failures that are unacceptable in engineering practice.

My research treats physical and safety constraints as **first‑class design principles**. I build generative models whose compliance with mechanical laws and performance specifications is *provably guaranteed by construction*, not enforced through brittle post‑hoc filters.

## Core Research Directions

### 1. Safe‑by‑Design Constrained & Embodied Architectures

I develop generative models (diffusion, flow matching, autoregressive variants) where physical, geometric, and safety constraints are embedded directly into training and inference. This includes:

- Designing physics‑informed latent spaces and constrained decoding mechanisms that provably satisfy invariance, monotonicity, energy conservation, and manufacturing limits.
- Encoding embodiment constraints (robot kinematics, spatial compatibility, material interfaces) so that generated outputs are immediately executable in the physical world.
- Integrating optimization layers and model‑based verification into the generative sampling process.

The result is a family of embeddings that are **verifiable and physically grounded from the start**, eliminating the dangerous gap between a generated proposal and its real‑world feasibility.

### 2. Generation for Mechanical Systems

I apply constrained generative techniques to core problems in mechanical engineering:

- **Robotics:** Synthesizing motion plans and control policies that strictly respect collision, torque, and velocity bounds — with certifiable safety envelopes.
- **Materials Science:** Designing microstructures, composites, and metamaterials with targeted mechanical, thermal, or acoustic properties, while respecting manufacturability constraints.
- **Automation & Control:** Generating feedback controllers and sequential decision strategies that remain within actuation limits, latency budgets, and dynamic feasibility regions.

In each application, the generative model acts as a co‑designer that internalizes the physics, allowing engineers to explore large design spaces without violating critical constraints.

### 3. Bridging Generative AI and Physical Reality

I investigate how constrained generative pipelines can become the intelligence backbone of **cyber‑physical systems**. This direction focuses on:

- Coupling learned generative priors with classical model‑based control for real‑time, safe decision‑making.
- Developing runtime constraint‑monitoring frameworks that verify generated plans before execution.
- Building unified tools where generative AI assists in co‑designing hardware, software, and control policies under a single set of physical and safety requirements.

The long‑term vision is a tightly integrated loop where generative models, physical simulators, and verification engines work together to accelerate innovation in mechanical engineering - safely and reliably.

## Why This Matters

Mechanical engineering is entering an era where AI‑driven design and autonomous operation are becoming a reality. Yet without built‑in constraints, generative models risk proposing solutions that are physically impossible or outright dangerous. My research provides the algorithmic foundations to turn generative AI into a **trusted engineering partner**: one that speaks the language of physics, respects safety limits, and empowers engineers to push the boundaries of what can be designed, built, and controlled.

# News

- **[Aug. 2026]** Starting my Ph.D. in Computer Science at the University of Virginia, focusing on physical generative models as part of the RAISE group!

# Publications

Please view my [Google Scholar](https://scholar.google.com/citations?user=v3_DrtcAAAAJ&hl=en) profile for the latest updates.

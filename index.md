---
layout: homepage
---

# About Me

I'm a Ph.D. student in Computer Science at the University of Virginia, advised by [Prof. Ferdinando Fioretto](https://nandofioretto.github.io/) as part of the **Responsible AI for Science and Engineering (RAISE)** group. I am honored to be awarded the UVA CS Scholar fellowship to support my PhD studies. I earned my BSc in Mathematics from Beloit College.

My research develops **safe and constrained world action models** - building systems that learn how the physical world behaves and how to act within it, while *provably* respecting physical laws, safety envelopes, and engineering constraints. As a result, I am broadly interested in constrained projection, responsible AI, and AI safety, with applications in robotics, autonomous systems, and cyber-physical systems. I am always happy to connect with researchers working on physics-informed generative models, safe embodied AI, or trustworthy foundation models for engineering.

# Research

![World Action Models Framework](assets/img/wam.png)

My research addresses a critical gap in the modern generative and foundation models: they are capable, but not *safe by construction*. A world model that ignores physical constraints can hallucinate impossible dynamics. An action model that lacks safety guarantees can propose behavior that is immediately harmful in deployment. In engineering and physical AI, these failures are not acceptable.

I treat **physical laws and safety specifications as first-class design principles** - building generative architectures whose compliance with physics and safety is guaranteed by construction, not enforced through brittle post-hoc filtering. This program spans three interconnected research directions.

## Research Directions

### Constrained Generative World Action Models

World Action Models (WAMs) represent a paradigm shift in embodied AI: rather than learning direct observation-to-action mappings, they jointly model how the physical world evolves and how to act within it. My work focuses on am open problem this paradigm has not yet addressed - **how to make world action models formally safe**. I investigate architectures and learning frameworks in which constraint satisfaction is embedded into the generative process itself, so that predicted futures and generated actions are certified feasible before execution. The goal is a class of world action models whose safety properties can be formally characterized and communicated to downstream systems.

### Safe Planning and Decision-Making Under Constraints

Physical AI systems do not operate in isolation. Robots share workspaces, vehicles share roads, and autonomous agents increasingly must coordinate in environments where individual decisions have interdependent consequences. I study how constrained world models can serve as a substrate for **safe planning and multi-agent decision-making** - enabling agents to reason about the physical evolution of their shared environment, anticipate the actions of others, and arrive at coordinated behavior that respects joint safety constraints. I am interested in both the theoretical foundations of this problem and in scalable methods that operate under the partial observability and communication constraints of real deployments.

### Constraint-Aware Embodied Foundation Models

Embodied foundation models - large-scale pre-trained systems for robot perception and control - are showing impressive generalization across tasks and environments. My work examines how to make these models **trustworthy at deployment time**: how to specify safety constraints precisely, how to adapt foundation models to new constraint sets efficiently, and how to provide formal assurances that a deployed policy satisfies its safety specification in a target environment. I am particularly interested in the gap between empirical generalization and certified safety - and in building the tools that close it.

## Why This Matters

Physical AI is moving rapidly from research demonstration to real-world deployment - in hospitals, factories, roads, and homes. The generative models driving this transition are capable days by days, but capability without certified safety is insufficient for safety-critical environments. My research builds the algorithmic foundations for Physical AI systems that are not only capable, but **formally trustworthy**: systems that speak the language of physics, respect safety limits, and give engineers and operators the formal assurances they need to deploy with confidence.

# News

- **[Aug. 2026]** Starting my Ph.D. in Computer Science at the University of Virginia as part of the RAISE group!

# Publications

Please view my [Google Scholar](https://scholar.google.com/citations?user=v3_DrtcAAAAJ&hl=en) profile for the latest updates.

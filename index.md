---
layout: homepage
---

# About Me

I'm an incoming Ph.D. student in Computer Science at the University of Virginia, advised by [Prof. Ferdinando Fioretto](https://nandofioretto.github.io/) as part of the **Responsible AI for Science and Engineering (RAISE)** group. I am honored to be awarded the UVA CS Scholar fellowship to support my PhD studies. I earned my BSc in Mathematics from Beloit College.

My research develops **constrained generative models for operations research and decision support**: architectures and algorithms that combine the expressivity of frontier generative AI - diffusion models, flow-based models, autoregressive systems, and neural samplers - with rigorous feasibility guarantees, finite-sample certificates, and robust uncertainty quantification. The goal is to make generative AI a reliable engine for prescriptive analytics: a system that decision-makers and operations managers can deploy with confidence, knowing that every generated scenario, design, or recommendation is both novel and operationally valid.

I’m broadly interested in the intersection of deep generative modeling, constrained optimization, robust and stochastic programming, and certifiable AI for operations. I’m always happy to connect with others working on trustworthy generative AI, prescriptive analytics, or constraint-driven machine learning for engineering and decision support.

# Research

Modern organizations face design, planning, and optimization problems of staggering complexity - from engineering systems that must satisfy physical and operational constraints, to supply chains that must remain feasible under deep uncertainty, to scientific workflows where a single infeasible output can invalidate an entire experiment or decision pipeline. Generative AI offers transformative potential to accelerate solution generation and scenario exploration in these settings. Yet current generative models produce outputs that routinely violate the hard constraints - physical laws, capacity limits, logical consistency requirements, regulatory specifications - that any operationally credible solution must satisfy. An infeasible design, an inconsistent scenario, or an uncertified recommendation is not just unhelpful: it can mislead decision-makers in exactly the high-stakes contexts where AI assistance is most needed.

My research bridges this gap by embedding feasibility, certification, and uncertainty quantification directly into the generative modeling pipeline. I build systems that generate diverse, high-quality, and provably valid solutions for complex operational problems - not through post-hoc filtering, but *by construction*.

## Core Research Directions

### 1. Constrained Generative Models for Feasible Solution Generation

Classical approaches to combinatorial and continuous optimization generate solutions through search or mathematical programming. Generative models offer a fundamentally different paradigm: learning the *distribution* of high-quality, feasible solutions and sampling from it efficiently. I develop diffusion-based, flow-based, and autoregressive architectures that embed hard constraints - capacity limits, conservation laws, precedence requirements, logical consistency rules, safety specifications, and boundary conditions - directly into their sampling dynamics via stochastic optimal control, constrained Bayesian inference, and differentiable optimization layers. The result is a framework for **generative prescriptive analytics**: systems that produce diverse, high-quality, *feasible* candidates for complex operational decisions by construction, not by post-hoc filtering.

Applications include feasibility-guaranteed scenario generation for stochastic programming, constraint-satisfying design space exploration in engineering and operations, and generative approaches to combinatorial optimization problems in scheduling, logistics, and resource allocation.

### 2. Distribution-Free Certification and Uncertainty Quantification

Prescriptive systems that cannot certify the quality and reliability of their outputs are of limited operational value. I establish finite-sample, distribution-free guarantees on constraint satisfaction and output correctness using conformal prediction, robust optimization, and neural network verification. These methods provide decision-makers with rigorous, data-driven assurances - not asymptotic approximations - about the reliability of generative model outputs across the full distribution of operational scenarios, without requiring unrealistic parametric assumptions. This connects directly to the growing literature on **safe and robust optimization under uncertainty**, extending classical chance-constrained and distributionally robust programming frameworks to the setting where the solution generator is itself a learned model.

### 3. AI-Assisted Decision Support in Operations and Engineering Systems

I am motivated by operations problems where the solution space is too vast for classical optimization, but where every recommended decision must satisfy hard operational requirements. Target domains include:

- **Stochastic and robust optimization**: Generative models as efficient samplers for scenario generation, Benders decomposition acceleration, and warm-starting in two-stage and multi-stage stochastic programs
- **Engineering operations**: Certifiable design optimization, control synthesis, and simulation-based optimization under safety and performance constraints - with applications to energy systems, manufacturing, and infrastructure
- **Healthcare and scientific operations**: Generative approaches to treatment planning, experimental design, and resource allocation where feasibility is non-negotiable
- **Supply chain and logistics**: Learning feasible solution distributions for large-scale combinatorial problems, enabling fast, reliable scenario-based planning under disruption

## Why This Matters for Operations Research

Operations research has long been the discipline that bridges mathematical rigor and operational reality. The current wave of generative AI offers OR an extraordinary opportunity: these models can explore solution spaces, generate scenarios, and support decisions at scales that classical methods struggle to reach. But realizing this potential requires solving the fundamental problem that OR has always cared about most - **guaranteeing that solutions are feasible and recommendations are reliable**. My research provides the theoretical and algorithmic foundations to deploy generative AI as a trustworthy tool in the OR toolkit, transforming it from a black-box approximator into a certifiable, constraint-respecting engine for discovery and decision support.

# News

- **[Aug. 2026]** Starting my Ph.D. in Computer Science at the University of Virginia, focusing on generative models as part of the RAISE group!

## Publications

Please view my [Google Scholar](https://scholar.google.com/citations?user=v3_DrtcAAAAJ&hl=en) profile for the latest updates.

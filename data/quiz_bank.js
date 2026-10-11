/* CS Exam Preparation Quiz Bank Data (400 Questions) */
window.QUIZ_BANK = {
  "algorithms": [
    {
      "id": 1,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "단순 선형 회귀(Simple Linear Regression)에서 가설 함수 $h_\\theta(x) = \\theta_0 + \\theta_1 x$의 비용 함수로 주로 사용되는 평균 제곱 오차(MSE)의 설명으로 가장 올바른 것은?",
      "options": [
        "실제값과 예측값의 차이의 절댓값을 합산하여 미분이 불가능하다.",
        "오차를 제곱하므로 큰 오차에 대해 더 큰 패널티를 부여하며, 미분 가능한 2차 볼록 함수 형태를 띤다.",
        "비용 함수의 값이 0에 도달하면 가중치가 더 이상 학습되지 않고 무한대로 발산한다.",
        "분류 문제에서 시그모이드와 결합 시 항상 볼록(Convex) 함수를 형성하여 최적해를 보장한다."
      ],
      "answer": 1,
      "explanation": "MSE는 오차를 제곱하여 합산하므로 큰 오차에 민감하게 반응하며, 파라미터 공간에서 아래로 볼록한(Convex) 포물선 곡면을 형성하여 경사하강법으로 최적화하기에 적합합니다."
    },
    {
      "id": 2,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "1958년 프랑크 로젠블랫(Frank Rosenblatt)이 제안한 단층 퍼셉트론(Single-Layer Perceptron)에 대한 설명으로 올바른 것은?",
      "options": [
        "활성화 함수로 반드시 시그모이드(Sigmoid)나 ReLU 함수를 사용해야만 수렴한다.",
        "입력 신호들에 가중치를 곱하고 편향을 더한 선형 결합 결과에 계단 함수(Step Function)를 적용하여 이진 분류를 수행한다.",
        "단 하나의 퍼셉트론으로 AND, OR, XOR 논리 게이트를 모두 완벽하게 학습 및 구현할 수 있다.",
        "출력값과 정답이 일치할 때 가중치를 가장 큰 폭으로 갱신하여 학습을 가속화한다."
      ],
      "answer": 1,
      "explanation": "단층 퍼셉트론은 선형 결합 $\\sum w_i x_i + b$가 임계값을 넘는지(0 이상인지) 판단하는 계단 함수(Heaviside Step Function)를 활성화 함수로 사용하여 0 또는 1의 이진 출력을 생성합니다."
    },
    {
      "id": 3,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "민스키와 페퍼트(Minsky & Papert, 1969)가 지적하여 제1차 AI 겨울을 촉발한 '단층 퍼셉트론의 XOR 문제'의 근본적인 원인은 무엇인가?",
      "options": [
        "가중치 초기값이 0으로 설정되어 역전파 시 그래디언트가 소실되었기 때문",
        "XOR의 진리표 데이터는 2차원 평면상에서 단 하나의 직선(초평면)으로 두 클래스를 분리(선형 분리)할 수 없기 때문",
        "입력 데이터의 차원이 너무 커서 연산량이 지수 함수적으로 폭증했기 때문",
        "학습률(Learning Rate)이 너무 크게 설정되어 가중치가 진동했기 때문"
      ],
      "answer": 1,
      "explanation": "XOR 문제는 (0,0)->0, (1,1)->0, (0,1)->1, (1,0)->1로 2차원 평면에서 단일 직선으로는 양 클래스를 나눌 수 없는 '비선형 분리(Non-linearly Separable)' 문제입니다."
    },
    {
      "id": 4,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "다층 퍼셉트론(MLP: Multi-Layer Perceptron)이 XOR 문제를 해결할 수 있는 기하학적/수학적 메커니즘은 무엇인가?",
      "options": [
        "입력 데이터의 노이즈를 제거하여 1차원 직선으로 투영하기 때문",
        "은닉층(Hidden Layer)이 입력 공간을 비선형적으로 왜곡/변환하여, 출력층 관점에서 선형 분리가 가능한 새로운 특징 공간으로 매핑하기 때문",
        "은닉층의 모든 뉴런이 가중치 갱신 없이 무작위 투영만을 수행하기 때문",
        "출력층에서 확률적 경사하강법 대신 정규방정식(Normal Equation)만을 사용하기 때문"
      ],
      "answer": 1,
      "explanation": "은닉층은 입력 좌표 공간을 뒤틀거나 변환하여, 은닉 노드들의 출력 공간에서는 원래 분리 불가능했던 데이터가 선형 분리 가능(Linearly Separable)하도록 만듭니다."
    },
    {
      "id": 5,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "XOR 문제를 해결하기 위해 구성해야 하는 MLP의 최소 은닉층 뉴런 수는 몇 개인가?",
      "options": [
        "1개",
        "2개",
        "4개",
        "8개"
      ],
      "answer": 1,
      "explanation": "XOR은 2개의 결정 경계(예: NAND 게이트와 OR 게이트의 조합)를 은닉층의 2개 뉴런으로 형성하고, 이를 출력 뉴런(AND 연산)에서 결합하면 최소 2개의 은닉 노드로 구현 가능합니다."
    },
    {
      "id": 6,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "단층 퍼셉트론에서 결정 경계(Decision Boundary)의 수학적 형태는 $n$차원 입력 공간에서 어떤 차원의 초평면(Hyperplane)을 이루는가?",
      "options": [
        "$n$차원 공간",
        "$n-1$차원 초평면",
        "1차원 점",
        "$2n$차원 곡면"
      ],
      "answer": 1,
      "explanation": "가중치 방정식 $w_1 x_1 + w_2 x_2 + \\dots + w_n x_n + b = 0$은 $n$차원 유클리드 공간에서 $n-1$차원의 초평면(Hyperplane)을 정의합니다. (2차원 평면에서는 1차원 직선)"
    },
    {
      "id": 7,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "퍼셉트론 수식 $y = f(\\mathbf{w}^T \\mathbf{x} + b)$에서 편향(Bias, $b$)의 기하학적 역할로 가장 정확한 것은?",
      "options": [
        "결정 초평면의 기울기(방향)만을 결정한다.",
        "결정 초평면이 원점을 지나지 않고 공간상에서 평행 이동할 수 있도록 위치(절편)를 조절한다.",
        "입력 벡터 $\\mathbf{x}$의 차원을 동적으로 증가시킨다.",
        "가중치 벡터의 크기를 1로 정규화(L2 Normalization)한다."
      ],
      "answer": 1,
      "explanation": "가중치 벡터 $\\mathbf{w}$는 초평면의 법선 벡터로서 방향을 결정하고, 편향 $b$는 초평면이 원점으로부터 얼마나 떨어져 있는지를 조절(절편 이동)합니다."
    },
    {
      "id": 8,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "입력층 노드 수가 4개, 은닉층 노드 수가 5개, 출력층 노드 수가 2개인 완전연결(Fully-Connected) MLP에서 학습해야 할 총 파라미터(가중치 + 편향)의 수는?",
      "options": [
        "30개",
        "37개",
        "40개",
        "47개"
      ],
      "answer": 1,
      "explanation": "입력->은닉 가중치: $4 \\times 5 = 20$, 은닉 편향: $5$ / 은닉->출력 가중치: $5 \\times 2 = 10$, 출력 편향: $2$ -> 총 파라미터 = $20 + 5 + 10 + 2 = 37$개입니다."
    },
    {
      "id": 9,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "머신러닝의 3대 학습 패러다임에 대한 설명 중 잘못된 것은?",
      "options": [
        "지도학습(Supervised Learning): 정답 라벨이 부여된 훈련 데이터를 사용하여 입력과 출력 간의 함수를 학습한다.",
        "비지도학습(Unsupervised Learning): 정답 라벨 없이 데이터 내의 숨겨진 패턴, 클러스터 또는 데이터 분포를 학습한다.",
        "강화학습(Reinforcement Learning): 환경과 상호작용하며 상태에 따른 행동을 취하고 보상(Reward)을 최대화하는 정책을 학습한다.",
        "선형 회귀와 단층 퍼셉트론은 정답 라벨이 필요 없는 대표적인 비지도학습 알고리즘이다."
      ],
      "answer": 3,
      "explanation": "선형 회귀와 퍼셉트론은 정답(타깃값 또는 클래스 라벨)이 주어진 상태에서 오차를 계산하여 학습하므로 '지도학습(Supervised Learning)'입니다."
    },
    {
      "id": 10,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "보편 근사 정리(Universal Approximation Theorem, Hornik et al. 1989)가 말하는 핵심 내용으로 옳은 것은?",
      "options": [
        "활성화 함수 없이 선형 변환만으로 구성된 100층 신경망은 모든 다항 함수를 오차 없이 근사한다.",
        "비선형 활성화 함수를 가진 단 하나의 은닉층을 포함하는 피드포워드 신경망이라도, 은닉 뉴런 수가 충분하다면 임의의 연속 함수를 원하는 정밀도로 근사할 수 있다.",
        "신경망의 파라미터 수가 데이터 수보다 많으면 항상 전역 최적해(Global Optimum)에 100% 수렴한다.",
        "합성곱 계층과 풀링 계층이 반드시 포함되어야만 비선형 함수를 근사할 수 있다."
      ],
      "answer": 1,
      "explanation": "보편 근사 정리는 비선형 활성화 함수를 갖춘 단일 은닉층 MLP라도 뉴런 수가 충분하면 컴팩트 집합 위의 어떠한 연속 함수도 임의의 오차 범위 내에서 근사할 수 있음을 수학적으로 보장합니다."
    },
    {
      "id": 11,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "ox",
      "question": "다층 신경망에서 은닉층에 비선형 활성화 함수를 사용하지 않고 항등 함수(선형 변환)만을 사용한다면, 아무리 많은 은닉층을 쌓아도 단일 선형 변환 계층과 수학적으로 완전히 동일하다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "$W_2(W_1 x + b_1) + b_2 = (W_2 W_1)x + (W_2 b_1 + b_2) = W'x + b'$로 선형 변환의 합성은 단일 선형 변환에 불과하므로 은닉층의 표현력이 증가하지 않습니다."
    },
    {
      "id": 12,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "ox",
      "question": "단층 퍼셉트론의 가중치 갱신 규칙은 분류 오차가 0일 때도 가중치를 학습률 크기만큼 지속적으로 증가시킨다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 1,
      "explanation": "퍼셉트론 규칙에서 예측과 실제 타깃이 일치하면 오차 $(y - \\hat{y}) = 0$이므로 가중치는 전혀 변경되지 않습니다."
    },
    {
      "id": 13,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "과적합(Overfitting) 현상에 대한 설명으로 가장 올바른 것은?",
      "options": [
        "모델의 복잡도가 너무 낮아 훈련 데이터의 기본 패턴조차 학습하지 못하는 현상",
        "모델이 훈련 데이터의 노이즈와 세부 사항까지 과도하게 암기하여, 훈련 오차는 매우 낮으나 새로운 테스트 데이터에 대한 일반화 성능이 급격히 떨어지는 현상",
        "에포크(Epoch)를 1회만 수행했을 때 가중치가 갱신되지 않는 현상",
        "훈련 데이터와 테스트 데이터의 손실 함수 값이 모두 0에 수렴하는 이상적인 상태"
      ],
      "answer": 1,
      "explanation": "과적합은 모델의 용량(파라미터 수)이 데이터 복잡도에 비해 너무 커서 훈련 셋의 무작위 노이즈까지 과도하게 피팅되어 일반화(Generalization) 능력이 상실된 상태입니다."
    },
    {
      "id": 14,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "L2 규제(Ridge Regularization / Weight Decay)가 신경망의 과적합을 방지하는 원리는?",
      "options": [
        "모든 가중치 중 절댓값이 작은 것을 정확히 0으로 만들어 모델을 희소(Sparse)하게 만든다.",
        "손실 함수에 가중치 제곱합 $\\frac{1}{2}\\lambda \\sum w_i^2$을 페널티 항으로 추가하여, 가중치들이 지나치게 커지지 않도록 억제한다.",
        "데이터의 차원을 자동으로 2배로 확장시킨다.",
        "경사하강법의 학습률을 에포크마다 지수적으로 증가시킨다."
      ],
      "answer": 1,
      "explanation": "L2 규제는 큰 가중치에 페널티를 부과하여 가중치 분포를 완만하고 작게 유지함으로써 결정 경계의 급격한 굴곡(과적합)을 방지합니다."
    },
    {
      "id": 15,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "선형 회귀에서 경사하강법 대신 행렬 연산으로 한 번에 최적 파라미터를 구하는 정규 방정식(Normal Equation)의 형태는?",
      "options": [
        "$\\theta = (X^T X)^{-1} X^T y$",
        "$\\theta = X^T (X X^T)^{-1} y$",
        "$\\theta = X (X^T y)^{-1}$",
        "$\\theta = (X^T y) X^{-1}$"
      ],
      "answer": 0,
      "explanation": "정규 방정식은 비용함수 $J(\\theta)$의 그래디언트를 0으로 놓았을 때 해석적 해 $\\theta = (X^T X)^{-1} X^T y$로 유도됩니다."
    },
    {
      "id": 16,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "정규 방정식(Normal Equation)을 매우 큰 규모의 빅데이터 학습에 직접 적용하기 어려운 가장 큰 이유는?",
      "options": [
        "특징(Feature) 수가 많아지면 $(X^T X)$의 역행렬을 계산하는 시간 복잡도가 대략 $O(n^3)$으로 폭증하기 때문",
        "학습률을 잘못 설정하면 전역 최소점을 지나쳐 발산하기 때문",
        "항상 로컬 미니마(Local Minima)에 갇히는 문제가 발생하기 때문",
        "행렬의 모든 원소가 정수일 때만 역행렬이 존재하기 때문"
      ],
      "answer": 0,
      "explanation": "특징 차원 $n$이 수만 개 이상으로 커지면 $n \\times n$ 행렬의 역행렬 연산 비용이 $O(n^3)$으로 감당할 수 없을 만큼 커지므로, 점진적인 경사하강법이 훨씬 효율적입니다."
    },
    {
      "id": 17,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "ox",
      "question": "AND 게이트와 OR 게이트는 모두 단 하나의 직선으로 0과 1을 분리할 수 있는 선형 분리 가능(Linearly Separable) 함수이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "AND와 OR의 진리표 점들은 2차원 평면에서 직선 하나로 완벽하게 양분할 수 있습니다."
    },
    {
      "id": 18,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "가중치(Weight)의 초깃값을 모두 0으로 동일하게 설정했을 때 다층 퍼셉트론(MLP)에서 발생하는 치명적인 문제는?",
      "options": [
        "경사하강법의 그래디언트가 무한대로 폭발한다.",
        "같은 층의 모든 은닉 노드가 동일한 그래디언트를 받아 항상 똑같이 갱신되는 대칭성(Symmetry) 문제가 발생하여 노드가 여럿이어도 1개처럼 동작한다.",
        "비용 함수가 즉시 0이 되어 학습이 종료된다.",
        "모든 입력 데이터가 자동으로 0으로 정규화된다."
      ],
      "answer": 1,
      "explanation": "대칭성 깨기(Symmetry Breaking)가 실패하여 모든 은닉 노드가 동일한 활성화값과 동일한 그래디언트를 갖게 되므로, Xavier나 He 초기화 등 무작위 난수 초기화가 필수적입니다."
    },
    {
      "id": 19,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "mcq",
      "question": "경사하강법을 적용하기 전 입력 데이터의 특성(Feature)들을 평균 0, 표준편차 1로 스케일링(Standardization)하는 주요 이유는?",
      "options": [
        "손실 함수의 등고선이 왜곡된 타원에서 원형에 가깝게 변하여 경사하강법이 최소점을 향해 진동 없이 빠르게 수렴하기 때문",
        "비선형 활성화 함수를 선형 함수로 변환하기 때문",
        "은닉층 뉴런의 개수를 절반으로 줄일 수 있기 때문",
        "학습 데이터의 크기(메가바이트)를 줄여 디스크 용량을 아끼기 때문"
      ],
      "answer": 0,
      "explanation": "특징 간의 스케일 차이가 크면 손실 곡면이 심하게 찌그러진 타원이 되어 가중치가 지그재그로 요동치며 수렴이 지연됩니다."
    },
    {
      "id": 20,
      "subject": "algorithms",
      "topic": "Lec 2. 선형회귀 · 퍼셉트론 · MLP",
      "type": "ox",
      "question": "단층 퍼셉트론은 데이터가 선형 분리 가능한 경우에 한하여 유한한 반복 내에 반드시 수렴한다는 '퍼셉트론 수렴 정리'가 증명되어 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "노비코프(Novikoff, 1962)의 퍼셉트론 수렴 정리에 따르면 선형 분리 가능한 데이터셋에 대해 퍼셉트론 알고리즘은 유한 횟수 안에 오차 0인 경계를 찾아냅니다."
    },
    {
      "id": 21,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "시그모이드(Sigmoid) 함수 $\\sigma(x) = \\frac{1}{1 + e^{-x}}$의 도함수 $\\sigma'(x)$를 수식으로 올바르게 표현한 것은?",
      "options": [
        "$\\sigma'(x) = 1 - \\sigma(x)$",
        "$\\sigma'(x) = \\sigma(x)(1 - \\sigma(x))$",
        "$\\sigma'(x) = \\sigma(x)^2$",
        "$\\sigma'(x) = \\frac{1}{(1 + e^{-x})^2}$"
      ],
      "answer": 1,
      "explanation": "$\\sigma'(x) = \\frac{e^{-x}}{(1+e^{-x})^2} = \\frac{1}{1+e^{-x}} \\cdot \\frac{e^{-x}}{1+e^{-x}} = \\sigma(x)(1 - \\sigma(x))$로 자기 자신을 이용해 매우 간단히 계산됩니다."
    },
    {
      "id": 22,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "시그모이드 도함수 $\\sigma'(x) = \\sigma(x)(1 - \\sigma(x))$의 최댓값과 그 위치($x$)는?",
      "options": [
        "최댓값 1.0 ($x = 0$)",
        "최댓값 0.5 ($x = 1$)",
        "최댓값 0.25 ($x = 0$)",
        "최댓값 0.75 ($x = -1$)"
      ],
      "answer": 2,
      "explanation": "$x = 0$일 때 $\\sigma(0) = 0.5$이며, 도함수 최댓값은 $0.5 \\times (1 - 0.5) = 0.25$입니다."
    },
    {
      "id": 23,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "시그모이드 함수를 깊은 신경망의 은닉층에 사용할 때 발생하는 '기울기 소실(Vanishing Gradient)'의 주된 메커니즘은?",
      "options": [
        "역전파 과정에서 각 층을 거칠 때마다 최대 0.25에 불과한 미분값이 연속으로 곱해지면서 입력층 쪽으로 갈수록 그래디언트가 지수적으로 0에 수렴하기 때문",
        "가중치들이 층을 거칠 때마다 4배씩 커지기 때문",
        "손실 함수가 음수 영역으로 발산하기 때문",
        "은닉 노드의 출력이 항상 1보다 커지기 때문"
      ],
      "answer": 0,
      "explanation": "연쇄 법칙에 의해 층을 거슬러 올라가며 미분값이 연쇄 곱셈되는데, 각 미분값이 최대 0.25이므로 10개 층만 거쳐도 $0.25^{10} \\approx 10^{-6}$으로 기울기가 사실상 소멸합니다."
    },
    {
      "id": 24,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "시그모이드 함수의 또 다른 단점인 'Not Zero-centered(원점 비대칭)'로 인해 발생하는 역전파 시의 문제점은?",
      "options": [
        "모든 은닉 노드가 0으로 강제 초기화된다.",
        "입력값이 항상 양수($\\sigma(x) > 0$)이므로 가중치들의 그래디언트 부호가 모두 동일하게 결정되어, 가중치 업데이트가 비효율적인 '지그재그(Zig-zag)' 경로를 따르게 된다.",
        "학습률이 자동으로 음수로 전환된다.",
        "손실 함수의 최솟값이 0에서 1로 이동한다."
      ],
      "answer": 1,
      "explanation": "국소 기울기 $\\frac{\\partial L}{\\partial w_i} = \\frac{\\partial L}{\\partial z} x_i$에서 $x_i$가 항상 양수이면 모든 $w_i$에 대한 그래디언트가 전부 양수이거나 전부 음수가 되어 파라미터 갱신이 대각선 지그재그 방향으로 비효율적으로 진행됩니다."
    },
    {
      "id": 25,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "쌍곡탄젠트($\\tanh$) 함수가 시그모이드 함수에 비해 갖는 장점과 여전히 남아있는 한계의 조합으로 가장 적절한 것은?",
      "options": [
        "장점: 출력 범위가 (-1, 1)로 Zero-centered이다. / 한계: $|x|$가 클 때 여전히 포화(Saturation)되어 기울기 소실이 발생한다.",
        "장점: 도함수의 최댓값이 10 이상이다. / 한계: 원점 비대칭이다.",
        "장점: 연산 속도가 계단 함수보다 빠르다. / 한계: 비선형성이 전혀 없다.",
        "장점: 기울기 소실이 100% 영구 해결된다. / 한계: 출력이 음수가 될 수 없다."
      ],
      "answer": 0,
      "explanation": "$\\tanh$는 출력이 0을 중심으로 대칭(Zero-centered)이라 시그모이드보다 학습이 안정적이지만, $|x|$가 커지면 미분값이 0에 가까워지는 포화 특성 때문에 기울기 소실은 여전히 존재합니다."
    },
    {
      "id": 26,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "ReLU(Rectified Linear Unit, $f(x) = \\max(0, x)$)가 딥러닝에서 시그모이드를 제치고 표준 활성화 함수로 채택된 가장 결정적인 이유는?",
      "options": [
        "모든 실수 영역에서 미분이 완벽하게 가능하기 때문",
        "양수 영역($x > 0$)에서 도함수가 항상 1이므로 깊은 층에서도 기울기 소실을 극적으로 완화하며, 단순 임계값 연산으로 계산 속도가 매우 빠르기 때문",
        "출력값이 항상 -1과 1 사이로 정규화되기 때문",
        "파라미터 초기화가 전혀 필요 없기 때문"
      ],
      "answer": 1,
      "explanation": "ReLU는 $x > 0$일 때 기울기가 1로 유지되어 층이 아무리 깊어도 기울기가 약화되지 않고 보존되며, 지수 연산($e^x$)이 없어 연산 비용이 획기적으로 낮습니다."
    },
    {
      "id": 27,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "ReLU 활성화 함수에서 발생하는 'Dying ReLU' 현상이란 무엇인가?",
      "options": [
        "가중치가 너무 커져서 컴퓨터의 부동소수점 오버플로우가 발생하는 현상",
        "음수 입력($x < 0$)에 대해 출력이 0이고 기울기도 0이 되어, 큰 음수 그래디언트를 받아 가중치가 비활성화된 뉴런이 다시는 회생하지 못하는 현상",
        "양수 입력에서 미분값이 0이 되는 현상",
        "출력층의 소프트맥스 확률이 0이 되는 현상"
      ],
      "answer": 1,
      "explanation": "뉴런의 입력이 음수가 되면 기울기가 정확히 0이 되므로 가중치가 더 이상 업데이트되지 않고 영구히 잠드는 현상을 Dying ReLU라고 합니다."
    },
    {
      "id": 28,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "Dying ReLU 문제를 해결하기 위해 $x < 0$ 구간에서도 아주 작은 기울기(예: $\\alpha = 0.01$)를 유지하도록 변형한 함수는?",
      "options": [
        "Sigmoid",
        "Step Function",
        "Leaky ReLU",
        "Softmax"
      ],
      "answer": 2,
      "explanation": "Leaky ReLU는 $f(x) = \\max(\\alpha x, x)$로 정의되어 음수 영역에서도 미세한 기울기 $\\alpha$를 흘려보내 뉴런이 완전히 죽는 것을 방지합니다."
    },
    {
      "id": 29,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "경사하강법(Gradient Descent)의 파라미터 갱신 공식 $w \\leftarrow w - \\alpha \\nabla J(w)$에서 그래디언트 $\\nabla J(w)$ 앞에 음의 부호(-)가 붙는 수학적 이유는?",
      "options": [
        "손실 함수가 음수 값을 가질 수 없도록 방지하기 위해",
        "그래디언트 벡터는 함수값이 가장 가파르게 '증가'하는 방향을 가리키므로, 손실을 '최소화'하려면 그 반대 방향으로 이동해야 하기 때문",
        "학습률 $\\alpha$가 항상 음수이기 때문",
        "가중치 행렬의 역행렬을 대신하기 위해"
      ],
      "answer": 1,
      "explanation": "다변수 함수의 그래디언트 $\\nabla f$는 가장 가파른 증가 방향이므로, 최솟값을 찾는 경사하강법에서는 반대 방향인 $-\\nabla f$로 파라미터를 이동해야 합니다."
    },
    {
      "id": 30,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "경사하강법에서 학습률(Learning Rate, $\\alpha$)이 너무 크게 설정되었을 때 발생하는 전형적인 현상은?",
      "options": [
        "학습이 극도로 느려져 최소점에 도달하는 데 수백만 에포크가 걸린다.",
        "최소점을 지나쳐 건너뛰는 오버슈팅(Overshooting)이 발생하며 손실 함수 값이 진동하거나 무한대로 발산한다.",
        "가중치가 모두 0으로 수렴한다.",
        "모든 활성화 함수가 선형 함수로 축퇴된다."
      ],
      "answer": 1,
      "explanation": "학습률이 너무 크면 스텝 크기가 지나치게 커서 최적점을 지나쳐 반대편 경사면으로 튕겨 나가 결국 발산(Divergence)하게 됩니다."
    },
    {
      "id": 31,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "경사하강법에서 학습률(Learning Rate, $\\alpha$)이 너무 작게 설정되었을 때의 문제점으로 옳은 것은?",
      "options": [
        "손실 함수가 즉시 발산한다.",
        "수렴 속도가 지나치게 느려지고 국소 최소점(Local Minima)이나 안장점(Saddle Point)에 조기에 갇혀 빠져나오지 못할 위험이 크다.",
        "기울기가 폭발하여 오버플로우가 일어난다.",
        "가중치가 음수로만 업데이트된다."
      ],
      "answer": 1,
      "explanation": "너무 작은 학습률은 수렴에 막대한 시간이 소요되며, 경사가 완만한 고원이나 얕은 로컬 미니마를 탈출할 동력을 얻지 못합니다."
    },
    {
      "id": 32,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "안장점(Saddle Point)에 대한 정의로 가장 올바른 것은?",
      "options": [
        "함수의 모든 2차 편미분값이 양수인 전역 최솟값 지점",
        "모든 방향의 1차 도함수(그래디언트)가 0이지만, 어떤 방향으로는 극대이고 다른 방향으로는 극소여서 극값이 아닌 지점",
        "함수값이 정의되지 않는 불연속 지점",
        "모든 파라미터가 0인 원점 좌표"
      ],
      "answer": 1,
      "explanation": "말안장 모양처럼 한 축으로는 최솟값이고 다른 축으로는 최댓값인 지점으로, 그래디언트가 0이므로 경사하강법이 정지해버리는 주요 난점입니다."
    },
    {
      "id": 33,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "ox",
      "question": "고차원 딥러닝 파라미터 공간에서는 고립된 로컬 미니마(Local Minima)보다 안장점(Saddle Point)과 평탄한 고원(Plateau)이 훨씬 더 빈번하게 발생한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "수천~수백만 차원 공간에서 모든 방향이 동시에 아래로 볼록할(로컬 미니마일) 확률은 극히 희박하며, 대다수의 그래디언트 0 지점은 안장점입니다."
    },
    {
      "id": 34,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "볼록 최적화(Convex Optimization) 문제의 가장 큰 장점은 무엇인가?",
      "options": [
        "데이터의 크기와 상관없이 연산 복잡도가 항상 $O(1)$이다.",
        "어떤 국소 최적점(Local Optimum)도 곧 전역 최적점(Global Optimum)과 일치한다.",
        "활성화 함수로 비선형 함수를 전혀 쓸 수 없다.",
        "학습률을 무한대로 주어도 항상 0에 수렴한다."
      ],
      "answer": 1,
      "explanation": "볼록 함수는 그릇 모양으로 아래로 볼록하므로 로컬 미니마가 곧 유일한 전역 최적해가 되어 어디서 시작해도 최적해에 도달합니다."
    },
    {
      "id": 35,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "ox",
      "question": "다층 신경망(MLP)의 비용 함수 곡면은 볼록(Convex) 함수가 아닌 복잡한 비볼록(Non-convex) 함수 형태를 띤다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "다층 신경망은 파라미터의 대칭성과 비선형 활성화 함수의 결합으로 인해 수많은 로컬 미니마, 안장점, 편평한 평원을 가진 비볼록 함수입니다."
    },
    {
      "id": 36,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "경사하강법에서 지수 이동 평균(EMA)을 사용하여 학습률을 점진적으로 감소시키는 기법을 무엇이라 부르는가?",
      "options": [
        "학습률 스케줄링 (Learning Rate Scheduling / Decay)",
        "가중치 감쇠 (Weight Decay)",
        "드롭아웃 (Dropout)",
        "배치 정규화 (Batch Normalization)"
      ],
      "answer": 0,
      "explanation": "학습 초기에는 큰 학습률로 빠르게 탐색하고, 최소점에 가까워질수록 학습률을 줄여 미세 조정하는 기법을 학습률 감쇠(Learning Rate Decay/Scheduling)라고 합니다."
    },
    {
      "id": 37,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "ELU(Exponential Linear Unit) 함수가 Leaky ReLU와 구별되는 주요 특징은?",
      "options": [
        "음수 영역에서 지수 함수 $f(x) = \\alpha(e^x - 1)$를 사용하여 부드러운 곡선을 형성하고 평균 출력을 0에 가깝게 만든다.",
        "양수 영역에서 기울기가 0이다.",
        "모든 영역에서 미분값이 정확히 1이다.",
        "파라미터 $\\alpha$가 항상 0으로 고정된다."
      ],
      "answer": 0,
      "explanation": "ELU는 음수 영역에서 지수 함수적으로 포화되어 노이즈에 강건하며, 0 근처에서 매끄럽게 연결되어 평균 활성화값을 0에 가깝게 유지합니다."
    },
    {
      "id": 38,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "ox",
      "question": "경사하강법의 갱신 크기(보폭)는 학습률 $\\alpha$뿐만 아니라 현재 위치에서의 그래디언트 크기 $\\|\\nabla J(w)\\|$에도 비례한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "갱신량 $\\Delta w = -\\alpha \\nabla J(w)$이므로 경사가 가파르면 보폭이 커지고 경사가 완만해지면 보폭이 자연스럽게 줄어듭니다."
    },
    {
      "id": 39,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "mcq",
      "question": "다음 중 활성화 함수의 출력 범위(Range)가 올바르게 짝지어진 것은?",
      "options": [
        "Sigmoid: [-1, 1], ReLU: [0, 1]",
        "Sigmoid: (0, 1), Tanh: (-1, 1), ReLU: [0, $\\infty$)",
        "Tanh: [0, $\\infty$), Leaky ReLU: (-1, 1)",
        "Sigmoid: [-\\infty, \\infty], Tanh: [0, 1]"
      ],
      "answer": 1,
      "explanation": "시그모이드는 (0, 1), $\\tanh$는 (-1, 1), ReLU는 [0, $\\infty$)의 치역을 가집니다."
    },
    {
      "id": 40,
      "subject": "algorithms",
      "topic": "Lec 3. 활성화함수 · 경사하강법",
      "type": "ox",
      "question": "ReLU 함수는 수학적으로 $x=0$에서 미분이 불가능하지만, 실제 구현에서는 서브그래디언트(Subgradient) 개념을 사용하여 0에서의 미분값을 0(또는 1)으로 정의하여 문제없이 학습한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "$x=0$에서 좌미분계수 0, 우미분계수 1로 뾰족점이지만 수치 연산에서는 통상 0 또는 임의의 서브그래디언트를 할당하여 역전파를 수행합니다."
    },
    {
      "id": 41,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "역전파(Backpropagation) 알고리즘의 수학적 기초를 이루는 미적분학의 핵심 원리는?",
      "options": [
        "평균값 정리 (Mean Value Theorem)",
        "연쇄 법칙 (Chain Rule)",
        "치환 적분법 (Integration by Substitution)",
        "그린 정리 (Green's Theorem)"
      ],
      "answer": 1,
      "explanation": "합성 함수의 미분을 각 단계 국소 미분의 곱으로 분해하는 연쇄 법칙(Chain Rule) $\\frac{\\partial z}{\\partial x} = \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial x}$이 역전파의 핵심 원리입니다."
    },
    {
      "id": 42,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "계산 그래프(Computational Graph)에서 덧셈 노드($z = x + y$)의 역전파 동작으로 올바른 것은?",
      "options": [
        "상류(Upstream)에서 전달된 그래디언트에 입력값 $x$와 $y$를 곱해서 하류로 전달한다.",
        "상류에서 전달된 그래디언트를 하류로 아무런 변경 없이 그대로 복사하여 흘려보낸다.",
        "상류 그래디언트를 항상 0으로 만든다.",
        "상류 그래디언트의 부호를 반전시킨다."
      ],
      "answer": 1,
      "explanation": "$\\frac{\\partial z}{\\partial x} = 1, \\frac{\\partial z}{\\partial y} = 1$이므로 상류 기울기 $\\frac{\\partial L}{\\partial z}$에 1을 곱해 그대로 양 갈래로 전달합니다."
    },
    {
      "id": 43,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "계산 그래프에서 곱셈 노드($z = x \\times y$)의 역전파 동작으로 올바른 것은?",
      "options": [
        "상류 그래디언트를 그대로 전달한다.",
        "상류 그래디언트에 순전파 때의 서로 상대방 입력값을 바꾸어 곱해서 전달한다.",
        "상류 그래디언트의 역수를 취해 전달한다.",
        "상류 그래디언트를 제곱하여 전달한다."
      ],
      "answer": 1,
      "explanation": "$\\frac{\\partial z}{\\partial x} = y, \\frac{\\partial z}{\\partial y} = x$이므로 $\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial z} y$, $\\frac{\\partial L}{\\partial y} = \\frac{\\partial L}{\\partial z} x$로 순전파 입력값을 서로 맞바꿔 곱합니다."
    },
    {
      "id": 44,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "신경망의 완전연결(Affine) 계층 $Y = XW + B$에서 가중치 $W$에 대한 손실함수 $L$의 그래디언트 $\\frac{\\partial L}{\\partial W}$의 올바른 행렬 표현은? (단, $X$는 입력 배치 행렬)",
      "options": [
        "$\\frac{\\partial L}{\\partial W} = X^T \\frac{\\partial L}{\\partial Y}$",
        "$\\frac{\\partial L}{\\partial W} = \\frac{\\partial L}{\\partial Y} X^T$",
        "$\\frac{\\partial L}{\\partial W} = W^T \\frac{\\partial L}{\\partial Y}$",
        "$\\frac{\\partial L}{\\partial W} = X \\frac{\\partial L}{\\partial Y}^T$"
      ],
      "answer": 0,
      "explanation": "행렬 차원의 일치성과 연쇄 법칙에 따라 $W$와 크기가 같은 가중치 기울기는 $X^T \\frac{\\partial L}{\\partial Y}$로 계산됩니다."
    },
    {
      "id": 45,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "고해상도 이미지(예: $1000 \\times 1000$ 픽셀)를 다층 퍼셉트론(MLP)의 1차원 벡터로 평탄화하여 학습시킬 때 나타나는 가장 심각한 두 가지 문제점은?",
      "options": [
        "픽셀의 2차원 공간적 위상(인접성) 정보 파괴 및 첫 번째 은닉층과의 연결로 인한 파라미터 수의 기하급수적 폭증",
        "이미지의 채널 수가 자동으로 1개로 줄어들고 역전파 연산이 불가능해지는 문제",
        "모든 활성화 함수가 시그모이드로 강제 변경되고 비용 함수가 정의되지 않는 문제",
        "라벨 데이터의 손실 및 손실 함수의 오버플로우 문제"
      ],
      "answer": 0,
      "explanation": "MLP는 2D 공간 구조(거리, 형태, 질감)를 무시한 채 1D 벡터로 펼치며, 뉴런 하나당 수백만 개의 가중치가 필요하여 파라미터 폭증과 극심한 과적합을 유발합니다."
    },
    {
      "id": 46,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "1989년 얀 르쿤(Yann LeCun)이 제안한 합성곱 신경망(CNN)의 핵심 메커니즘 두 가지는?",
      "options": [
        "전역 완전 연결과 순환 피드백",
        "국소 수용 영역(Local Receptive Field)과 가중치 공유(Weight Sharing)",
        "동적 학습률과 배치 정규화",
        "소프트맥스 활성화와 드롭아웃"
      ],
      "answer": 1,
      "explanation": "CNN은 이미지의 국소 영역에만 연결되는 작은 필터를 사용하며, 해당 필터를 전체 이미지에 걸쳐 슬라이딩하면서 동일한 가중치를 공유(Weight Sharing)하여 파라미터를 극적으로 줄입니다."
    },
    {
      "id": 47,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "CNN의 가중치 공유(Weight Sharing)가 제공하는 가장 중요한 이점은?",
      "options": [
        "파라미터 수를 획기적으로 줄여 과적합을 방지하고, 이미지 내의 특정 패턴이 위치와 상관없이 검출되는 이동 불변성(Translation Invariance)을 부여한다.",
        "역전파 과정에서 체인룰 연산이 전혀 필요 없어진다.",
        "입력 이미지의 해상도를 2배로 자동 업샘플링한다.",
        "모든 픽셀 값을 0과 1 사이로 정규화한다."
      ],
      "answer": 0,
      "explanation": "동일한 필터가 전체 이미지를 훑으므로 특징이 어느 위치에 나타나도 검출할 수 있는 이동 불변성을 가지며 학습할 파라미터 수가 극소화됩니다."
    },
    {
      "id": 48,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "입력 크기 $I = 32$, 커널(필터) 크기 $K = 5$, 패딩 $P = 2$, 스트라이드 $S = 1$일 때 합성곱 연산 후의 출력 크기 $O$는 얼마인가? (공식: $O = \\lfloor\\frac{I - K + 2P}{S}\\rfloor + 1$)",
      "options": [
        "28",
        "30",
        "32",
        "36"
      ],
      "answer": 2,
      "explanation": "$O = \\lfloor\\frac{32 - 5 + 2(2)}{1}\\rfloor + 1 = \\lfloor\\frac{31}{1}\\rfloor + 1 = 32$입니다. (입력과 출력이 같은 Same Padding)"
    },
    {
      "id": 49,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "합성곱 연산에서 '스트라이드(Stride)'의 역할에 대한 설명으로 옳은 것은?",
      "options": [
        "필터에 더해지는 편향(Bias)의 크기를 의미한다.",
        "필터를 입력 데이터 위에서 한 번에 몇 칸씩 이동시킬지를 결정하는 보폭을 의미한다.",
        "역전파 시 그래디언트를 몇 배 증폭할지를 결정하는 배율이다.",
        "이미지 가장자리에 0을 채워 넣는 폭을 의미한다."
      ],
      "answer": 1,
      "explanation": "스트라이드는 필터가 다음 윈도우로 이동할 때 건너뛰는 간격(픽셀 수)이며, 스트라이드가 커질수록 출력 특성맵의 크기는 작아집니다."
    },
    {
      "id": 50,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "합성곱 계층에서 입력 테두리에 0을 둘러싸는 패딩(Zero-Padding)의 두 가지 주요 목적은?",
      "options": [
        "가중치의 크기를 줄이고 활성화 함수를 생략하기 위함",
        "합성곱을 거치면서 특성맵 크기가 지속적으로 줄어드는 것을 방지하고, 가장자리 픽셀 정보의 과도한 유실을 방지하기 위함",
        "이미지의 색상 밝기를 조절하고 채널 수를 1로 만들기 위함",
        "역전파 연산 속도를 10배 빠르게 하기 위함"
      ],
      "answer": 1,
      "explanation": "패딩이 없으면 합성곱을 거칠 때마다 크기가 줄어들어 깊은 층을 쌓지 못하며 모서리 픽셀이 내부 픽셀에 비해 적게 연산되는 왜곡이 생깁니다."
    },
    {
      "id": 51,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "입력 이미지 크기가 $28 \\times 28 \\times 3$(가로 $\\times$ 세로 $\\times$ 채널)이고, $5 \\times 5$ 크기의 필터를 16개 적용할 때 이 합성곱 계층의 총 학습 파라미터 수(편향 포함)는?",
      "options": [
        "1,216개",
        "400개",
        "1,200개",
        "2,416개"
      ],
      "answer": 0,
      "explanation": "필터 1개의 가중치 수: $5 \\times 5 \\times 3 = 75$개, 편향 1개 -> 필터 1개당 파라미터 76개. 필터가 16개이므로 $76 \\times 16 = 1,216$개입니다."
    },
    {
      "id": 52,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "풀링(Pooling, 서브샘플링) 계층에 대한 설명 중 잘못된 것은?",
      "options": [
        "특성맵의 공간적 크기를 축소하여 연산량을 줄이고 과적합을 억제한다.",
        "최대 풀링(Max Pooling)과 평균 풀링(Average Pooling) 등이 널리 쓰인다.",
        "풀링 계층은 역전파를 통해 업데이트해야 하는 학습 파라미터(가중치)를 대량으로 포함한다.",
        "미세한 위치 변화나 노이즈에 대한 불변성(Invariance)을 모델에 부여한다."
      ],
      "answer": 2,
      "explanation": "풀링 계층은 정해진 규칙(최댓값 또는 평균 계산)에 따라 단순히 픽셀을 축소하므로 학습해야 할 가중치 파라미터가 0개입니다."
    },
    {
      "id": 53,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "최대 풀링(Max Pooling)의 역전파 동작에 대한 설명으로 옳은 것은?",
      "options": [
        "순전파 때 최댓값을 가졌던 원소의 위치로만 상류 그래디언트를 전달하고, 나머지 위치에는 0을 할당한다.",
        "상류 그래디언트를 풀링 윈도우 내의 모든 위치에 균등하게 $1/N$로 나누어 전달한다.",
        "모든 위치에 상류 그래디언트를 그대로 복사하여 전달한다.",
        "역전파 연산 자체가 불가능하므로 순전파에서만 사용된다."
      ],
      "answer": 0,
      "explanation": "최대 풀링은 최댓값만이 출력에 기여했으므로, 순전파 시 최댓값이었던 인덱스 위치(마스크)로만 기울기가 그대로 전달되고 나머지는 0이 됩니다."
    },
    {
      "id": 54,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "CNN의 전체적인 표준 구조 흐름으로 올바른 것은?",
      "options": [
        "입력 -> 완전연결층 -> 풀링층 -> 합성곱층 -> 출력",
        "입력 -> [합성곱 + 활성화 + 풀링] 반복 -> 평탄화(Flatten) -> 완전연결층(FC) -> 소프트맥스 출력",
        "입력 -> 평탄화 -> [풀링 + 완전연결층] 반복 -> 합성곱 -> 출력",
        "입력 -> 소프트맥스 -> 합성곱 -> 풀링 -> 출력"
      ],
      "answer": 1,
      "explanation": "CNN은 특징을 추출하는 Conv-Act-Pool 블록을 반복적으로 거친 후, Flatten을 통해 1차원 벡터로 변환하여 완전연결층(FC)에서 최종 분류를 수행합니다."
    },
    {
      "id": 55,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "CNN에서 얕은 층(입력에 가까운 층)과 깊은 층(출력에 가까운 층)이 추출하는 특징의 성격으로 옳은 것은?",
      "options": [
        "얕은 층: 사물의 전체적인 추상적 개념 / 깊은 층: 단순한 선, 에지, 점",
        "얕은 층: 에지, 텍스처, 색상 등 저수준(Low-level) 국소 특징 / 깊은 층: 사물의 부품, 형태, 전체 의미 등 고수준(High-level) 추상 특징",
        "얕은 층과 깊은 층 모두 완전히 동일한 빈도의 에지만 검출",
        "얕은 층: 텍스트 정보 / 깊은 층: 오디오 신호"
      ],
      "answer": 1,
      "explanation": "계층적 표현 학습(Hierarchical Representation)에 따라 앞단에서는 단순 에지와 모서리를 찾고, 층이 깊어질수록 이들이 조합되어 눈, 코, 자동차 바퀴 같은 고차원 특징을 형성합니다."
    },
    {
      "id": 56,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "ox",
      "question": "합성곱 연산 시 입력 데이터의 채널 수가 $C$개라면, 하나의 커널(필터) 역시 반드시 동일하게 $C$개의 채널을 가져야 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "필터의 채널 수는 입력 데이터의 채널 수와 반드시 일치해야 각 채널별로 2D 합성곱을 수행한 뒤 합산할 수 있습니다."
    },
    {
      "id": 57,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "ox",
      "question": "평균 풀링(Average Pooling)의 역전파 시에는 상류 그래디언트가 풀링 윈도우 크기 $N$으로 균등하게 나뉘어($\\frac{1}{N}$) 모든 원소로 전파된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "평균 연산은 $z = \\frac{1}{N} \\sum x_i$이므로 $\\frac{\\partial z}{\\partial x_i} = \\frac{1}{N}$이 되어 그래디언트가 $1/N$씩 균등 분배됩니다."
    },
    {
      "id": 58,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "입력 크기가 $4 \\times 4$이고 $2 \\times 2$ 윈도우, 스트라이드 2로 최대 풀링(Max Pooling)을 수행하면 출력의 크기는?",
      "options": [
        "$1 \\times 1$",
        "$2 \\times 2$",
        "$3 \\times 3$",
        "$4 \\times 4$"
      ],
      "answer": 1,
      "explanation": "가로/세로가 각각 절반으로 다운샘플링되므로 $2 \\times 2$가 됩니다."
    },
    {
      "id": 59,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "mcq",
      "question": "$1 \\times 1$ 합성곱(Pointwise Convolution)의 핵심적인 기능 두 가지는?",
      "options": [
        "공간적 해상도를 2배 확대하고 이미지 테두리를 지우는 기능",
        "공간 해상도(가로, 세로)를 유지하면서 채널 수를 줄이거나 늘려 차원 축소/확대를 수행하고, 비선형성을 추가하는 기능",
        "역전파 학습을 완전히 건너뛰는 기능",
        "풀링 계층을 완전히 대체하여 파라미터를 0으로 만드는 기능"
      ],
      "answer": 1,
      "explanation": "$1 \\times 1$ Conv는 각 픽셀 위치에서 채널 간의 선형 결합을 수행하므로 연산량 절감을 위한 채널 차원 축소 및 비선형 활성화 추가에 핵심적으로 쓰입니다."
    },
    {
      "id": 60,
      "subject": "algorithms",
      "topic": "Lec 4. 역전파 · CNN",
      "type": "ox",
      "question": "역전파 수행 시 분기 노드(하나의 출력이 두 개 이상의 노드로 갈라지는 경우)에서는 상류에서 오는 그래디언트들을 단순히 합산(Sum)하여 역전파한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "다변수 연쇄 법칙에 따라 $z = f(x, y)$이고 $w$가 $x$와 $y$ 모두에 영향을 준다면 $\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial x}\\frac{\\partial x}{\\partial w} + \\frac{\\partial L}{\\partial y}\\frac{\\partial y}{\\partial w}$로 갈래별 기울기를 합산합니다."
    },
    {
      "id": 61,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "클로드 섀넌(Claude Shannon)의 정보 이론에서 어떤 사건 $x$의 발생 확률이 $P(x)$일 때 자기 정보량(Self-Information, $I(x)$)의 수식은?",
      "options": [
        "$I(x) = P(x) \\log_2 P(x)$",
        "$I(x) = -\\log_2 P(x)$",
        "$I(x) = 1 - P(x)$",
        "$I(x) = \\frac{1}{P(x)^2}$"
      ],
      "answer": 1,
      "explanation": "정보량은 사건이 발생했을 때 느끼는 '놀람의 정도'로 확률에 반비례하며, 독립 사건의 정보량 덧셈성을 만족하기 위해 $I(x) = -\\log_2 P(x)$로 정의됩니다."
    },
    {
      "id": 62,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "정보 이론에서 정보량(Information)의 성질에 대한 설명으로 올바른 것은?",
      "options": [
        "발생 확률이 1에 가까운 확실한 사건일수록 정보량이 무한대로 커진다.",
        "발생 확률이 매우 희박한 희귀한 사건일수록 그 사건이 발생했을 때 얻는 정보량이 크다.",
        "항상 음의 실수 값을 가진다.",
        "독립적인 두 사건이 동시에 일어날 때의 정보량은 각 사건 정보량의 곱과 같다."
      ],
      "answer": 1,
      "explanation": "예를 들어 '내일 해가 동쪽에서 뜬다'는 정보량이 0에 가깝고, '내일 서울에 운석이 떨어진다'는 엄청난 양의 정보량을 가집니다."
    },
    {
      "id": 63,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "확률 분포 $P$에 대한 섀넌 엔트로피(Entropy, $H(P)$)의 수학적 의미로 가장 올바른 것은?",
      "options": [
        "특정 데이터 포인트의 가중치 제곱합",
        "해당 확률 분포에서 얻을 수 있는 정보량의 기댓값(평균 불확실성)",
        "신경망의 최종 예측 확률의 최댓값",
        "모든 사건이 일어날 확률의 단순 합"
      ],
      "answer": 1,
      "explanation": "엔트로피 $H(P) = -\\sum P(x) \\log P(x) = \\mathbb{E}[I(x)]$는 시스템이 갖는 불확실성(Uncertainty)의 평균 크기를 나타냅니다."
    },
    {
      "id": 64,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "동전을 던질 때 앞면이 나올 확률 $p$에 대한 엔트로피가 최대가 되는 $p$의 값은?",
      "options": [
        "$p = 0.0$ (앞면이 절대 안 나옴)",
        "$p = 0.5$ (공평한 동전)",
        "$p = 1.0$ (앞면만 무조건 나옴)",
        "$p = 0.25$"
      ],
      "answer": 1,
      "explanation": "결과를 전혀 예측할 수 없는 가장 불확실한 상태(균등 분포, $p = 0.5$)일 때 엔트로피가 1 bit로 최대가 됩니다. ($p=0$이나 $p=1$이면 결과가 확실하므로 엔트로피는 0)"
    },
    {
      "id": 65,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "실제 정답 분포 $P$와 모델의 예측 분포 $Q$ 사이의 교차 엔트로피(Cross-Entropy) 수식은?",
      "options": [
        "$H(P, Q) = -\\sum_x P(x) \\log Q(x)$",
        "$H(P, Q) = -\\sum_x Q(x) \\log P(x)$",
        "$H(P, Q) = \\sum_x (P(x) - Q(x))^2$",
        "$H(P, Q) = \\frac{\\sum P(x)}{\\sum Q(x)}$"
      ],
      "answer": 0,
      "explanation": "실제 분포 $P$를 기준으로 모델의 예측 분포 $Q$를 인코딩할 때 필요한 평균 비트 수로 $H(P, Q) = -\\sum P(x) \\log Q(x)$입니다."
    },
    {
      "id": 66,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "다중 클래스 분류 문제에서 평균 제곱 오차(MSE) 대신 크로스 엔트로피 손실 함수(Cross-Entropy Loss)를 사용하는 결정적인 이유는?",
      "options": [
        "MSE는 시그모이드/소프트맥스와 결합 시 오차가 매우 큰 지점에서도 그래디언트가 0에 가까워지는 포화 현상(학습 정체)이 생기지만, 크로스 엔트로피는 오차가 클수록 그래디언트가 비례하여 커져 빠르게 학습되기 때문",
        "크로스 엔트로피는 역전파 계산 시 미분이 전혀 필요 없기 때문",
        "MSE는 정답 라벨이 원-핫 인코딩 형태일 때 연산이 불가능하기 때문",
        "크로스 엔트로피는 가중치 파라미터 수를 자동으로 줄여주기 때문"
      ],
      "answer": 0,
      "explanation": "MSE와 시그모이드 결합 시 도함수에 $\\sigma'(z)$가 곱해져 오차가 커도 학습이 멈추지만, 크로스 엔트로피는 미분 시 도함수가 상쇄되어 $(\\hat{y} - y)$ 형태의 단순하고 정직한 그래디언트를 산출합니다."
    },
    {
      "id": 67,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "다중 클래스 분류의 출력층에 사용되는 소프트맥스(Softmax) 함수의 출력 성질로 올바른 것은?",
      "options": [
        "모든 출력 노드의 값이 0 또는 1로만 이진화된다.",
        "모든 출력 노드의 값이 0보다 크며, 전체 출력값들의 합이 항상 정확히 1이 되어 확률 분포로 해석할 수 있다.",
        "출력값들의 합이 항상 0이다.",
        "음수 입력을 그대로 보존하여 출력한다."
      ],
      "answer": 1,
      "explanation": "$\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_j e^{z_j}}$로 각 클래스에 속할 사후 확률(Posterior Probability)을 나타냅니다."
    },
    {
      "id": 68,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "정답 레이블이 클래스 2인 원-핫 벡터 $y = [0, 1, 0]$이고 모델의 소프트맥스 예측 확률이 $\\hat{y} = [0.1, 0.7, 0.2]$일 때 교차 엔트로피 손실 값은?",
      "options": [
        "$-\\log(0.1)$",
        "$-\\log(0.7)$",
        "$-\\log(0.2)$",
        "$0.7^2$"
      ],
      "answer": 1,
      "explanation": "원-핫 인코딩에서 정답 인덱스 이외의 $P(x)$는 0이므로 실제 손실은 정답 클래스의 예측 확률에 대한 음의 로그값인 $-\\log(\\hat{y}_{\\text{target}}) = -\\log(0.7)$이 됩니다."
    },
    {
      "id": 69,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "기본 순환 신경망(Vanilla RNN)의 시점 $t$에서의 은닉 상태(Hidden State, $h_t$) 갱신 수식으로 올바른 것은?",
      "options": [
        "$h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)$",
        "$h_t = \\text{ReLU}(W_{hh} h_{t+1} + W_{xh} x_t)$",
        "$h_t = W_{hh} h_{t-1} \\times W_{xh} x_t$",
        "$h_t = \\frac{h_{t-1} + x_t}{2}$"
      ],
      "answer": 0,
      "explanation": "이전 시점의 은닉 상태 $h_{t-1}$과 현재 입력 $x_t$를 각각의 가중치 행렬과 곱해 더한 후 $\\tanh$ 활성화 함수를 통과시켜 현재 은닉 상태를 갱신합니다."
    },
    {
      "id": 70,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "RNN에서 시간 축을 따라 펼친(Unrolled) 구조에서 가중치 행렬($W_{hh}, W_{xh}, W_{hy}$)에 대한 설명으로 옳은 것은?",
      "options": [
        "각 시점($t=1, 2, \\dots, T$)마다 완전히 서로 다른 새로운 가중치 행렬을 독립적으로 학습한다.",
        "모든 시점 $t$에서 동일한 단일 가중치 행렬 세트를 공유(Weight Sharing)하여 사용한다.",
        "시점이 지날 때마다 가중치 행렬의 크기가 2배씩 확장된다.",
        "가중치는 짝수 시점에서만 갱신된다."
      ],
      "answer": 1,
      "explanation": "RNN은 시퀀스의 길이에 관계없이 모든 시간 단계에서 동일한 파라미터($W_{hh}, W_{xh}, W_{hy}$)를 공유하므로 가변 길이 시퀀스를 처리할 수 있습니다."
    },
    {
      "id": 71,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "RNN 학습을 위한 역전파 알고리즘의 공식 명칭은?",
      "options": [
        "BPTT (Backpropagation Through Time)",
        "Forward-Backward Propagation",
        "Temporal Difference Learning",
        "Spatial Backpropagation"
      ],
      "answer": 0,
      "explanation": "시간 순서대로 펼쳐진 계산 그래프를 따라 미래 시점에서 과거 시점으로 오차 그래디언트를 역전파하는 알고리즘을 BPTT라고 합니다."
    },
    {
      "id": 72,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "기본 RNN에서 시퀀스 길이가 길어질 때 BPTT 수행 시 발생하는 치명적인 한계는?",
      "options": [
        "입력 데이터의 어휘 수가 자동으로 0으로 줄어드는 문제",
        "과거 시점으로 거슬러 올라가며 가중치 $W_{hh}^T$가 반복적으로 곱해져 그래디언트가 지수적으로 소실(Vanishing)되거나 폭발(Exploding)하는 장기의존성(Long-Term Dependency) 문제",
        "소프트맥스 출력이 음수로 역전되는 문제",
        "모든 시점의 은닉 상태가 1로 고정되는 문제"
      ],
      "answer": 1,
      "explanation": "시간 단계 $T$가 길어지면 연쇄 법칙에 의해 $\\prod W_{hh}^T$가 누적 곱해지며, 특잇값이 1보다 작으면 0으로 소실되고 1보다 크면 폭발하여 먼 과거의 정보를 기억하지 못합니다."
    },
    {
      "id": 73,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "BPTT 도중 그래디언트 폭발(Exploding Gradient)로 인해 가중치가 NaN(Not a Number)으로 발산하는 것을 방지하기 위해 널리 사용되는 기법은?",
      "options": [
        "드롭아웃 (Dropout)",
        "그래디언트 클리핑 (Gradient Clipping)",
        "라벨 스무딩 (Label Smoothing)",
        "원-핫 인코딩 (One-Hot Encoding)"
      ],
      "answer": 1,
      "explanation": "그래디언트 벡터의 L2 노름 $\\|g\\|$이 임계값(Threshold)을 초과할 경우 $g \\leftarrow \\frac{\\text{threshold}}{\\|g\\|} g$로 스케일을 강제 축소시키는 기법입니다."
    },
    {
      "id": 74,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "RNN의 은닉 상태(Hidden State)를 비유적으로 표현할 때 가장 적합한 설명은?",
      "options": [
        "과거 시점들로부터 전달받은 정보의 맥락을 압축하여 담고 있는 '네트워크의 메모리(기억 장치)'",
        "이미지의 RGB 채널을 저장하는 임시 캐시",
        "학습률을 동적으로 보관하는 스택 메모리",
        "출력 라벨의 정답을 미리 저장해둔 정답지"
      ],
      "answer": 0,
      "explanation": "은닉 상태 $h_t$는 시점 1부터 시점 $t$까지 들어온 모든 이전 입력들의 문맥 정보를 압축하여 보관하는 상태 벡터입니다."
    },
    {
      "id": 75,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "ox",
      "question": "소프트맥스 함수와 교차 엔트로피 손실 함수를 결합하여 역전파를 수행할 때, 소프트맥스 이전 로짓(Logit) $z_i$에 대한 손실함수 기울기는 $(\\hat{y}_i - y_i)$로 매우 깔끔하게 정리된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "수학적으로 유도하면 소프트맥스의 복잡한 미분과 로그의 미분이 서로 상쇄되어 '예측 확률 - 실제 정답 확률'이라는 직관적인 수식이 유도됩니다."
    },
    {
      "id": 76,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "ox",
      "question": "기본 RNN은 과거의 정보가 현재에 영향을 줄 수는 있지만, 양방향(Bidirectional) 처리를 하지 않는 한 미래 시점의 정보는 현재 시점에 반영할 수 없다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "단방향 RNN은 시간의 인과율($t-1 \\rightarrow t$)에 따라 순방향으로만 흐르므로 미래 문맥을 보려면 역방향 은닉층을 결합한 Bi-RNN이 필요합니다."
    },
    {
      "id": 77,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "쿨백-라이블러 발산(Kullback-Leibler Divergence, $D_{KL}(P \\parallel Q)$)과 크로스 엔트로피 $H(P, Q)$의 관계식으로 올바른 것은? (단, $H(P)$는 실제 분포의 엔트로피)",
      "options": [
        "$H(P, Q) = H(P) + D_{KL}(P \\parallel Q)$",
        "$H(P, Q) = H(P) - D_{KL}(P \\parallel Q)$",
        "$H(P, Q) = H(P) \\times D_{KL}(P \\parallel Q)$",
        "$H(P, Q) = D_{KL}(P \\parallel Q) / H(P)$"
      ],
      "answer": 0,
      "explanation": "크로스 엔트로피는 타깃의 엔트로피와 두 분포 간의 KL 발산의 합으로 구성됩니다. $P$가 고정되어 있을 때 크로스 엔트로피 최소화는 두 분포 간 KL 발산 최소화와 동치입니다."
    },
    {
      "id": 78,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "ox",
      "question": "KL 발산 $D_{KL}(P \\parallel Q)$은 항상 0 이상($\\ge 0$)이며, 두 분포 $P$와 $Q$가 완전히 일치할 때만 정확히 0이 된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "깁스의 부등식(Gibbs' inequality)에 의해 KL 발산은 항상 비음수($\\ge 0$)이며, 정보의 손실이 없을 때(두 분포가 동일할 때) 0이 됩니다."
    },
    {
      "id": 79,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "mcq",
      "question": "긴 문장에서 'The clouds are in the ...' 뒤에 'sky'를 예측하는 것과 'I grew up in France ... I speak fluent ...' 뒤에 'French'를 예측하는 것을 비교할 때 기본 RNN의 동작 설명으로 옳은 것은?",
      "options": [
        "두 경우 모두 완벽하게 예측한다.",
        "가까운 위치의 'sky'는 잘 맞추지만, 수십 단어 전의 'France' 문맥을 기억해야 하는 장기 의존성(French 예측)에서는 기울기 소실로 인해 학습하지 못한다.",
        "오히려 먼 거리의 문맥을 더 잘 기억한다.",
        "단어의 길이가 긴 단어만 기억한다."
      ],
      "answer": 1,
      "explanation": "기본 RNN은 갭(Gap)이 큰 장거리 문맥(Long-term context)을 보존하지 못하고 직전 몇 단어의 단기 문맥만 기억하는 치명적 한계가 있습니다."
    },
    {
      "id": 80,
      "subject": "algorithms",
      "topic": "Lec 5. RNN · 크로스 엔트로피",
      "type": "ox",
      "question": "순환 신경망(RNN)은 기계 번역, 음성 인식, 주가 예측, 텍스트 생성 등 데이터의 순서가 중요한 시계열/시퀀스 모델링에 적합하다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "가변적인 길이의 시퀀스를 순차적으로 처리할 수 있어 자연어 처리 및 시계열 분석의 기초 모델로 활용됩니다."
    },
    {
      "id": 81,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "1997년 호크라이터와 슈미트후버(Hochreiter & Schmidhuber)가 제안한 LSTM(Long Short-Term Memory)의 가장 핵심적인 혁신 요소는?",
      "options": [
        "은닉층을 모두 제거하고 출력층만 유지한 것",
        "기울기가 감쇄 없이 흐를 수 있는 전용 컨베이어 벨트 역할을 하는 셀 상태(Cell State)와 정보를 선택적으로 제어하는 게이트(Gate) 메커니즘을 도입한 것",
        "역전파 대신 유전 알고리즘(Genetic Algorithm)만을 사용한 것",
        "모든 활성화 함수를 선형 함수로 통일한 것"
      ],
      "answer": 1,
      "explanation": "LSTM은 덧셈 연산 기반으로 시점을 거슬러 올라가도 그래디언트가 보존되는 고속도로인 Cell State와 이를 제어하는 3대 게이트를 통해 장기의존성 문제를 해결했습니다."
    },
    {
      "id": 82,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "LSTM의 3대 게이트(Gate)에 해당하지 않는 것은?",
      "options": [
        "삭제 게이트 (Forget Gate)",
        "입력 게이트 (Input Gate)",
        "출력 게이트 (Output Gate)",
        "회귀 게이트 (Regression Gate)"
      ],
      "answer": 3,
      "explanation": "LSTM은 과거 정보 삭제를 결정하는 Forget Gate, 새 정보 저장을 결정하는 Input Gate, 출력으로 내보낼 정보를 결정하는 Output Gate로 구성됩니다."
    },
    {
      "id": 83,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "LSTM의 삭제 게이트(Forget Gate) 수식 $f_t = \\sigma(W_f [h_{t-1}, x_t] + b_f)$에서 활성화 함수로 시그모이드($\\sigma$)를 사용하는 목적은?",
      "options": [
        "출력값을 0과 1 사이로 만들어 이전 셀 상태 $C_{t-1}$의 각 정보를 몇 % 비율로 보존할지(0: 전면 삭제, 1: 완전 유지) 결정하기 위해",
        "음수 그래디언트를 증폭하기 위해",
        "출력값을 정확히 정수 0과 1로만 양자화하기 위해",
        "연산 속도를 100배 빠르게 하기 위해"
      ],
      "answer": 0,
      "explanation": "시그모이드의 출력 범위는 (0, 1)이므로 이전 기억을 얼마나 망각(0)하거나 통과(1)시킬지 비율 스위치 역할을 합니다."
    },
    {
      "id": 84,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "LSTM에서 새로운 셀 상태 $C_t$가 갱신되는 수식으로 올바른 것은? (단, $\\odot$은 원소별 곱/Hadamard product)",
      "options": [
        "$C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t$",
        "$C_t = f_t \\times C_{t-1} \\times i_t$",
        "$C_t = \\tanh(C_{t-1} + x_t)$",
        "$C_t = \\sigma(W_c C_{t-1} + b_c)$"
      ],
      "answer": 0,
      "explanation": "이전 기억을 삭제 게이트 비율로 줄인 $f_t \\odot C_{t-1}$에, 새로운 기억 후보를 입력 게이트 비율로 취한 $i_t \\odot \\tilde{C}_t$를 '더해서' 갱신합니다."
    },
    {
      "id": 85,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "LSTM에서 셀 상태 갱신 시 곱셈 연산 대신 덧셈 연산($+$)이 사용됨으로써 얻는 치명적인 수학적 이점은?",
      "options": [
        "가중치 행렬의 크기가 $1 \\times 1$로 줄어든다.",
        "BPTT 역전파 시 셀 상태에 대한 그래디언트가 행렬 곱의 반복 없이 단순 덧셈 분기를 거쳐 흐르므로 기울기 소실(Vanishing Gradient)이 극적으로 방지된다.",
        "입력 데이터의 노이즈가 100% 제거된다.",
        "소프트맥스 함수를 거치지 않고도 정답을 바로 알 수 있다."
      ],
      "answer": 1,
      "explanation": "$\\frac{\\partial C_t}{\\partial C_{t-1}} = f_t$로 가중치 행렬의 거듭제곱이 곱해지지 않고 게이트 값의 직접 전달로 이루어져 먼 과거 시점까지 그래디언트가 온전하게 보존됩니다."
    },
    {
      "id": 86,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "LSTM의 후보 셀 상태 $\\tilde{C}_t = \\tanh(W_c [h_{t-1}, x_t] + b_c)$에서 시그모이드 대신 $\\tanh$ 활성화 함수를 사용하는 이유는?",
      "options": [
        "새롭게 추가할 정보의 방향성과 크기(-1에서 1 사이)를 생성하여 셀 상태를 증가시키거나 감소시킬 수 있도록 하기 위해",
        "음수 값을 완전히 제거하기 위해",
        "기울기를 무조건 0으로 만들기 위해",
        "모든 값을 0으로 정규화하기 위해"
      ],
      "answer": 0,
      "explanation": "게이트는 통과율(0~1)을 제어하므로 시그모이드를 쓰고, 실제 상태에 더해질 새로운 정보 벡터는 양수/음수를 모두 가질 수 있는 [-1, 1] 범위의 $\\tanh$를 씁니다."
    },
    {
      "id": 87,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "조경현 교수 등이 2014년 제안한 GRU(Gated Recurrent Unit)가 LSTM과 다른 구조적 특징은?",
      "options": [
        "셀 상태(Cell State)와 은닉 상태(Hidden State)를 하나로 통합하고, 게이트를 리셋(Reset)과 업데이트(Update) 2개로 간소화하여 연산 속도를 높였다.",
        "게이트를 5개로 늘려 정확도를 높였다.",
        "활성화 함수로 스텝 함수만 사용한다.",
        "시계열 데이터를 역순으로만 처리할 수 있다."
      ],
      "answer": 0,
      "explanation": "GRU는 Cell State를 별도로 두지 않고 Hidden State로 단일화하며, Reset Gate와 Update Gate의 2개 게이트만 사용하여 파라미터 수를 줄이고 학습 속도를 향상시켰습니다."
    },
    {
      "id": 88,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "경사하강법의 세 가지 변형 중 '배치 경사하강법(BGD: Batch Gradient Descent)'의 특징으로 옳은 것은?",
      "options": [
        "한 번의 가중치 업데이트마다 전체(Total) 훈련 데이터셋 전체의 그래디언트 평균을 계산한다.",
        "데이터 1개마다 즉시 가중치를 갱신한다.",
        "학습 과정에서 무작위 노이즈가 매우 심하다.",
        "GPU 메모리를 전혀 사용하지 않는다."
      ],
      "answer": 0,
      "explanation": "BGD는 전체 데이터셋의 손실 평균을 계산하므로 그래디언트 방향이 매우 정확하고 안정적이지만, 데이터셋이 크면 1회 갱신에 엄청난 시간과 메모리가 소요됩니다."
    },
    {
      "id": 89,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "'순수 확률적 경사하강법(Pure SGD)'의 특징과 장점으로 옳은 것은?",
      "options": [
        "전체 데이터를 한꺼번에 계산하여 곡면이 매우 매끄럽다.",
        "매 훈련 샘플(1개 데이터)마다 그래디언트를 구해 즉시 가중치를 갱신하므로 매우 빠르고, 목적 함수 곡면의 요동(진동) 덕분에 얕은 로컬 미니마나 안장점을 쉽게 탈출할 수 있다.",
        "항상 전역 최적점에 한 번의 오차 없이 수렴한다.",
        "GPU의 대규모 병렬 행렬 연산 기능을 최대로 활용한다."
      ],
      "answer": 1,
      "explanation": "SGD는 샘플 1개씩 계산하므로 속도가 빠르고 확률적 노이즈가 심하게 발생하는데, 이 요동치는 특성이 로컬 미니마 탈출에 도움을 줍니다."
    },
    {
      "id": 90,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "현대 딥러닝에서 실질적인 표준으로 사용되는 '미니배치 경사하강법(Mini-batch SGD)'의 장점은?",
      "options": [
        "데이터를 1개씩만 처리하여 캐시 적중률을 극대화한다.",
        "데이터를 적절한 크기(예: 32, 64, 128, 256개)의 묶음으로 나누어 처리함으로써 GPU의 벡터화 병렬 연산을 최대한 활용하고 수렴 안정성과 로컬 미니마 탈출 능력의 균형을 이룬다.",
        "학습률을 설정할 필요가 전혀 없다.",
        "에포크 수가 무조건 1회로 고정된다."
      ],
      "answer": 1,
      "explanation": "BGD의 안정성과 하드웨어 가속 이점, SGD의 빠른 속도와 노이즈 이점을 결합한 최적의 절충안입니다."
    },
    {
      "id": 91,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "모멘텀(Momentum) 옵티마이저가 경사하강법의 진동을 억제하고 학습을 가속하는 물리적 원리는?",
      "options": [
        "매 스텝마다 이전 가중치를 0으로 리셋한다.",
        "과거 그래디언트의 이동 방향을 속도 벡터 $v$로 누적하여 마치 공이 언덕을 굴러내려갈 때의 관성(Inertia)을 모사함으로써, 진동 방향은 상쇄하고 진행 방향은 가속한다.",
        "경사가 가파를수록 브레이크를 걸어 멈춘다.",
        "데이터셋을 무작위로 삭제한다."
      ],
      "answer": 1,
      "explanation": "$v_t = \\gamma v_{t-1} + \\alpha \\nabla J(\\theta)$로 이전 속도를 관성 계수 $\\gamma$(보통 0.9)만큼 누적하여 계곡 모양의 협곡에서 지그재그 진동을 상쇄하고 빠른 수렴을 돕습니다."
    },
    {
      "id": 92,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "AdaGrad(Adaptive Gradient) 옵티마이저의 원리와 치명적인 한계는?",
      "options": [
        "원리: 자주 등장한 가중치는 학습률을 낮추고 드물게 등장한 가중치는 학습률을 높인다. / 한계: 그래디언트 제곱합이 지속적으로 누적되어 학습이 진행될수록 유효 학습률이 0에 수렴하여 조기에 학습이 완전히 멈춘다.",
        "원리: 학습률을 에포크마다 2배씩 늘린다. / 한계: 항상 발산한다.",
        "원리: 가중치를 항상 음수로 유지한다. / 한계: 양수 분류가 불가능하다.",
        "원리: 모멘텀만 사용한다. / 한계: 2차 미분이 필요하다."
      ],
      "answer": 0,
      "explanation": "AdaGrad는 $G_t = G_{t-1} + g_t^2$로 과거 모든 기울기 제곱을 계속 더하므로 $G_t$가 무한히 커져 분모가 커지면서 결국 학습이 정체되는 조기 정체 현상이 있습니다."
    },
    {
      "id": 93,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "RMSProp이 AdaGrad의 학습 정체 문제를 해결한 방법은?",
      "options": [
        "모든 과거 그래디언트를 완전히 버리고 현재 그래디언트만 사용한다.",
        "지수 이동 평균(Exponential Moving Average)을 적용하여 먼 과거의 그래디언트는 서서히 잊고 최근 그래디언트 제곱의 가중 평균만을 반영한다.",
        "학습률을 고정 상수 1.0으로 고정한다.",
        "가중치 초기화를 0으로 재설정한다."
      ],
      "answer": 1,
      "explanation": "$G_t = \\beta G_{t-1} + (1-\\beta)g_t^2$의 지수 이동 평균 감쇠 계수 $\\beta$(보통 0.9)를 사용하여 분모가 무한히 커지는 것을 방지합니다."
    },
    {
      "id": 94,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "현재 딥러닝에서 가장 널리 사용되는 Adam(Adaptive Moment Estimation) 옵티마이저의 핵심 설계는?",
      "options": [
        "모멘텀(방향성/1차 모멘트의 관성)과 RMSProp(보폭/2차 모멘트의 적응적 학습률)의 장점을 결합하고, 학습 초기 0 편향(Bias)을 수학적으로 보정한 알고리즘이다.",
        "오직 역전파 없이 순전파로만 가중치를 추정하는 알고리즘이다.",
        "모든 파라미터에 완전히 동일한 학습률을 적용하는 단순 SGD이다.",
        "경사하강법 대신 2차 도함수 행렬(Hessian)을 매번 역행렬 연산하는 알고리즘이다."
      ],
      "answer": 0,
      "explanation": "Adam은 $m_t$(1차 모멘트, 평균)와 $v_t$(2차 모멘트, 분산)를 동시에 추적하며 초기 편향 보정($\\hat{m}_t, \\hat{v}_t$)을 수행하여 가장 견고하고 뛰어난 성능을 보입니다."
    },
    {
      "id": 95,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "딥러닝에서 로컬 미니마(Local Minima) 문제를 극복하기 위한 대표적인 3대 전략으로 올바른 것은?",
      "options": [
        "1) 모멘텀을 통한 관성 부여, 2) 학습률 스케줄링(Warmup 및 Cosine Annealing), 3) 미니배치 SGD의 확률적 노이즈 활용",
        "1) 가중치를 0으로 고정, 2) 활성화 함수 제거, 3) 1개 레이어만 사용",
        "1) 배치 크기를 무한대로 설정, 2) 에포크 1회 종료, 3) 시그모이드만 사용",
        "1) 데이터셋 크기 축소, 2) 정규방정식 사용, 3) 경사하강법 비활성화"
      ],
      "answer": 0,
      "explanation": "모멘텀의 운동에너지, 확률적 미니배치의 경로 요동, 학습률을 조절하며 탐색 공간을 탈출하는 스케줄링이 복합적으로 로컬 미니마 탈출을 가능케 합니다."
    },
    {
      "id": 96,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "ox",
      "question": "배치 크기(Batch Size)가 너무 크면(예: 수만 개) 손실 곡면의 뾰족한 최적점(Sharp Minima)에 수렴하여 테스트 데이터에 대한 일반화 성능이 오히려 떨어질 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "적절히 작은 미니배치(예: 32~256)는 적절한 확률적 노이즈를 제공하여 더 넓고 평평한 최적점(Flat Minima)을 찾게 해 일반화 성능이 향상됩니다."
    },
    {
      "id": 97,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "ox",
      "question": "LSTM의 은닉 상태 $h_t$는 출력 게이트 $o_t$와 셀 상태에 $\\tanh$를 씌운 값의 원소별 곱($h_t = o_t \\odot \\tanh(C_t)$)으로 계산된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "셀 상태 $C_t$의 값을 $\\tanh$를 통해 -1~1로 조절한 뒤 출력 게이트의 비율 $o_t$만큼만 외부로 노출합니다."
    },
    {
      "id": 98,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "경사하강법 최적화 알고리즘들의 발전 계보로 시간 순서상 올바른 것은?",
      "options": [
        "Adam -> RMSProp -> Momentum -> SGD",
        "SGD -> Momentum -> AdaGrad -> RMSProp -> Adam",
        "AdaGrad -> SGD -> Adam -> Momentum",
        "RMSProp -> Adam -> SGD -> AdaGrad"
      ],
      "answer": 1,
      "explanation": "기본 SGD에서 모멘텀(관성)이 더해지고, 파라미터별 적응형 학습률(AdaGrad)의 한계를 개선한 RMSProp이 나온 뒤, 둘을 합친 Adam이 확립되었습니다."
    },
    {
      "id": 99,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "ox",
      "question": "Adam 옵티마이저의 초기 학습 단계에서 $m_0 = 0, v_0 = 0$으로 초기화되어 모멘트 추정치가 0으로 편향되는 것을 막기 위해 $\\hat{m}_t = \\frac{m_t}{1 - \\beta_1^t}$와 같이 편향 보정(Bias Correction)을 거친다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "초기에 $\\beta_1^t, \\beta_2^t$가 1에 가까워 분모가 0에 가까워지며 작은 $m_t, v_t$를 증폭시켜 초기 0 편향을 상쇄합니다."
    },
    {
      "id": 100,
      "subject": "algorithms",
      "topic": "Lec 6. LSTM · 확률적 경사하강법(SGD)",
      "type": "mcq",
      "question": "LSTM이 RNN보다 우수한 성능을 보이는 시퀀스 처리 영역에 대한 결론으로 가장 올바른 것은?",
      "options": [
        "데이터의 길이가 2개 이하인 극도로 짧은 시퀀스에만 유리하다.",
        "기울기 소실 없이 수십~수백 스텝 이전의 핵심 정보를 셀 상태에 보존할 수 있어 긴 문장의 기계 번역, 음성 인식, 장기 시계열 예측 등에서 압도적 우위를 보인다.",
        "연산량이 기본 RNN의 10%에 불과하여 모바일 CPU에서만 사용된다.",
        "오직 이미지 분류 작업에만 특화되어 있다."
      ],
      "answer": 1,
      "explanation": "LSTM은 게이트와 셀 상태 덕분에 긴 시간 지연(Long time lags)이 존재하는 시퀀스 데이터에서도 장기 기억을 유지하여 시퀀스 모델링의 새로운 장을 열었습니다."
    }
  ],
  "it": [
    {
      "id": 1,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "컴퓨터의 세대별 주요 논리 회로 소자의 발전 순서로 올바른 것은?",
      "options": [
        "진공관 -> 트랜지스터 -> 집적회로(IC) -> 고밀도/초고밀도 집적회로(LSI/VLSI)",
        "트랜지스터 -> 진공관 -> 집적회로 -> 자기코어",
        "집적회로 -> 진공관 -> 트랜지스터 -> 양자칩",
        "진공관 -> 집적회로 -> 트랜지스터 -> 마이크로프로세서"
      ],
      "answer": 0,
      "explanation": "1세대: 진공관(Vacuum Tube), 2세대: 트랜지스터(Transistor), 3세대: 집적회로(IC), 4세대 이후: LSI/VLSI로 발전했습니다."
    },
    {
      "id": 2,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "폰 노이만(John von Neumann) 구조의 가장 핵심적인 특징은?",
      "options": [
        "프로그램 명령어를 외부 플러그보드 결선으로만 입력하는 방식",
        "프로그램(명령어)과 데이터를 모두 동일한 메모리(기억장치)에 저장하고 순차적으로 읽어와 실행하는 '프로그램 내장 방식(Stored-Program Concept)'",
        "중앙처리장치(CPU) 없이 메모리 단독으로 연산을 처리하는 방식",
        "아날로그 전압의 연속적인 크기를 이용해 병렬 연산을 수행하는 구조"
      ],
      "answer": 1,
      "explanation": "폰 노이만 구조는 명령어와 데이터를 주기억장치에 함께 적재하고 프로그램 카운터(PC)를 통해 순차적으로 인출-해석-실행하는 프로그램 내장 방식입니다."
    },
    {
      "id": 3,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "폰 노이만 아키텍처에서 발생하는 전형적인 성능 한계인 '폰 노이만 병목현상(Von Neumann Bottleneck)'의 원인은?",
      "options": [
        "고속의 CPU와 상대적으로 저속인 메모리 간에 공유 버스(Bus)를 통해 명령어와 데이터를 주고받으면서 발생하는 전송 대역폭의 한계",
        "하드디스크의 회전 속도가 너무 빨라서 헤드가 손상되는 문제",
        "모니터와 그래픽 카드의 해상도 불일치",
        "트랜지스터의 발열로 인해 CPU의 전원이 차단되는 현상"
      ],
      "answer": 0,
      "explanation": "CPU 처리 속도에 비해 시스템 버스와 메모리의 대역폭이 따라가지 못해 CPU가 유휴(Idle) 상태로 메모리 응답을 기다리는 현상입니다."
    },
    {
      "id": 4,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "데이터(Data)와 정보(Information)의 개념적 차이로 가장 적절한 것은?",
      "options": [
        "데이터는 가공된 최종 지식이고, 정보는 가공되지 않은 순수 숫자이다.",
        "데이터는 현실 세계에서 수집된 가공되지 않은 순수한 사실(Raw Facts)이나 측정값이며, 정보는 이를 특정 목적에 맞게 처리·가공하여 유의미한 가치를 부여한 결과물이다.",
        "데이터와 정보는 완전히 동일한 동의어이다.",
        "정보가 모여서 데이터가 되고, 데이터가 모여 하드웨어가 된다."
      ],
      "answer": 1,
      "explanation": "데이터는 단순 사실의 나열(예: 기온 35도)이며, 정보는 의사결정에 도움이 되도록 가공된 유용한 형태(예: 폭염 주의보 발령)입니다."
    },
    {
      "id": 5,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "물리적 세계의 사물, 공간, 프로세스를 디지털 가상 공간에 1:1로 실시간 쌍둥이처럼 복제·동기화하여 시뮬레이션 및 최적화를 수행하는 기술은?",
      "options": [
        "디지털 트윈 (Digital Twin)",
        "클라우드 스토리지 (Cloud Storage)",
        "데이터 웨어하우스 (Data Warehouse)",
        "가상 머신 (Virtual Machine)"
      ],
      "answer": 0,
      "explanation": "디지털 트윈은 센서와 IoT 데이터를 바탕으로 물리적 실체를 가상 세계에 실시간 반영하고 양방향으로 제어하는 4차 산업혁명의 핵심 기술입니다."
    },
    {
      "id": 6,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "디지털 트윈(Digital Twin)의 5대 발전(성숙도) 레벨의 올바른 발전 순서는?",
      "options": [
        "묘사(Descriptive) -> 진단(Diagnostic) -> 예측(Predictive) -> 처방(Prescriptive) -> 자율(Autonomous)",
        "자율 -> 예측 -> 진단 -> 묘사 -> 처방",
        "진단 -> 묘사 -> 자율 -> 처방 -> 예측",
        "처방 -> 진단 -> 묘사 -> 자율 -> 예측"
      ],
      "answer": 0,
      "explanation": "단순 형상 복제(묘사) -> 원인 파악(진단) -> 미래 시뮬레이션(예측) -> 최적 의사결정 제시(처방) -> 사람 개입 없는 자율 운용(자율) 순으로 진화합니다."
    },
    {
      "id": 7,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "사이버 물리 시스템(CPS: Cyber-Physical Systems)에 대한 설명으로 옳은 것은?",
      "options": [
        "인터넷 연결이 차단된 순수 폐쇄망 시스템",
        "연산, 통신, 제어가 물리적 세계의 프로세스와 긴밀하게 결합되어 센서 감지와 액추에이터 제어가 실시간 피드백 루프로 작동하는 시스템",
        "오직 스마트폰 게임만을 구동하기 위한 모바일 플랫폼",
        "텍스트 문서를 PDF로 변환하는 오피스 소프트웨어"
      ],
      "answer": 1,
      "explanation": "CPS는 스마트 그리드, 자율주행, 스마트 팩토리처럼 가상 세계의 컴퓨팅 연산과 물리 세계의 기계적 작동이 유기적으로 통합된 시스템입니다."
    },
    {
      "id": 8,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "ox",
      "question": "양자 컴퓨터(Quantum Computer)는 0과 1의 비트 대신, 양자 중첩(Superposition)과 양자 얽힘(Entanglement)을 활용하는 큐비트(Qubit) 단위를 사용한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "큐비트는 0과 1의 상태를 동시에 가질 수 있어 $2^n$개의 상태를 한 번에 계산할 수 있는 초병렬 처리 능력을 제공합니다."
    },
    {
      "id": 9,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "초기 전자식 디지털 컴퓨터 중 하나로 1946년 펜실베이니아 대학에서 탄도 계산을 목적으로 개발된 18,000여 개의 진공관을 사용한 컴퓨터는?",
      "options": [
        "ENIAC (에니악)",
        "EDVAC (에드박)",
        "UNIVAC-I (유니박)",
        "애플 I"
      ],
      "answer": 0,
      "explanation": "ENIAC(Electronic Numerical Integrator and Computer)은 프로그램 내장 방식 이전의 외부 배선 결선 방식 전자식 컴퓨터입니다."
    },
    {
      "id": 10,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "에츠허르 데이크스트라(Dijkstra)의 격언이자 컴퓨터 과학의 본질을 설명하는 말로 가장 적절한 것은?",
      "options": [
        "컴퓨터 과학은 컴퓨터에 관한 학문이 아니라, 마치 천문학이 망원경에 관한 학문이 아닌 것과 같다.",
        "컴퓨터는 인간의 뇌보다 모든 면에서 항상 지능이 뛰어나다.",
        "소프트웨어는 하드웨어 없이는 단 1비트도 존재할 수 없다.",
        "인터넷의 속도는 18개월마다 2배씩 빨라진다."
      ],
      "answer": 0,
      "explanation": "컴퓨터 과학의 본질은 기계 장치(컴퓨터) 그 자체가 아니라 정보, 계산, 알고리즘, 문제 해결의 수학적 원리에 있음을 비유한 유명한 격언입니다."
    },
    {
      "id": 11,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "ox",
      "question": "하버드 구조(Harvard Architecture)는 폰 노이만 구조와 달리 명령어 메모리와 데이터 메모리의 물리적 버스를 분리하여 동시 접근을 가능하게 한 구조이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "하버드 구조는 별도의 버스를 사용하여 명령어 인출과 데이터 읽기/쓰기가 동시에 일어나므로 폰 노이만 병목을 상당 부분 완화합니다."
    },
    {
      "id": 12,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "디지털 전환(Digital Transformation, DX)의 정의로 가장 올바른 것은?",
      "options": [
        "종이 서류를 단순히 스캔하여 컴퓨터 하드디스크에 저장하는 작업",
        "디지털 기술(클라우드, AI, 빅데이터, 모바일 등)을 기업의 모든 영역에 통합하여 비즈니스 프로세스, 문화, 고객 경험을 근본적으로 혁신하는 과정",
        "모든 직원에게 최신형 데스크톱 PC를 지급하는 것",
        "기업의 모든 데이터베이스를 엑셀 파일로 통일하는 것"
      ],
      "answer": 1,
      "explanation": "DX는 단순한 전산화(Digitization)를 넘어 기술을 매개로 비즈니스 모델과 운영 전반의 패러다임을 혁신하는 전략적 변화입니다."
    },
    {
      "id": 13,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "무어의 법칙(Moore's Law)이 의미하는 바는?",
      "options": [
        "마이크로칩의 트랜지스터 집적도가 약 18~24개월마다 2배씩 증가한다는 경험적 관찰",
        "소프트웨어의 오류 수는 코드 길이에 비례해 제곱으로 증가한다.",
        "네트워크의 가치는 사용자 수의 제곱에 비례한다.",
        "인터넷 사용 요금은 매년 절반으로 줄어든다."
      ],
      "answer": 0,
      "explanation": "인텔 공동 창립자 고든 무어가 제시한 법칙으로 반도체 성능의 기하급수적 발전을 설명하는 지표입니다."
    },
    {
      "id": 14,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "ox",
      "question": "프로그램 내장 방식을 최초로 도입하여 완성된 영국의 컴퓨터는 1949년 케임브리지 대학의 EDSAC(에드삭)이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "EDSAC은 모리스 윌크스 등이 개발한 세계 최초의 실용적 프로그램 내장 방식 컴퓨터입니다."
    },
    {
      "id": 15,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "컴퓨터의 5대 주요 구성 장치로 올바른 것은?",
      "options": [
        "입력장치, 출력장치, 제어장치, 연산장치(ALU), 기억장치",
        "키보드, 마우스, 모니터, 프린터, 스피커",
        "CPU, 메인보드, 그래픽카드, 파워서플라이, 쿨러",
        "운영체제, 컴파일러, 데이터베이스, 웹브라우저, 게임"
      ],
      "answer": 0,
      "explanation": "하드웨어 5대 장치는 입력, 출력, 제어(CU), 연산(ALU), 기억(주/보조기억장치)으로 분류됩니다."
    },
    {
      "id": 16,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "ox",
      "question": "DIKW 피라미드 계층 구조는 Data(데이터) -> Information(정보) -> Knowledge(지식) -> Wisdom(지혜) 순으로 상위 가치로 발전한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "원시 데이터가 의미 있는 정보가 되고, 체계화된 지식으로 정립되며, 올바른 판단을 내리는 지혜로 발전합니다."
    },
    {
      "id": 17,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "4차 산업혁명의 주요 특징으로 세계경제포럼(WEF)에서 제시한 3대 키워드는?",
      "options": [
        "초연결성(Hyper-connectivity), 초지능성(Super-intelligence), 초융합성(Hyper-convergence)",
        "기계화, 전기화, 자동화",
        "중앙집권화, 규제화, 폐쇄화",
        "아날로그화, 저속화, 단일화"
      ],
      "answer": 0,
      "explanation": "모든 사물이 네트워크로 연결되고(초연결), 인공지능으로 지능화되며(초지능), 기술 간 경계가 허물어지는(초융합) 것이 핵심입니다."
    },
    {
      "id": 18,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "ox",
      "question": "디지털 트윈의 최고 단계인 '레벨 5(자율 단계)'에서는 인간 관리자의 실시간 개입 없이 시스템 스스로 이상을 감지하고 제어 명령을 내려 최적화를 달성한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "자율 단계는 AI와 CPS의 완전 결합으로 기계 스스로 피드백 루프를 완결하는 최상위 단계입니다."
    },
    {
      "id": 19,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "mcq",
      "question": "현대 반도체 공정이 3나노미터(nm) 이하 미세 공정으로 진입하면서 겪는 물리적 한계 현상은?",
      "options": [
        "양자 터널링(Quantum Tunneling) 현상으로 인한 누설 전류 증가 및 발열 문제",
        "웨이퍼의 무게가 너무 무거워지는 문제",
        "트랜지스터의 저항이 0으로 떨어지는 초전도 문제",
        "구리 배선이 공기 중에 증발하는 현상"
      ],
      "answer": 0,
      "explanation": "소자가 원자 몇 개 크기로 작아지면 전자가 절연막을 뚫고 지나가는 양자 터널링으로 누설 전류와 열 문제가 극대화됩니다."
    },
    {
      "id": 20,
      "subject": "it",
      "topic": "1장. 컴퓨터의 발전과 정보화사회",
      "type": "ox",
      "question": "초전도 큐비트 기반 양자 컴퓨터는 큐비트의 결맞음(Coherence) 유지를 위해 절대영도(-273.15℃)에 가까운 극저온 환경을 필요로 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "외부 열 노이즈에 의한 결어긋남(Decoherence)을 막기 위해 희석 냉동기를 사용해 mK 단위의 극저온을 유지합니다."
    },
    {
      "id": 21,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "ISO에서 제정한 OSI 7계층 참조 모델의 계층 순서가 하위 계층(1계층)부터 상위 계층(7계층)까지 올바르게 나열된 것은?",
      "options": [
        "물리 -> 데이터링크 -> 네트워크 -> 전송 -> 세션 -> 표현 -> 응용",
        "데이터링크 -> 물리 -> 전송 -> 네트워크 -> 세션 -> 표현 -> 응용",
        "물리 -> 네트워크 -> 데이터링크 -> 전송 -> 표현 -> 세션 -> 응용",
        "응용 -> 표현 -> 세션 -> 전송 -> 네트워크 -> 데이터링크 -> 물리"
      ],
      "answer": 0,
      "explanation": "1계층(Physical)부터 7계층(Application)까지: 물리-데이터링크-네트워크-전송-세션-표현-응용 순입니다."
    },
    {
      "id": 22,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "OSI 7계층의 계층별 프로토콜 데이터 단위(PDU: Protocol Data Unit)가 올바르게 짝지어진 것은?",
      "options": [
        "1계층: 비트(Bit), 2계층: 프레임(Frame), 3계층: 패킷(Packet), 4계층: 세그먼트(Segment)",
        "1계층: 프레임, 2계층: 패킷, 3계층: 세그먼트, 4계층: 비트",
        "1계층: 세그먼트, 2계층: 비트, 3계층: 메시지, 4계층: 블록",
        "1계층: 패킷, 2계층: 세그먼트, 3계층: 프레임, 4계층: 데이터"
      ],
      "answer": 0,
      "explanation": "물리: 비트, 데이터링크: 프레임, 네트워크: 패킷/데이터그램, 전송: 세그먼트/데이터그램, 응용: 메시지/데이터입니다."
    },
    {
      "id": 23,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "OSI 모델의 제3계층(네트워크 계층)의 주된 역할과 대표적인 장비는?",
      "options": [
        "물리적 신호의 증폭 / 리피터",
        "논리적 IP 주소를 기반으로 출발지에서 목적지까지 최적의 경로를 결정하는 라우팅(Routing) / 라우터(Router)",
        "동일 네트워크 내에서 MAC 주소를 이용한 프레임 전송 / L2 스위치",
        "데이터의 암호화 및 압축 변환 / 게이트웨이"
      ],
      "answer": 1,
      "explanation": "3계층은 논리적 주소(IP) 체계와 라우팅 프로토콜(OSPF, BGP)을 이용해 패킷의 종단 간 경로를 결정하며 라우터가 핵심 장비입니다."
    },
    {
      "id": 24,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "전송 계층(Transport Layer)의 TCP(Transmission Control Protocol)가 제공하는 핵심 기능이 아닌 것은?",
      "options": [
        "3-Way Handshake를 통한 신뢰성 있는 연결 지향적 통신",
        "흐름 제어(Flow Control - 슬라이딩 윈도우) 및 혼잡 제어(Congestion Control)",
        "패킷의 손실 시 재전송 및 순서 번호(Sequence Number)를 통한 순서 보장",
        "광케이블의 빛 신호를 전기 신호로 물리적 변환"
      ],
      "answer": 3,
      "explanation": "광신호와 전기신호 변환은 1계층(물리 계층)의 역할이며, TCP는 4계층에서 종단 간 신뢰성 있는 데이터 스트림 전달을 책임집니다."
    },
    {
      "id": 25,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "UDP(User Datagram Protocol)가 TCP와 구별되는 특징으로 옳은 것은?",
      "options": [
        "연결 설정(Handshake)이 없고 확인 응답(ACK)을 기다리지 않아 오버헤드가 적고 전송 속도가 빠르며, 실시간 스트리밍이나 DNS에 적합하다.",
        "데이터 손실 시 100% 무조건 재전송을 보장한다.",
        "항상 패킷의 수신 순서를 엄격하게 재조립한다.",
        "TCP보다 헤더의 크기가 5배 더 크다."
      ],
      "answer": 0,
      "explanation": "UDP는 비연결형, 비신뢰성, 체크섬 기반 최소 제어 프로토콜로 지연에 민감한 실시간 멀티미디어, 음성 통화(VoIP), DNS 등에 쓰입니다."
    },
    {
      "id": 26,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "네트워크 토폴로지 중 중앙 집중형 노드(스위치/허브)에 모든 단말 노드가 1:1로 연결되는 구조로, 단말 하나가 고장 나도 전체 네트워크에 영향이 없지만 중앙 노드 고장 시 전체가 마비되는 형태는?",
      "options": [
        "스타(성형, Star) 토폴로지",
        "버스(Bus) 토폴로지",
        "링(Ring) 토폴로지",
        "메시(그물형, Mesh) 토폴로지"
      ],
      "answer": 0,
      "explanation": "스타형은 오늘날 LAN 환경의 지배적인 구조로, 관리가 쉽고 장애 격리가 우수하지만 중앙 스위치가 단일 장애점(SPOF)이 될 수 있습니다."
    },
    {
      "id": 27,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "모든 노드가 서로 1:1로 직접 연결되는 완전 메시(Full Mesh) 토폴로지에서 노드의 수가 $n$개일 때 필요한 총 링크(선로)의 수는?",
      "options": [
        "$n$",
        "$n - 1$",
        "$\\frac{n(n - 1)}{2}$",
        "$n^2$"
      ],
      "answer": 2,
      "explanation": "$n$개의 노드 중 2개를 고르는 조합의 수인 $_nC_2 = \\frac{n(n-1)}{2}$개의 회선이 필요하여 신뢰성은 최고지만 비용이 매우 큽니다."
    },
    {
      "id": 28,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "유선 이더넷(IEEE 802.3)에서 공유 매체 충돌을 방지하고 제어하기 위해 전통적으로 사용된 매체 접근 제어 방식은?",
      "options": [
        "CSMA/CD (Carrier Sense Multiple Access with Collision Detection)",
        "CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)",
        "토큰 링 (Token Ring)",
        "시분할 다중화 (TDM)"
      ],
      "answer": 0,
      "explanation": "CSMA/CD는 통신망에 신호가 있는지 감지(Carrier Sense)하고, 누구나 전송(Multiple Access)하며, 충돌이 감지되면(Collision Detection) 즉시 잼 신호를 보내고 무작위 시간(Backoff) 대기 후 재전송합니다."
    },
    {
      "id": 29,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "무선 LAN(Wi-Fi, IEEE 802.11)에서 유선과 달리 충돌 감지(CD)가 어렵기 때문에 '충돌 회피' 방식을 사용하는 매체 접근 제어 프로토콜은?",
      "options": [
        "CSMA/CA",
        "ALOHA",
        "CDMA",
        "FDDI"
      ],
      "answer": 0,
      "explanation": "무선 환경에서는 송신 중 자신의 신호가 너무 강해 충돌을 감지하기 어려우므로(Hidden Node 문제 등), 사전에 RTS/CTS 프레임과 임의 백오프를 이용하는 충돌 회피(CSMA/CA)를 씁니다."
    },
    {
      "id": 30,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "패킷 교환(Packet Switching) 방식이 기존의 회선 교환(Circuit Switching) 방식보다 인터넷에 적합한 가장 큰 이유는?",
      "options": [
        "통신 전에 물리적 전용 경로를 독점적으로 설정하여 100% 대역폭을 예약하기 때문",
        "데이터를 패킷 단위로 쪼개어 망의 회선들을 여러 사용자가 시분할 다중화하여 공유하므로 대역폭 이용 효율이 극대화되기 때문",
        "패킷의 크기가 무제한으로 크기 때문",
        "라우터가 전혀 필요 없기 때문"
      ],
      "answer": 1,
      "explanation": "회선 교환은 통화 중이 아니어도 회선을 독점하지만, 패킷 교환은 트래픽이 있을 때만 패킷을 전송하여 망 자원을 통계적 다중화로 극대화합니다."
    },
    {
      "id": 31,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "ox",
      "question": "2계층 스위치(L2 Switch)는 수신한 프레임의 목적지 MAC 주소를 보고 특정 포트로만 포워딩하므로 허브(Hub)와 달리 충돌 도메인(Collision Domain)을 포트별로 분리한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "허브는 모든 포트로 브로드캐스트하지만 스위치는 MAC 주소 학습(MAC Address Table)을 통해 포트별로 충돌 도메인을 격리합니다."
    },
    {
      "id": 32,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "TCP의 연결 수립(Connection Establishment) 과정인 3-Way Handshake의 순서로 올바른 것은?",
      "options": [
        "SYN -> SYN + ACK -> ACK",
        "ACK -> SYN -> FIN",
        "SYN -> FIN -> ACK",
        "DATA -> ACK -> RST"
      ],
      "answer": 0,
      "explanation": "클라이언트가 SYN 송신 -> 서버가 수신 확인(ACK)과 자신의 SYN을 묶어 송신 -> 클라이언트가 ACK 송신 순으로 3단계 연결이 수립됩니다."
    },
    {
      "id": 33,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "TCP의 정상적인 연결 해제(Connection Teardown) 과정에서 교환되는 메시지 단계(4-Way Handshake)는?",
      "options": [
        "FIN -> ACK -> FIN -> ACK",
        "SYN -> ACK -> SYN -> ACK",
        "RST -> RST -> RST -> RST",
        "FIN -> SYN -> FIN -> SYN"
      ],
      "answer": 0,
      "explanation": "송신측 FIN -> 수신측 ACK -> (수신측 잔여 데이터 전송 후) 수신측 FIN -> 송신측 ACK 및 TIME_WAIT 순으로 종료됩니다."
    },
    {
      "id": 34,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "ox",
      "question": "ARP(Address Resolution Protocol)는 논리적인 3계층 IP 주소를 바탕으로 물리적인 2계층 MAC(하드웨어) 주소를 알아내는 프로토콜이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "동일 서브넷 내에서 IP를 가진 목적지의 물리적 MAC 주소를 찾기 위해 브로드캐스트 질의를 수행합니다."
    },
    {
      "id": 35,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "네트워크 계층의 패킷이 라우터를 거치며 무한 루프를 도는 것을 방지하기 위해 IPv4 헤더에 포함된 카운터 필드는?",
      "options": [
        "TTL (Time to Live)",
        "Checksum",
        "TOS (Type of Service)",
        "Identification"
      ],
      "answer": 0,
      "explanation": "TTL은 라우터를 하나(1 홉) 통과할 때마다 1씩 감소하며, 0이 되면 라우터가 패킷을 폐기하고 송신자에게 ICMP Time Exceeded를 전송합니다."
    },
    {
      "id": 36,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "ox",
      "question": "OSI 7계층에서 6계층인 표현 계층(Presentation Layer)의 주요 역할은 데이터의 구문 변환, 암호화/복호화, 압축이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "표현 계층은 상위 응용 계층이 이해할 수 있도록 데이터 형식(ASCII, UTF-8, 인코딩, SSL/TLS 암호화 등)을 표준화합니다."
    },
    {
      "id": 37,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "전송 계층(4계층)에서 송신측의 전송 속도가 수신측의 버퍼 처리 속도보다 빨라 버퍼 오버플로우가 일어나는 것을 방지하는 기법은?",
      "options": [
        "흐름 제어 (Flow Control)",
        "라우팅 제어 (Routing Control)",
        "암호화 제어 (Cipher Control)",
        "도메인 제어 (Domain Control)"
      ],
      "answer": 0,
      "explanation": "수신측이 자신의 수신 윈도우 크기(rwnd)를 송신측에 알려 전송량을 조절하는 메커니즘을 흐름 제어라고 합니다."
    },
    {
      "id": 38,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "ox",
      "question": "라우터(Router)는 브로드캐스트 도메인(Broadcast Domain)을 물리적·논리적으로 분리하는 장비이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "스위치는 브로드캐스트 패킷을 모든 포트로 전달하지만, 라우터는 브로드캐스트 패킷을 차단하여 서브넷 간 브로드캐스트 폭풍을 방지합니다."
    },
    {
      "id": 39,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "mcq",
      "question": "네트워크 전송 매체 중 외부 전자기 노이즈(EMI)의 간섭을 전혀 받지 않고 가장 높은 대역폭과 장거리 전송을 제공하는 매체는?",
      "options": [
        "UTP 케이블 (Unshielded Twisted Pair)",
        "동축 케이블 (Coaxial Cable)",
        "광케이블 (Optical Fiber Cable)",
        "전력선 (PLC)"
      ],
      "answer": 2,
      "explanation": "광케이블은 전자기파가 아닌 전반사 원리의 빛 신호를 코어 속으로 통과시키므로 전자기 유도 노이즈가 전혀 없습니다."
    },
    {
      "id": 40,
      "subject": "it",
      "topic": "5장. 정보통신과 컴퓨터 네트워크",
      "type": "ox",
      "question": "TCP/IP 4계층 모델은 OSI 7계층의 5(세션), 6(표현), 7(응용) 계층을 하나의 '응용 계층(Application Layer)'으로 통합하여 구성한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "TCP/IP는 네트워크 인터페이스 - 인터넷 - 전송 - 응용의 실용적인 4계층 구조를 가집니다."
    },
    {
      "id": 41,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "IPv4와 IPv6 주소 체계의 비트 수 비교로 올바른 것은?",
      "options": [
        "IPv4: 16비트, IPv6: 32비트",
        "IPv4: 32비트 (약 43억 개), IPv6: 128비트 (사실상 무제한)",
        "IPv4: 64비트, IPv6: 256비트",
        "IPv4: 128비트, IPv6: 512비트"
      ],
      "answer": 1,
      "explanation": "IPv4는 32비트 주소로 주소 고갈 문제가 발생하여, 이를 근본적으로 해결하기 위해 128비트의 방대한 주소 공간을 갖는 IPv6가 제정되었습니다."
    },
    {
      "id": 42,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "도메인 네임(예: www.example.com)을 컴퓨터가 이해할 수 있는 IP 주소로 상호 변환해주는 분산 계층 데이터베이스 시스템은?",
      "options": [
        "DHCP",
        "DNS (Domain Name System)",
        "SNMP",
        "FTP"
      ],
      "answer": 1,
      "explanation": "DNS는 루트 네임서버, TLD 네임서버, 권한 네임서버로 이어지는 계층적 구조를 통해 호스트 이름을 IP 주소로 해석(Resolution)합니다."
    },
    {
      "id": 43,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "HTTP 1.1 프로토콜에서 매 요청마다 TCP 연결을 새로 맺지 않고 동일한 연결을 유지하여 재사용하는 기능은?",
      "options": [
        "Persistent Connection (Keep-Alive)",
        "Stateless Connection",
        "Three-way Handshake",
        "UDP Tunneling"
      ],
      "answer": 0,
      "explanation": "HTTP 1.0의 매 요청마다 연결 수립/해제 오버헤드를 개선하기 위해 HTTP 1.1에서는 Keep-Alive 헤더를 기본으로 지속 연결을 지원합니다."
    },
    {
      "id": 44,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "HTTP/2 프로토콜이 HTTP 1.1의 HOL(Head-of-Line) 블로킹 문제를 해결하기 위해 도입한 핵심 기술은?",
      "options": [
        "단일 TCP 연결 위에서 여러 개의 독립적인 양방향 프레임을 섞어서 전송하는 멀티플렉싱(Multiplexing)",
        "모든 통신을 TCP 대신 UDP로 완전 전환",
        "이미지와 텍스트 전송을 완전히 금지",
        "쿠키와 세션을 영구 삭제"
      ],
      "answer": 0,
      "explanation": "HTTP/2는 바이너리 프레이밍 계층과 멀티플렉싱을 통해 하나의 TCP 스트림 안에서 여러 요청과 응답을 병렬로 섞어서 주고받습니다."
    },
    {
      "id": 45,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "HTTP/3 프로토콜이 TCP 대신 UDP 기반의 구글 QUIC(Quick UDP Internet Connections) 전송 프로토콜을 사용하는 결정적인 이유는?",
      "options": [
        "TCP 레벨에서 발생하는 패킷 손실 시의 전송 계층 HOL 블로킹을 근본적으로 제거하고, 연결 수립 지연(0-RTT)을 달성하기 위해",
        "보안 암호화 기능을 완전히 제거하여 속도를 올리기 위해",
        "웹 브라우저의 메모리 사용량을 줄이기 위해",
        "모든 웹사이트를 텍스트 전용으로 변환하기 위해"
      ],
      "answer": 0,
      "explanation": "TCP는 패킷 하나가 유실되면 스트림 전체가 멈추지만, QUIC은 UDP 위에서 독립 스트림을 관리하여 다른 스트림이 영향받지 않고 첫 연결부터 암호화 핸드셰이크를 1단계로 단축합니다."
    },
    {
      "id": 46,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "클라우드 컴퓨팅의 3대 서비스 모델(SPI) 중 사용자가 운영체제(OS), 런타임 등을 직접 관리할 필요 없이 애플리케이션 개발 및 배포 환경만을 제공받는 모델은?",
      "options": [
        "IaaS (Infrastructure as a Service)",
        "PaaS (Platform as a Service)",
        "SaaS (Software as a Service)",
        "DaaS (Desktop as a Service)"
      ],
      "answer": 1,
      "explanation": "IaaS는 가상 서버/스토리지 제공, PaaS는 개발 플랫폼(OS, DB, 런타임 환경) 제공, SaaS는 완성된 완제품 소프트웨어를 클라우드로 제공합니다."
    },
    {
      "id": 47,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "다음 클라우드 서비스 중 SaaS(Software as a Service)의 대표적인 사례는?",
      "options": [
        "Google Workspace (Gmail, 구글 독스) 및 Microsoft 365",
        "AWS EC2 가상 머신",
        "AWS S3 원시 스토리지",
        "물리적 IDC 서버 랙"
      ],
      "answer": 0,
      "explanation": "웹 브라우저만으로 즉시 사용할 수 있는 완성형 소프트웨어 서비스가 SaaS입니다."
    },
    {
      "id": 48,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "마이크로서비스 아키텍처(MSA: Microservices Architecture)의 특징과 장점으로 옳은 것은?",
      "options": [
        "단일 거대한 코드베이스로 작성되어 모든 기능이 동일한 프로세스 안에서 실행된다.",
        "애플리케이션을 작고 독립적으로 배포 가능한 서비스 단위로 분할하여, 특정 서비스 장애의 전체 확산을 막고 서비스별 독립적 스케일아웃 및 기술 스택 선정이 가능하다.",
        "네트워크 통신 비용이 전혀 발생하지 않는다.",
        "데이터베이스를 모든 서비스가 무조건 단 1개로 단일화하여 공유한다."
      ],
      "answer": 1,
      "explanation": "MSA는 비즈니스 도메인 단위로 서비스를 격리하여 개발 민첩성, 독립적 배포, 장애 격리(Fault Tolerance)를 극대화합니다."
    },
    {
      "id": 49,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "MSA 환경에서 동적으로 생성·삭제되는 수많은 마이크로서비스 인스턴스의 IP와 포트 번호를 등록하고 검색할 수 있게 해주는 컴포넌트는?",
      "options": [
        "서비스 디스커버리 (Service Discovery, 예: Netflix Eureka)",
        "컴파일러",
        "방화벽",
        "웹 크롤러"
      ],
      "answer": 0,
      "explanation": "클라우드 환경에서 오토스케일링 등으로 인스턴스 IP가 동적으로 바뀔 때 서비스 디스커버리가 서비스 레지스트리 역할을 합니다."
    },
    {
      "id": 50,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "MSA 구조에서 외부 클라이언트의 모든 요청을 단일 진입점에서 받아 인증, 인가, 라우팅, 속도 제한, 로깅을 일괄 처리하는 패턴은?",
      "options": [
        "API Gateway 패턴",
        "싱글톤 패턴",
        "팩토리 메서드 패턴",
        "옵저버 패턴"
      ],
      "answer": 0,
      "explanation": "API Gateway는 내부 마이크로서비스의 복잡성을 외부로부터 숨기고 보안, 모니터링, 라우팅을 중앙에서 통합 처리하는 단일 접점입니다."
    },
    {
      "id": 51,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "REST(Representational State Transfer) 아키텍처에서 자원(Resource)에 대한 생성(Create) 요청 시 표준적으로 권장되는 HTTP 메서드는?",
      "options": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      "answer": 1,
      "explanation": "REST CRUD 매핑: Create -> POST, Read -> GET, Update -> PUT/PATCH, Delete -> DELETE입니다."
    },
    {
      "id": 52,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "ox",
      "question": "RESTful API의 핵심 원칙 중 'Stateless(무상태성)'는 서버가 클라이언트의 이전 상태(세션 등)를 저장하지 않고, 모든 요청이 그 자체로 처리에 필요한 모든 정보를 포함해야 함을 의미한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "서버가 클라이언트의 상태를 보관하지 않으므로 서버의 확장성(Scalability)과 로드밸런싱이 매우 용이해집니다."
    },
    {
      "id": 53,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "서브넷 마스크 `255.255.255.0` (CIDR 표기 `/24`) 환경에서 호스트에 할당 가능한 최대 IP 주소의 개수는?",
      "options": [
        "256개",
        "254개",
        "255개",
        "128개"
      ],
      "answer": 1,
      "explanation": "호스트 비트가 8비트이므로 $2^8 = 256$개이나, 네트워크 주소(모두 0)와 브로드캐스트 주소(모두 1)의 2개를 제외하므로 실제 할당 가능 주소는 254개입니다."
    },
    {
      "id": 54,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "ox",
      "question": "DHCP(Dynamic Host Configuration Protocol)는 호스트가 부팅될 때 IP 주소, 서브넷 마스크, 기본 게이트웨이, DNS 서버 정보를 자동으로 할당해주는 프로토콜이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "네트워크 관리자가 일일이 수동 설정하지 않고 임대(Lease) 방식으로 IP 환경을 자동 구성합니다."
    },
    {
      "id": 55,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "사설 IP(Private IP) 대역을 공인 IP(Public IP)로 변환하여 인터넷 접속을 가능하게 하고 IPv4 주소 부족을 완화하는 핵심 기술은?",
      "options": [
        "NAT / NAPT (Network Address Translation)",
        "DNS",
        "VLAN",
        "BGP"
      ],
      "answer": 0,
      "explanation": "NAT(공유기 등)는 내부 네트워크의 사설 IP들을 소수의 공인 IP와 포트 번호 조합으로 변환하여 통신합니다."
    },
    {
      "id": 56,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "ox",
      "question": "HTTPS는 기본 HTTP 통신에 SSL/TLS 암호화 계층을 추가하여 데이터의 기밀성, 무결성, 서버 인증을 보장하는 보안 프로토콜이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "기본 포트 443을 사용하며 대칭키와 비대칭키의 하이브리드 암호화를 통해 통신을 보호합니다."
    },
    {
      "id": 57,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "넷플릭스 유레카(Eureka)와 결합하여 클라이언트 측에서 서비스 인스턴스들의 부하를 분산(Load Balancing)해주는 라이브러리는?",
      "options": [
        "Netflix Ribbon",
        "Apache Tomcat",
        "Docker Swarm",
        "Kubernetes Kubelet"
      ],
      "answer": 0,
      "explanation": "Ribbon은 클라이언트 측 로드밸런서(Client-side Load Balancer)로 레지스트리에서 인스턴스 목록을 받아 라운드로빈 등으로 분산 호출합니다."
    },
    {
      "id": 58,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "ox",
      "question": "모놀리식(Monolithic) 아키텍처는 초기 개발과 테스트가 단순하고 배포가 한 번에 이루어지는 장점이 있지만, 시스템이 비대해지면 작은 수정에도 전체를 재배포해야 하는 단점이 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "단일 아티팩트로 묶여 있어 부분적 확장이 어렵고 빌드 및 배포 시간이 기하급수적으로 늘어납니다."
    },
    {
      "id": 59,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "mcq",
      "question": "HTTP 상태 코드(Status Code) 404가 의미하는 표준 응답은?",
      "options": [
        "요청이 성공적으로 처리됨 (OK)",
        "클라이언트가 요청한 리소스를 서버에서 찾을 수 없음 (Not Found)",
        "서버 내부 오류 (Internal Server Error)",
        "접근 권한이 없음 (Forbidden)"
      ],
      "answer": 1,
      "explanation": "200: 성공, 400: 잘못된 요청, 401: 인증 필요, 403: 권한 없음, 404: 리소스 없음, 500: 서버 내부 에러입니다."
    },
    {
      "id": 60,
      "subject": "it",
      "topic": "6장. 인터넷과 웹 / 클라우드",
      "type": "ox",
      "question": "컨테이너 기술인 도커(Docker)는 게스트 OS를 포함하는 가상 머신(VM)과 달리 호스트의 OS 커널을 공유하므로 훨씬 가볍고 부팅 속도가 빠르다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "프로세스 격리 기술(네임스페이스, cgroups)을 활용하여 OS 수준의 중복을 배제하므로 오버헤드가 극히 적습니다."
    },
    {
      "id": 61,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "멀티미디어(Multimedia)의 4대 기본 구성 특성으로 올바른 것은?",
      "options": [
        "디지털화(Digitalization), 쌍방향성(Interactivity), 비선형성(Non-linearity), 통합성(Integration)",
        "아날로그화, 일방향성, 선형성, 분리성",
        "고비용성, 폐쇄성, 단일성, 보안성",
        "하드웨어 종속성, 불변성, 저용량성, 텍스트 전용"
      ],
      "answer": 0,
      "explanation": "모든 정보가 0과 1로 변환되고(디지털화), 사용자와 상호작용하며(쌍방향), 하이퍼링크처럼 비순차적 탐색이 가능하고(비선형), 다양한 매체가 결합(통합성)됩니다."
    },
    {
      "id": 62,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "아날로그 오디오 신호를 디지털 신호로 변환하는 3단계 과정의 순서로 올바른 것은?",
      "options": [
        "표본화(Sampling) -> 양자화(Quantization) -> 부호화(Encoding)",
        "부호화 -> 양자화 -> 표본화",
        "양자화 -> 표본화 -> 복호화",
        "압축 -> 복원 -> 출력"
      ],
      "answer": 0,
      "explanation": "연속 신호를 일정 시간 간격으로 추출(표본화)하고, 추출된 진폭을 이산적인 대표값으로 근사(양자화)한 뒤, 0과 1의 이진수로 변환(부호화)합니다."
    },
    {
      "id": 63,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "나이퀴스트-섀넌 표본화 정리(Nyquist Sampling Theorem)의 핵심 내용은?",
      "options": [
        "신호의 최대 주파수 성분이 $f_{max}$일 때, 원 신호를 왜곡 없이 완벽히 복원하기 위해서는 최소 $2 f_{max}$ 이상의 빈도로 표본화(Sampling Rate)해야 한다.",
        "표본화율은 주파수의 절반 이하로 줄여야 한다.",
        "오디오 데이터는 압축하지 않고 전송해야만 손실이 없다.",
        "인간의 청각은 20kHz 이상의 초음파만 들을 수 있다."
      ],
      "answer": 0,
      "explanation": "가청 주파수 상한이 약 20kHz이므로, 표준 오디오 CD의 샘플링 레이트는 20kHz의 2배를 상회하는 44.1kHz로 설정되어 있습니다."
    },
    {
      "id": 64,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "무손실 압축(Lossless Compression)과 손실 압축(Lossy Compression)에 대한 설명으로 옳은 것은?",
      "options": [
        "무손실 압축은 압축률이 극도로 높지만 원본 복원이 영구히 불가능하다.",
        "무손실 압축은 압축 해제 시 원본 데이터와 100% 비트 단위로 동일하게 복원(ZIP, PNG 등)되며, 손실 압축은 인간의 감각이 눈치채지 못하는 세부 정보를 일부 버려 압축률을 극대화(JPEG, MP3 등)한다.",
        "텍스트 파일과 실행 프로그램(.exe)은 반드시 손실 압축을 사용해야 한다.",
        "손실 압축은 압축을 반복할수록 화질이 점진적으로 향상된다."
      ],
      "answer": 1,
      "explanation": "프로그램이나 문서는 비트 오류가 치명적이므로 무손실 압축을 써야 하고, 영상/음향은 고압축을 위해 심리음향/시각 모델 기반 손실 압축을 씁니다."
    },
    {
      "id": 65,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "출현 빈도가 높은 문자에는 짧은 비트 코드를, 빈도가 낮은 문자에는 긴 비트 코드를 할당하는 가변 길이 무손실 압축 알고리즘은?",
      "options": [
        "허프만 코딩 (Huffman Coding)",
        "이산 코사인 변환 (DCT)",
        "양자화 (Quantization)",
        "프레임 간 예측"
      ],
      "answer": 0,
      "explanation": "엔트로피 기반 접두어 부호(Prefix Code)를 생성하는 대표적인 탐욕 알고리즘 기반 무손실 압축 기법입니다."
    },
    {
      "id": 66,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "정지 영상 압축 표준인 JPEG 알고리즘에서 공간 도메인의 픽셀 블록($8 \\times 8$)을 주파수 도메인으로 변환하는 데 사용되는 핵심 수학적 변환은?",
      "options": [
        "이산 코사인 변환 (DCT: Discrete Cosine Transform)",
        "고속 푸리에 역변환",
        "라플라스 변환",
        "가우시안 필터링"
      ],
      "answer": 0,
      "explanation": "DCT를 통해 인간의 눈이 민감한 저주파 성분은 좌상단에 모으고, 둔감한 고주파 성분은 우하단에 모은 뒤 고주파 성분을 강하게 양자화하여 압축합니다."
    },
    {
      "id": 67,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "컴퓨터 그래픽스의 두 가지 이미지 표현 방식인 비트맵(Bitmap)과 벡터(Vector)에 대한 설명으로 옳은 것은?",
      "options": [
        "비트맵은 점(픽셀)들의 2차원 배열로 정밀한 사진 표현에 적합하나 확대 시 계단 현상(깨짐)이 생기고, 벡터는 수학적 함수(선, 곡선)로 표현되어 아무리 확대해도 깨지지 않는다.",
        "벡터는 확대할수록 픽셀이 크게 깨지는 단점이 있다.",
        "비트맵의 대표 포맷은 SVG이고, 벡터의 대표 포맷은 JPG이다.",
        "비트맵은 수식으로만 이미지를 렌더링한다."
      ],
      "answer": 0,
      "explanation": "비트맵(Raster)은 픽셀 격자 기반(JPEG, PNG), 벡터는 수학적 기하 오브젝트 기반(SVG, AI)입니다."
    },
    {
      "id": 68,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "동영상 압축(MPEG, H.264 등)에서 연속된 프레임 간의 시간적 중복성(Temporal Redundancy)을 제거하기 위해 사용하는 기술은?",
      "options": [
        "모션 추정 및 움직임 보상 (Motion Estimation & Compensation)",
        "허프만 트리 생성",
        "오디오 샘플링",
        "알파 채널 블렌딩"
      ],
      "answer": 0,
      "explanation": "이전 프레임과 현재 프레임 사이에서 물체가 이동한 벡터(모션 벡터)만을 찾아내어 그 차이(Residual)만을 전송함으로써 용량을 대폭 줄입니다."
    },
    {
      "id": 69,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "가상현실(VR), 증강현실(AR), 혼합현실(MR)의 개념 구분이 올바르게 된 것은?",
      "options": [
        "VR은 현실을 100% 차단한 완전한 컴퓨터 가상 환경, AR은 실제 현실 배경 위에 가상 객체를 덧씌우는 환경, MR은 현실과 가상이 물리 법칙에 따라 상호작용하도록 융합된 환경이다.",
        "VR은 안경 없이 스마트폰으로만 보는 환경이다.",
        "AR은 인간의 뇌파를 직접 조작하는 기술이다.",
        "MR은 오직 오디오 신호만을 증폭하는 기술이다."
      ],
      "answer": 0,
      "explanation": "VR(Virtual Reality)은 몰입형 가상 공간, AR(Augmented Reality)은 현실 위의 디지털 오버레이, MR(Mixed Reality)은 현실과 가상의 실시간 상호작용 융합입니다."
    },
    {
      "id": 70,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "미국 가속화연구재단(ASF)이 분류한 메타버스(Metaverse)의 4대 영역으로 올바른 것은?",
      "options": [
        "증강현실(Augmented Reality), 라이프로깅(Lifelogging), 거울세계(Mirror Worlds), 가상세계(Virtual Worlds)",
        "게임, 소설, 영화, 음악",
        "인터넷, 인트라넷, 엑스트라넷, 다크웹",
        "클라우드, 엣지, 포그, 센서"
      ],
      "answer": 0,
      "explanation": "현실-가상 축과 내적-외적 축의 교차로 증강현실, 라이프로깅(SNS), 거울세계(구글어스), 가상세계(로블록스)로 분류됩니다."
    },
    {
      "id": 71,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "ox",
      "question": "H.265(HEVC) 동영상 압축 코덱은 이전 표준인 H.264(AVC)에 비해 대략 동일 화질 기준 약 50% 수준의 비트레이트(용량 절감)를 달성한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "가변 크기 코딩 트리 유닛(CTU)과 고도화된 인트라/인터 예측을 통해 4K/8K 초고화질 영상 전송의 표준으로 자리잡았습니다."
    },
    {
      "id": 72,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "오디오 데이터에서 16비트 양자화(Quantization)를 적용할 때 표현할 수 있는 진폭의 단계 수는?",
      "options": [
        "256단계",
        "1,024단계",
        "65,536단계 ($2^{16}$)",
        "16단계"
      ],
      "answer": 2,
      "explanation": "$2^{16} = 65,536$개의 세밀한 전압 레벨로 양자화하여 약 96dB의 다이내믹 레인지(S/N 비)를 제공합니다."
    },
    {
      "id": 73,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "ox",
      "question": "빛의 3원색을 이용하는 가산 혼합 모델은 RGB(Red, Green, Blue) 모델이고, 인쇄 및 잉크의 감산 혼합 모델은 CMYK(Cyan, Magenta, Yellow, Black) 모델이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "모니터 등 발광체는 빛을 더할수록 밝아지는 RGB 가산 혼합을, 인쇄물은 빛을 흡수하는 CMYK 감산 혼합을 씁니다."
    },
    {
      "id": 74,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "동영상 프레임의 3대 유형(I, P, B 프레임) 중 다른 프레임의 참조 없이 자체 화면의 정보만으로 독립적으로 압축·복원되는 프레임은?",
      "options": [
        "I-프레임 (Intra-coded frame)",
        "P-프레임 (Predictive frame)",
        "B-프레임 (Bi-directional frame)",
        "D-프레임"
      ],
      "answer": 0,
      "explanation": "I-프레임은 정지 영상(JPEG 유사)처럼 단독 압축되어 임의 접근(Seek)의 기준점(Keyframe)이 됩니다."
    },
    {
      "id": 75,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "ox",
      "question": "B-프레임(양방향 예측 프레임)은 시간상 이전 프레임과 이후(미래) 프레임의 정보를 양방향으로 모두 참조하여 압축률이 가장 높다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "과거와 미래 프레임을 모두 참조하므로 디코딩 순서가 재생 순서와 달라지지만 최고의 압축 효율을 냅니다."
    },
    {
      "id": 76,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "반복되는 데이터의 길이를 세어서 압축하는 방식으로, 예를 들어 `AAAAABBBCC`를 `A5B3C2`로 줄이는 무손실 압축 기법은?",
      "options": [
        "런렝스 부호화 (RLE: Run-Length Encoding)",
        "허프만 코딩",
        "산술 부호화",
        "Lempel-Ziv"
      ],
      "answer": 0,
      "explanation": "연속된 동일 심볼의 반복 횟수(Run-length)를 기록하는 가장 직관적인 기초 무손실 압축 기법입니다."
    },
    {
      "id": 77,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "ox",
      "question": "MP3 오디오 압축은 인간의 귀가 감지하지 못하는 주파수나 큰 소리에 묻혀 들리지 않는 소리를 제거하는 '청각 심리음향 모델(Psychoacoustic Model)'을 활용한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "동시 마스킹(Simultaneous Masking)과 시간 마스킹을 활용해 들리지 않는 신호를 과감히 버려 용량을 1/10 수준으로 압축합니다."
    },
    {
      "id": 78,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "초당 30프레임, 가로 1920, 세로 1080 픽셀, 24비트(3바이트) 트루컬러의 비압축 1초 분량 동영상의 원시 데이터 용량은 약 얼마인가?",
      "options": [
        "약 1.8 MB",
        "약 186 MB",
        "약 1.8 GB",
        "약 18 GB"
      ],
      "answer": 1,
      "explanation": "$1920 \\times 1080 \\approx 2.07 \\times 10^6$ 픽셀 $\\times 3$ 바이트 $\\approx 6.22$ MB/프레임. 초당 30프레임이므로 $6.22 \\times 30 \\approx 186.6$ MB/초입니다."
    },
    {
      "id": 79,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "ox",
      "question": "확장현실(XR: Extended Reality)은 VR, AR, MR 및 미래에 등장할 모든 몰입형 가상 융합 기술을 포괄하는 총칭 용어이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "시공간의 제약을 초월하는 모든 실감 미디어 기술 스펙트럼을 아우르는 상위 개념입니다."
    },
    {
      "id": 80,
      "subject": "it",
      "topic": "7장. 멀티미디어 기술과 활용",
      "type": "mcq",
      "question": "가상현실(VR) 기기를 착용했을 때 사용자의 머리 움직임과 화면 렌더링 간의 지연 시간(MTP: Motion-to-Photon Latency)이 길어지면 발생하는 부작용은?",
      "options": [
        "기기의 배터리가 방전된다.",
        "시각 정보와 전정기관 감각의 불일치로 인한 어지럼증 및 멀미(VR Sickness)",
        "디스플레이 색상이 흑백으로 반전된다.",
        "오디오 소리가 반대로 들린다."
      ],
      "answer": 1,
      "explanation": "MTP 지연이 통상 20ms 이상으로 커지면 시각과 균형 감각의 뇌 내 신호 불일치로 심한 멀미를 유발하므로 초저지연 기술이 필수입니다."
    },
    {
      "id": 81,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "모바일 컴퓨팅(Mobile Computing) 환경의 2대 근본적인 고유 특성은?",
      "options": [
        "이동성(Mobility)과 무선성(Wireless Connectivity)",
        "고정성과 유선성",
        "대용량성과 고전력성",
        "폐쇄성과 단일성"
      ],
      "answer": 0,
      "explanation": "사용자가 장소를 이동하면서도(이동성) 케이블 연결 없이 무선 링크(무선성)를 통해 지속적으로 컴퓨팅 자원에 접근할 수 있는 환경입니다."
    },
    {
      "id": 82,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "국제전기통신연합(ITU)에서 정의한 5G 이동통신의 3대 핵심 사용 시나리오(서비스 축)가 아닌 것은?",
      "options": [
        "eMBB (초광대역 이동통신 - Enhanced Mobile Broadband)",
        "URLLC (초고신뢰 저지연 통신 - Ultra-Reliable and Low Latency Communications)",
        "mMTC (대규모 사물통신 - Massive Machine Type Communications)",
        "uSDC (초저속 단말 제어 - Ultra Slow Device Control)"
      ],
      "answer": 3,
      "explanation": "5G의 3대 축은 초고속(최대 20Gbps eMBB), 초저지연(1ms 지연율 URLLC), 초연결($10^6$개/km² mMTC)입니다."
    },
    {
      "id": 83,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "중앙 클라우드 데이터센터로 모든 데이터를 전송하지 않고, 데이터가 생성되는 물리적 장치 근처(기지국, 게이트웨이 등)에서 분산 처리하여 초저지연과 네트워크 대역폭 절감을 달성하는 컴퓨팅 아키텍처는?",
      "options": [
        "엣지 컴퓨팅 (Edge Computing)",
        "메인프레임 컴퓨팅",
        "배치(일괄) 컴퓨팅",
        "터미널 컴퓨팅"
      ],
      "answer": 0,
      "explanation": "자율주행, 스마트 팩토리, 원격 수술 등 실시간 초저지연 처리가 필요한 응용을 위해 현장 말단(Edge)에서 즉시 연산하는 패러다임입니다."
    },
    {
      "id": 84,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "사물인터넷(IoT: Internet of Things)의 일반적인 3계층 아키텍처 구성으로 올바른 것은?",
      "options": [
        "디바이스/인식 계층(Sensing) -> 네트워크 계층(Transmission) -> 응용/서비스 계층(Application)",
        "운영체제 계층 -> 하드웨어 계층 -> 컴파일러 계층",
        "웹 계층 -> 브라우저 계층 -> 스크립트 계층",
        "배터리 계층 -> 케이블 계층 -> 전원 계층"
      ],
      "answer": 0,
      "explanation": "센서/액추에이터로 데이터를 감지하고(인식), 무선 통신망을 통해 전달하며(네트워크), 클라우드/플랫폼에서 분석·서비스를 제공합니다."
    },
    {
      "id": 85,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "OAuth 2.0 인가(Authorization) 프레임워크에 대한 설명으로 가장 올바른 것은?",
      "options": [
        "사용자의 패스워드를 서드파티 앱에 직접 제공하여 로그인시키는 프로토콜이다.",
        "사용자의 비밀번호를 제3자 애플리케이션에 노출하지 않고, 리소스 소유자의 동의를 바탕으로 특정 자원에 접근할 수 있는 제한된 권한 토큰(Access Token)을 발급해주는 표준 인가 프로토콜이다.",
        "오직 블루투스 기기 페어링에만 사용되는 프로토콜이다.",
        "데이터베이스의 테이블을 암호화하는 DDL 명령어이다."
      ],
      "answer": 1,
      "explanation": "구글/카카오 소셜 로그인처럼 내 ID/PW를 앱에 주지 않고 접근 토큰(Access Token)만 인가하여 안전한 연동을 보장합니다."
    },
    {
      "id": 86,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "OAuth 2.0의 4가지 인가 방식 중 웹 서버 기반 애플리케이션에서 가장 널리 쓰이며 가장 보안성이 높은 권장 방식은?",
      "options": [
        "권한 부여 코드 승인 방식 (Authorization Code Grant)",
        "암묵적 승인 방식 (Implicit Grant)",
        "자원 소유자 패스워드 자격증명 방식 (Resource Owner Password Credentials)",
        "클라이언트 자격증명 방식 (Client Credentials Grant)"
      ],
      "answer": 0,
      "explanation": "브라우저를 통해 일회용 Authorization Code를 먼저 발급받고, 백엔드 서버 간 통신으로 Client Secret과 함께 안전하게 Access Token을 교환하는 방식입니다."
    },
    {
      "id": 87,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "공개키 암호화 기반구조(PKI)에서 사용되는 X.509 공개키 인증서의 핵심 역할은?",
      "options": [
        "신뢰할 수 있는 공인 인증기관(CA: Certificate Authority)의 디지털 전자서명을 통해, 특정 공개키가 해당 소유자의 것임을 공적으로 보증하는 것",
        "인터넷 케이블의 전송 속도를 2배로 가속하는 것",
        "스마트폰의 화면 잠금 패턴을 저장하는 것",
        "DNS 서버의 IP 주소를 무작위로 변경하는 것"
      ],
      "answer": 0,
      "explanation": "X.509 인증서는 소유자 정보, 소유자의 공개키, 유효기간 등을 담고 CA의 개인키로 전자서명되어 중간자 공격(MITM)을 방어합니다."
    },
    {
      "id": 88,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "현대 보안 아키텍처의 패러다임인 '제로 트러스트(Zero Trust)'의 3대 기본 원칙에 해당하지 않는 것은?",
      "options": [
        "명시적 검증 (Never Trust, Always Verify - 항상 모든 접근을 검증하라)",
        "최소 권한 원칙 (Least Privilege Access - 필요한 최소한의 권한만 부여하라)",
        "침해 가정 (Assume Breach - 이미 내부망이 침해당했다고 전제하라)",
        "내부망 무조건 신뢰 (Trust Internal Network - 사내망 접속자는 검증을 생략하라)"
      ],
      "answer": 3,
      "explanation": "제로 트러스트는 '경계 기반 방어(사내망은 안전하다)'를 완전히 부정하며, 내부망 접속자라도 절대 신뢰하지 않고 지속적으로 인증·인가를 검증합니다."
    },
    {
      "id": 89,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "FIDO(Fast Identity Online) 얼라이언스가 표준화한 차세대 사용자 인증 기술의 핵심 개념은?",
      "options": [
        "비밀번호를 외워서 입력하는 대신, 지문·홍채·얼굴인식 등 생체인증을 단말기(로컬)에서 처리하고 서버와는 비대칭 공개키 암호학으로 검증하여 패스워드 탈취를 원천 차단하는 기술",
        "사용자의 주민등록번호를 모든 사이트에 공개하는 기술",
        "매번 100자리의 특수문자 암호를 강제 변경하는 기술",
        "서버의 데이터베이스에 사용자의 생체 정보를 원본 사진 그대로 저장하는 기술"
      ],
      "answer": 0,
      "explanation": "생체 정보는 사용자 단말의 보안 영역(SE/TEE) 밖으로 절대 전송되지 않으며, 서버와는 전자서명 검증만 수행하는 패스워드리스(Passwordless) 기술입니다."
    },
    {
      "id": 90,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "ox",
      "question": "JWT(JSON Web Token)는 Header, Payload, Signature 세 부분이 마침표(.)로 구분된 base64url 인코딩 문자열 형태의 자가 수용적(Self-contained) 토큰이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "토큰 자체에 사용자 정보와 만료일이 담겨 있고 전자서명(Signature)으로 위변조를 검증하므로 서버가 별도 세션 DB를 조회하지 않아도 됩니다."
    },
    {
      "id": 91,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "스마트폰 등 모바일 기기의 핵심 반도체로, CPU, GPU, NPU, 모뎀, 메모리 컨트롤러 등을 단 하나의 칩에 모두 집적한 반도체를 무엇이라 부르는가?",
      "options": [
        "AP (Application Processor) / SoC (System on Chip)",
        "하드디스크 드라이브",
        "바이오스 롬",
        "사운드 카드"
      ],
      "answer": 0,
      "explanation": "모바일 기기의 초소형·저전력 특성을 달성하기 위해 모든 핵심 시스템 부품을 단일 실리콘 다이에 통합한 SoC 형태입니다."
    },
    {
      "id": 92,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "ox",
      "question": "근거리 무선 통신 기술 중 저전력 블루투스(BLE: Bluetooth Low Energy)는 배터리 소모를 극도로 줄여 스마트워치, 비콘, 헬스케어 센서 기기에 널리 활용된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "클래식 블루투스와 달리 데이터 전송 시에만 순간적으로 깨어나 통신하고 수면 상태를 유지하여 코인 배터리로 수년간 동작 가능합니다."
    },
    {
      "id": 93,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "NFC(Near Field Communication) 기술의 통신 거리와 주파수 대역으로 옳은 것은?",
      "options": [
        "약 10cm 이내의 초근거리 / 13.56 MHz 대역",
        "약 100m / 2.4 GHz 대역",
        "약 10km / 5 GHz 대역",
        "약 1m / 900 MHz 대역"
      ],
      "answer": 0,
      "explanation": "13.56MHz 주파수를 이용해 10cm 이내의 접촉식 초근거리에서만 동작하므로 모바일 결제(애플페이, 교통카드 등)에 높은 보안성을 제공합니다."
    },
    {
      "id": 94,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "ox",
      "question": "자율주행 차량에서 다른 차량(V2V), 도로 인프라(V2I), 보행자(V2P) 등 모든 사물과 초저지연으로 통신하는 무선 기술을 V2X(Vehicle-to-Everything)라고 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "5G C-V2X 기술을 기반으로 사각지대 위험 경고, 군집 주행 등 협력형 지능형 교통체계(C-ITS)를 구축합니다."
    },
    {
      "id": 95,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "스마트폰의 온디바이스 AI(On-device AI)가 클라우드 AI에 비해 갖는 결정적인 장점 두 가지는?",
      "options": [
        "네트워크 연결 없이 즉각 반응하는 초저지연성과 민감한 개인정보(사진, 대화)가 외부 서버로 유출되지 않는 높은 프라이버시 보호",
        "무제한의 메모리와 초거대 파라미터 연산 능력",
        "전력 소모가 0이 되는 무한 배터리 수명",
        "하드웨어 칩이 전혀 필요 없는 순수 소프트웨어 동작"
      ],
      "answer": 0,
      "explanation": "단말 내 NPU에서 직접 추론을 수행하므로 비행기 모드에서도 작동하며 민감 데이터의 클라우드 전송이 불필요합니다."
    },
    {
      "id": 96,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "ox",
      "question": "OAuth 2.0의 Refresh Token은 유효기간이 짧은 Access Token이 만료되었을 때, 사용자의 재로그인 없이 새로운 Access Token을 안전하게 재발급받기 위해 사용된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "Access Token은 탈취 위험에 대비해 수명(예: 30분)을 짧게 유지하고, 안전한 저장소에 보관된 Refresh Token으로 갱신합니다."
    },
    {
      "id": 97,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "기존 SIM 카드와 달리 스마트폰 메인보드에 칩 형태로 내장되어 있어 통신사 프로파일을 원격 소프트웨어 다운로드로 변경할 수 있는 기술은?",
      "options": [
        "eSIM (Embedded SIM)",
        "마이크로 SD 카드",
        "USB 동글",
        "마그네틱 스트라이프"
      ],
      "answer": 0,
      "explanation": "물리적 칩 교체 없이 소프트웨어로 개통과 번호 이동이 가능한 차세대 임베디드 가입자 식별 모듈입니다."
    },
    {
      "id": 98,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "ox",
      "question": "블루투스 기반 비콘(Beacon)은 실내에서 GPS 수신이 불가능할 때 정확한 위치 측위 및 맞춤형 쿠폰 안내 서비스를 제공하는 데 활용된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "BLE 신호의 수신 감도(RSSI)를 측정하여 실내 오차 수 미터 이내의 정밀 위치 정보를 삼각측량합니다."
    },
    {
      "id": 99,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "mcq",
      "question": "스마트 시티(Smart City)의 핵심 목적과 거버넌스로 가장 올바른 것은?",
      "options": [
        "도시의 모든 건물을 철거하고 전산실만 건축하는 것",
        "IoT, 빅데이터, AI 기술을 도시 인프라에 접목하여 교통, 에너지, 환경, 방범 문제를 효율적으로 해결하고 시민의 삶의 질을 높이는 것",
        "시민들의 인터넷 사용 시간을 하루 1시간으로 제한하는 것",
        "모든 대중교통을 폐지하고 도보 이동만 허용하는 것"
      ],
      "answer": 1,
      "explanation": "도시 데이터 허브를 기반으로 실시간 교통 흐름 제어, 스마트 가로등, 지능형 방범 등을 유기적으로 연계하는 지능형 도시입니다."
    },
    {
      "id": 100,
      "subject": "it",
      "topic": "8장. 모바일 컴퓨팅과 스마트 혁명",
      "type": "ox",
      "question": "차세대 6G 이동통신은 테라헤르츠(THz) 대역 주파수와 저궤도 위성 통신망(LEO)을 결합하여 지상뿐만 아니라 공중과 해상을 아우르는 3차원 공간 초공간 통신을 목표로 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "최대 1Tbps의 전송 속도와 0.1ms의 지연율, 지구상 음영 지역 없는 위성 연계 3차원 통신을 실현하는 차세대 통신 규격입니다."
    }
  ],
  "os": [
    {
      "id": 1,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "운영체제(OS: Operating System)의 가장 본질적인 2대 핵심 목적은?",
      "options": [
        "컴퓨터 하드웨어 자원(CPU, 메모리, I/O 등)을 효율적으로 관리 및 제어하고, 사용자와 응용 프로그램에 편리한 인터페이스를 제공하는 것",
        "인터넷 웹브라우저의 실행 속도를 높이고 그래픽을 렌더링하는 것",
        "모든 소스 코드를 기계어로 즉시 컴파일하는 것",
        "하드웨어 칩의 온도를 낮추고 냉각 팬의 회전을 멈추는 것"
      ],
      "answer": 0,
      "explanation": "운영체제는 하드웨어 자원의 공정하고 효율적인 배분(자원 관리자)과 사용자가 시스템을 쉽게 쓰도록 돕는 추상화 계층(정부/관리자) 역할을 수행합니다."
    },
    {
      "id": 2,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "컴퓨터 전원을 켰을 때(부팅 시) ROM 또는 플래시 메모리(BIOS/UEFI)에 저장되어 가장 먼저 실행되는 프로그램은?",
      "options": [
        "부트스트랩 로더 (Bootstrap Loader / Bootloader)",
        "시스템 콜 핸들러",
        "스케줄러",
        "웹 서버 데몬"
      ],
      "answer": 0,
      "explanation": "부트스트랩 로더는 하드웨어 자체 진단(POST)을 수행하고, 보조기억장치에서 OS 커널을 찾아 메인 메모리에 적재한 뒤 실행권을 넘깁니다."
    },
    {
      "id": 3,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "현대 운영체제가 악의적이거나 결함이 있는 응용 프로그램으로부터 시스템과 다른 사용자를 보호하기 위해 하드웨어적으로 지원하는 구조는?",
      "options": [
        "단일 전용 모드",
        "이중 모드 (Dual-mode: 사용자 모드와 커널 모드)",
        "가상 머신 전용 모드",
        "아날로그 에뮬레이션 모드"
      ],
      "answer": 1,
      "explanation": "CPU 상태 레지스터의 모드 비트(Mode bit)를 기반으로 사용자 모드(User mode: 1)와 커널 모드(Kernel/Supervisor mode: 0)로 하드웨어적으로 동작을 분리합니다."
    },
    {
      "id": 4,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "특권 명령(Privileged Instruction)에 대한 설명으로 가장 올바른 것은?",
      "options": [
        "사용자 모드에서 실행될 때 CPU 연산 속도가 빨라지는 명령",
        "시스템의 치명적인 손상을 초래할 수 있어 오직 커널 모드(Kernel mode, 모드 비트 0)에서만 실행이 허용되는 명령",
        "모든 응용 프로그램이 제한 없이 언제든 호출할 수 있는 연산 명령",
        "컴파일러가 어셈블리어 코드를 생성할 때 자동으로 생략하는 명령"
      ],
      "answer": 1,
      "explanation": "I/O 장치 직접 제어, 타이머 설정, 인터럽트 활성화/비활성화, 모드 비트 변경 등 시스템 자원에 직접 영향을 미치는 명령은 오직 커널 모드에서만 실행 가능합니다."
    },
    {
      "id": 5,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "사용자 모드(User mode)에서 실행 중인 응용 프로그램이 특권 명령을 직접 실행하려고 시도하면 하드웨어는 어떻게 반응하는가?",
      "options": [
        "명령을 무시하고 다음 명령으로 넘어간다.",
        "불법 명령어 예외(Illegal Instruction Trap/Fault)를 발생시켜 즉시 커널 모드로 전환하고 해당 프로세스를 강제 종료(Abnormal Termination)시킨다.",
        "해당 프로세스에 즉시 관리자 권한을 영구 부여한다.",
        "컴퓨터 전원을 즉시 차단한다."
      ],
      "answer": 1,
      "explanation": "하드웨어가 이를 트랩(예외)으로 감지하여 CPU 통제권을 커널의 예외 처리기로 넘기며, 운영체제는 보호 위반으로 해당 프로세스를 강제 종료합니다."
    },
    {
      "id": 6,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "소프트웨어 인터럽트(트랩/예외, Trap/Exception)와 하드웨어 인터럽트(Hardware Interrupt)의 근본적인 차이는?",
      "options": [
        "소프트웨어 인터럽트는 CPU 내부에서 명령어 실행 도중 동기적(Synchronous)으로 발생하고, 하드웨어 인터럽트는 외부 I/O 장치 등에 의해 CPU 외부에서 비동기적(Asynchronous)으로 발생한다.",
        "하드웨어 인터럽트는 오직 키보드 입력 시에만 발생한다.",
        "소프트웨어 인터럽트는 커널 모드로 전환되지 않는다.",
        "두 인터럽트는 기술적으로 완전히 동일하여 구분되지 않는다."
      ],
      "answer": 0,
      "explanation": "트랩은 시스템 콜이나 0으로 나누기, 페이지 폴트처럼 명령어 실행에 의해 동기적으로 유발되며, 하드웨어 인터럽트는 타이머나 디스크 I/O 완료처럼 외부 신호에 의해 비동기적으로 들어옵니다."
    },
    {
      "id": 7,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "특정 인터럽트가 발생했을 때 해당 인터럽트를 처리할 커널 함수(ISR: Interrupt Service Routine)의 시작 메모리 주소들을 저장해 둔 배열 테이블은?",
      "options": [
        "인터럽트 벡터 테이블 (Interrupt Vector Table)",
        "페이지 테이블",
        "세그먼트 테이블",
        "심볼 테이블"
      ],
      "answer": 0,
      "explanation": "각 인터럽트 번호(인덱스)에 대응하는 핸들러 함수의 시작 번지를 보관하는 배열로, 하드웨어는 인터럽트 발생 시 이 벡터를 참조하여 즉시 ISR로 분기합니다."
    },
    {
      "id": 8,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "특정 사용자 프로세스가 CPU를 무한 루프로 독점하여 시스템 전체가 멈추는 것을 방지하기 위해 운영체제가 사용하는 하드웨어 장치는?",
      "options": [
        "타이머 (Hardware Timer)",
        "하드디스크 캐시",
        "사운드 카드",
        "GPU 가속기"
      ],
      "answer": 0,
      "explanation": "타이머는 주기적으로 하드웨어 인터럽트를 발생시켜 CPU 제어권을 커널로 강제 회수하고, 스케줄러가 다음 프로세스로 전환(시분할 멀티태스킹)할 수 있도록 보장합니다."
    },
    {
      "id": 9,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "응용 프로그램이 운영체제의 커널이 제공하는 특권 서비스(파일 읽기/쓰기, 프로세스 생성, 네트워크 통신 등)를 요청하기 위해 사용하는 프로그래밍 인터페이스는?",
      "options": [
        "시스템 콜 (System Call)",
        "BIOS 인터럽트",
        "매크로 어셈블러",
        "데이터베이스 쿼리"
      ],
      "answer": 0,
      "explanation": "시스템 콜은 사용자 모드에서 트랩 명령어(예: x86 `syscall` / `int 0x80`)를 발생시켜 안전하게 커널 모드로 진입하여 서비스를 요청하는 유일한 관문입니다."
    },
    {
      "id": 10,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "운영체제에서 시스템 콜을 호출할 때 필요한 매개변수(Parameter)를 커널에 전달하는 3가지 표준 방법이 아닌 것은?",
      "options": [
        "CPU 범용 레지스터(Register)에 직접 저장하여 전달",
        "매개변수들을 메모리의 특정 블록/테이블에 저장하고 해당 블록의 메모리 주소(포인터)를 레지스터로 전달",
        "프로그램의 스택(Stack) 영역에 push하고 커널이 pop하여 전달",
        "하드디스크의 부트 섹터에 파일로 기록하여 전달"
      ],
      "answer": 3,
      "explanation": "시스템 콜 인자 전달은 속도가 빠른 1) 레지스터, 크기가 클 때 쓰는 2) 메모리 블록 주소 전달, 3) 스택 전달의 3가지가 표준입니다."
    },
    {
      "id": 11,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "CPU가 입출력 장치의 상태 레지스터를 루프를 돌며 지속적으로 확인하여 데이터 전송 준비가 되었는지 검사하는 I/O 처리 방식은?",
      "options": [
        "폴링 (Polling / Programmed I/O)",
        "인터럽트 구동 I/O",
        "DMA 전송",
        "비동기 큐잉"
      ],
      "answer": 0,
      "explanation": "폴링은 구현이 단순하지만 장치가 응답할 때까지 CPU가 바쁜 대기(Busy Waiting)를 하므로 심각한 CPU 자원 낭비를 유발합니다."
    },
    {
      "id": 12,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "입출력 장치가 데이터 전송 준비를 마칠 때까지 CPU는 다른 유용한 연산을 수행하다가, 장치가 신호를 보냈을 때 비로소 작업을 처리하는 방식은?",
      "options": [
        "인터럽트 구동 I/O (Interrupt-driven I/O)",
        "바쁜 대기",
        "정적 폴링",
        "순차 스캔"
      ],
      "answer": 0,
      "explanation": "CPU가 I/O 완료를 기다리며 멈추지 않고 다른 작업을 하다가 완료 인터럽트가 왔을 때만 반응하므로 CPU 활용률이 매우 높습니다."
    },
    {
      "id": 13,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "대용량 블록 데이터 전송 시 바이트마다 CPU 인터럽트가 발생하는 오버헤드를 막기 위해, CPU의 개입 없이 메모리와 I/O 장치 간에 직접 데이터를 전송하는 전용 하드웨어 제어기는?",
      "options": [
        "DMA 컨트롤러 (Direct Memory Access Controller)",
        "ALU",
        "캐시 컨트롤러",
        "GPU 쉐이더"
      ],
      "answer": 0,
      "explanation": "DMA는 CPU로부터 전송 블록의 시작 주소와 바이트 수만 전달받은 뒤 버스를 직접 제어하여 메모리와 고속 전송을 수행하고, 블록 전체 전송 완료 시에만 단 1회의 인터럽트를 발생시킵니다."
    },
    {
      "id": 14,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "DMA 컨트롤러가 시스템 버스를 사용하여 메모리와 데이터를 전송하는 동안, CPU가 일시적으로 메모리 버스 접근을 양보하는 현상을 무엇이라 부르는가?",
      "options": [
        "사이클 스틸링 (Cycle Stealing)",
        "메모리 단편화",
        "캐시 플러시",
        "페이지 폴트"
      ],
      "answer": 0,
      "explanation": "DMA 컨트롤러가 CPU의 메모리 버스 사용 주기를 '훔쳐서(Steal)' 고속 데이터 전송을 수행하는 동작 메커니즘입니다."
    },
    {
      "id": 15,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "모드 비트(Mode bit)가 0이면 커널 모드(Kernel mode)이고, 1이면 사용자 모드(User mode)를 나타낸다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "표준 아키텍처에서 0은 모든 특권 명령이 가능한 커널(Supervisor) 모드이고 1은 제한된 사용자 모드입니다."
    },
    {
      "id": 16,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "사용자 모드에서 시스템 콜 트랩이 발생하면 하드웨어는 모드 비트를 자동으로 0(커널 모드)으로 변경한 후 커널 핸들러로 분기한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "하드웨어가 원자적으로 모드 비트를 0으로 전환하고 현재 PC와 상태를 커널 스택에 저장한 뒤 ISR로 점프합니다."
    },
    {
      "id": 17,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "커널 모드에서 사용자 모드로 복귀할 때 사용되는 CPU 명령어(예: `sysret`, `iret`)는 특권 명령에 해당한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "모드 비트를 0에서 1로 변경하고 CPU 통제권을 사용자 코드로 되돌리는 작업은 커널만 실행할 수 있는 특권 명령입니다."
    },
    {
      "id": 18,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "다음 중 운영체제의 특권 명령(Privileged Instruction)에 해당하지 않는 것은?",
      "options": [
        "타이머 레지스터의 인터럽트 주기 설정",
        "입출력(I/O) 장치 제어 레지스터 쓰기",
        "CPU 레지스터 $R_1$과 $R_2$의 값을 더하는 단순 산술 덧셈(ADD) 연산",
        "페이지 테이블의 베이스 레지스터(PTBR) 값 변경"
      ],
      "answer": 2,
      "explanation": "레지스터 간의 단순 산술/논리 연산(ADD, SUB, MOV 등)은 시스템 보호를 침해하지 않으므로 사용자 모드에서 자유롭게 실행 가능한 비특권 명령입니다."
    },
    {
      "id": 19,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "프로그래머가 시스템 콜을 직접 어셈블리어 트랩으로 호출하는 대신 표준 라이브러리 함수(예: C 라이브러리의 `printf()`, `read()`)를 통해 호출하는 주된 이유는?",
      "options": [
        "프로그램의 이식성(Portability)을 높이고 시스템 콜의 복잡한 하드웨어 의존적 인터페이스를 단순화하기 위해",
        "C 표준 라이브러리를 쓰면 커널 모드로 전환되지 않기 위해",
        "시스템 콜을 쓰면 프로그램 크기가 10배 커지기 위해",
        "운영체제가 라이브러리 함수만 인식하기 위해"
      ],
      "answer": 0,
      "explanation": "POSIX API나 Win32 API 같은 표준 API 래퍼를 사용하면 운영체제나 CPU 아키텍처가 바뀌어도 동일한 소스 코드로 재컴파일하여 실행할 수 있습니다."
    },
    {
      "id": 20,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "인터럽트가 발생했을 때 CPU는 현재 실행 중이던 프로세스의 프로그램 카운터(PC)와 상태 레지스터(PSW)를 커널 스택 등에 안전하게 저장(Save State)한 뒤 ISR을 실행한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "인터럽트 처리가 끝난 뒤 원래 중단되었던 지점으로 정확히 복귀하여 실행을 재개하기 위해 상태 저장이 필수적입니다."
    },
    {
      "id": 21,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "현대 CPU에서 프로세서가 특정 인터럽트의 수신을 일시적으로 지연시키거나 무시할 수 있도록 하는 명령과 절대로 무시할 수 없는 인터럽트(NMI)의 조합으로 옳은 것은?",
      "options": [
        "CLI(Clear Interrupt)로 마스크 가능 인터럽트를 차단 / 하드웨어 오류 등 치명적 이벤트는 NMI(Non-Maskable Interrupt)로 처리",
        "모든 인터럽트는 무조건 차단이 불가능하다.",
        "NMI는 소프트웨어 오류 시에만 발생한다.",
        "STI 명령은 CPU를 즉시 종료시킨다."
      ],
      "answer": 0,
      "explanation": "중요한 커널 임계구역 실행 시 일반 인터럽트는 마스킹(Disable)할 수 있으나 정전, 메모리 패리티 오류 등 치명적 사건은 NMI로 즉시 처리됩니다."
    },
    {
      "id": 22,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "메모리 매핑 I/O(Memory-Mapped I/O)는 I/O 장치의 레지스터들을 일반 메모리 주소 공간의 일부로 매핑하여 표준 메모리 읽기/쓰기 명령(`MOV` 등)으로 I/O를 제어하는 방식이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "별도의 전용 I/O 명령어(`IN`/`OUT`)를 두는 포트 매핑 I/O와 달리 일반 메모리 접근 명령어와 동일한 방식으로 장치를 제어합니다."
    },
    {
      "id": 23,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "운영체제의 핵심 커널 아키텍처 중, 모든 핵심 서비스(스케줄링, 파일시스템, 메모리 관리, 장치 드라이버, 네트워크)가 단일 커널 주소 공간에서 실행되는 구조는?",
      "options": [
        "단일형 커널 (Monolithic Kernel, 예: Linux)",
        "마이크로 커널 (Microkernel, 예: Mach, QNX)",
        "외형 커널 (Exokernel)",
        "하이브리드 모바일 커널"
      ],
      "answer": 0,
      "explanation": "모놀리식 커널은 모든 구성요소가 동일한 커널 공간에서 함수 호출로 통신하므로 성능이 매우 뛰어나지만, 한 모듈의 버그가 커널 전체 충돌로 이어질 수 있습니다."
    },
    {
      "id": 24,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "마이크로 커널(Microkernel) 아키텍처의 설계 철학과 장점으로 옳은 것은?",
      "options": [
        "커널에는 최소한의 핵심 기능(기본 IPC, 가상 메모리, 프로세스 스케줄링)만 남기고 파일시스템이나 드라이버 등은 사용자 공간의 서버 프로세스로 격리하여 시스템의 안정성과 확장성을 극대화한다.",
        "모든 코드를 하드웨어 칩에 직접 구워 넣는다.",
        "커널의 크기가 10GB 이상으로 비대해진다.",
        "시스템 콜 호출 속도가 모놀리식 커널보다 10배 이상 빠르다."
      ],
      "answer": 0,
      "explanation": "핵심 기능만 커널에 두고 나머지를 사용자 공간 서버로 분리하여 특정 드라이버가 죽어도 OS 전체가 다운되지 않는 높은 안정성을 제공합니다."
    },
    {
      "id": 25,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "마이크로 커널은 사용자 공간 서버들 간에 빈번한 IPC(프로세스 간 통신)와 문맥 교환이 발생하므로 모놀리식 커널에 비해 성능 오버헤드가 크다는 단점이 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "메시지 전달 기반의 IPC와 사용자-커널 모드 전환이 잦아 순수 실행 속도 측면에서는 모놀리식 커널보다 느릴 수 있습니다."
    },
    {
      "id": 26,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "POSIX(Portable Operating System Interface) 표준의 제정 목적으로 옳은 것은?",
      "options": [
        "서로 다른 유닉스(UNIX) 호환 운영체제 간에 소스 코드 수준의 소프트웨어 호환성을 보장하기 위한 API 규격 정의",
        "윈도우 운영체제의 독점 권리를 보장하기 위한 라이선스",
        "컴퓨터 모니터의 화면 주사율 표준화",
        "네트워크 케이블의 두께 표준화"
      ],
      "answer": 0,
      "explanation": "IEEE가 제정한 표준 규격으로 개발자가 POSIX 표준 API를 준수해 프로그램을 작성하면 리눅스, macOS, BSD 등 다양한 유닉스 계열 OS에서 수정 없이 재컴파일이 가능합니다."
    },
    {
      "id": 27,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "다중 프로그래밍(Multiprogramming)의 주된 목적은 CPU 이용률(CPU Utilization)을 극대화하는 것으로, 한 프로세스가 I/O를 대기하는 동안 다른 프로세스에 CPU를 할당하여 CPU가 놀지 않게 하는 것이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "단일 작업 시스템의 I/O 대기 유휴 시간을 없애고 여러 작업을 메모리에 올려 CPU를 지속적으로 가동시킵니다."
    },
    {
      "id": 28,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "시분할 시스템(Time-Sharing System)이 다중 프로그래밍과 구별되는 가장 중요한 목표는?",
      "options": [
        "컴퓨터의 전력 소모를 50% 절감하는 것",
        "CPU를 매우 짧은 시간 단위(Time Quantum)로 프로세스 간에 빠르게 전환하여, 여러 대화형(Interactive) 사용자가 시스템을 동시에 독점하여 사용하는 것처럼 느끼게 하는 응답 시간(Response Time) 최소화",
        "모든 데이터를 테이프 드라이브에만 백업하는 것",
        "프로세스의 메모리 점유율을 1MB 이하로 제한하는 것"
      ],
      "answer": 1,
      "explanation": "시분할은 대화형 컴퓨터 환경에서 사용자에게 빠른 반응성과 다자간 동시 사용 경험을 제공하는 데 중점을 둡니다."
    },
    {
      "id": 29,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "실시간 운영체제(RTOS)의 핵심 요구조건은 평균적인 빠른 속도보다 주어진 제한 시간(Deadline) 내에 작업 처리를 100% 완료함을 보장하는 '결정론성(Determinism)'이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "항공 제어, 의료 기기, 자동차 ECU 등은 1ms라도 지연되면 치명적 사고로 이어지므로 엄격한 데드라인 보장이 최우선입니다."
    },
    {
      "id": 30,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "리눅스 시스템에서 새로운 프로세스를 생성할 때 호출하는 시스템 콜은?",
      "options": [
        "`fork()`",
        "`kill()`",
        "`read()`",
        "`chmod()`"
      ],
      "answer": 0,
      "explanation": "`fork()`는 현재 실행 중인 부모 프로세스와 메모리 상태가 동일한 새로운 자식 프로세스를 생성하는 시스템 콜입니다."
    },
    {
      "id": 31,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "리눅스에서 현재 프로세스의 메모리 주소 공간을 새로운 실행 파일 바이너리 코드로 완전히 교체하여 실행을 시작하는 시스템 콜은?",
      "options": [
        "`exec()` 계열 (`execve`)",
        "`fork()`",
        "`wait()`",
        "`exit()`"
      ],
      "answer": 0,
      "explanation": "`fork()`가 복제본을 만든다면, `exec()`는 해당 프로세스의 텍스트, 데이터, 힙, 스택을 새 프로그램으로 덮어써서 실행합니다."
    },
    {
      "id": 32,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "부모 프로세스가 자식 프로세스의 종료 상태를 수집하고 자식 프로세스가 할당받았던 시스템 자원을 완전히 해제하기 위해 호출하는 시스템 콜은?",
      "options": [
        "`wait()` / `waitpid()`",
        "`malloc()`",
        "`signal()`",
        "`pipe()`"
      ],
      "answer": 0,
      "explanation": "`wait()`를 호출하면 부모는 자식이 종료될 때까지 대기하며 자식의 반환 코드를 회수하고 좀비 상태를 방지합니다."
    },
    {
      "id": 33,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "현대 프로세서(x86 등)는 링 0(Ring 0: 커널 모드)부터 링 3(Ring 3: 사용자 모드)까지 4단계의 하드웨어 보호 링(Protection Rings)을 지원한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "하드웨어적으로는 4단계 권한 계층이 존재하며 대다수 범용 OS는 Ring 0(커널)과 Ring 3(사용자)의 2단계를 실질적으로 활용합니다."
    },
    {
      "id": 34,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "mcq",
      "question": "운영체제가 하드웨어 장치를 제어하기 위해 장치 제조사가 제공하는 운영체제 맞춤형 소프트웨어 컴포넌트는?",
      "options": [
        "장치 드라이버 (Device Driver)",
        "장치 펌웨어",
        "컴파일러 옵티마이저",
        "웹 애플릿"
      ],
      "answer": 0,
      "explanation": "장치 드라이버는 특정 컨트롤러 하드웨어의 복잡한 레지스터 조작을 추상화하여 운영체제 표준 블록/문자 디바이스 인터페이스로 연결해줍니다."
    },
    {
      "id": 35,
      "subject": "os",
      "topic": "W1~W2. 이중 모드 & 시스템 콜",
      "type": "ox",
      "question": "스풀링(SPOOLing: Simultaneous Peripheral Operations On-Line)은 프린터처럼 저속인 I/O 장치로 보낼 데이터를 고속의 디스크 버퍼에 임시로 저장하여 CPU가 대기 없이 다음 작업을 계속할 수 있게 하는 기법이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "프린터 출력을 디스크 큐에 모아두고 백그라운드로 출력함으로써 CPU의 병목을 없앱니다."
    },
    {
      "id": 36,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "컴퓨터 메모리 계층 구조(Memory Hierarchy)에서 속도가 가장 빠르고 비트당 비용이 가장 높지만 용량이 가장 작은 장치부터 올바르게 나열된 것은?",
      "options": [
        "CPU 레지스터 -> L1/L2 캐시 -> 메인 메모리(DRAM) -> 보조기억장치(SSD/HDD)",
        "메인 메모리 -> CPU 레지스터 -> 캐시 -> SSD",
        "보조기억장치 -> 메인 메모리 -> 캐시 -> 레지스터",
        "캐시 -> 레지스터 -> SSD -> 메인 메모리"
      ],
      "answer": 0,
      "explanation": "상위 계층(레지스터, SRAM 캐시)으로 갈수록 속도가 빠르고 단가가 높아 용량이 작으며, 하위 계층(DRAM, 플래시/디스크)으로 갈수록 대용량·저비용입니다."
    },
    {
      "id": 37,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "캐시 메모리가 효율적으로 동작할 수 있는 근거가 되는 '참조의 지역성(Principle of Locality)'의 두 가지 유형으로 옳은 것은?",
      "options": [
        "시간 지역성(Temporal Locality)과 공간 지역성(Spatial Locality)",
        "논리 지역성과 물리 지역성",
        "정적 지역성과 동적 지역성",
        "내부 지역성과 외부 지역성"
      ],
      "answer": 0,
      "explanation": "최근 참조된 주소가 가까운 미래에 다시 참조될 가능성이 높은 시간 지역성(루프문 등)과, 참조된 주소 근처의 데이터가 연속해서 참조될 가능성이 높은 공간 지역성(배열 순회 등)입니다."
    },
    {
      "id": 38,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "프로그램의 명령어가 참조하는 논리 주소(Logical/Virtual Address)를 실행 시간에 하드웨어 물리 주소(Physical Address)로 변환해주는 장치는?",
      "options": [
        "MMU (Memory Management Unit)",
        "ALU (Arithmetic Logic Unit)",
        "DMA 컨트롤러",
        "FPU (Floating Point Unit)"
      ],
      "answer": 0,
      "explanation": "MMU는 CPU 내부에 위치하여 CPU가 발생시킨 가상 주소를 베이스 레지스터 또는 페이지 테이블을 통해 실시간 물리 메모리 주소로 고속 변환합니다."
    },
    {
      "id": 39,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "가장 단순한 MMU 주소 변환 기법인 '재배치 레지스터(Relocation/Base Register)'와 '한계 레지스터(Limit Register)'의 역할로 옳은 것은?",
      "options": [
        "재배치 레지스터는 프로세스 물리 메모리의 시작 주소를 더해주고, 한계 레지스터는 프로세스의 크기를 저장하여 유효 범위를 벗어난 침범을 차단(보호)한다.",
        "한계 레지스터는 CPU의 클럭 주파수를 조절한다.",
        "재배치 레지스터는 하드디스크의 남은 용량을 기록한다.",
        "두 레지스터 모두 캐시 메모리의 삭제 정책을 담당한다."
      ],
      "answer": 0,
      "explanation": "물리 주소 = 논리 주소 + 재배치 레지스터 값으로 계산되며, 논리 주소가 한계 레지스터 값 이상이면 트랩(세그멘테이션 오류)을 발생시켜 메모리를 보호합니다."
    },
    {
      "id": 40,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "프로세스에게 메모리를 연속된 단일 공간으로 할당하는 연속 메모리 할당의 3대 동적 할당 전략 중 '가장 먼저 발견된 충분히 큰 빈 공간'에 할당하는 방식은?",
      "options": [
        "최초 적합 (First-fit)",
        "최적 적합 (Best-fit)",
        "최악 적합 (Worst-fit)",
        "순환 적합 (Next-fit)"
      ],
      "answer": 0,
      "explanation": "최초 적합은 가용 리스트의 시작부터 탐색하여 들어갈 수 있는 첫 번째 구멍에 즉시 할당하므로 탐색 속도가 가장 빠릅니다."
    },
    {
      "id": 41,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "동적 메모리 할당 전략 중 '프로세스 크기 이상인 빈 공간 중 가장 크기가 딱 맞는(가장 작은) 공간'에 할당하는 방식과 그 단점은?",
      "options": [
        "최적 적합 (Best-fit) / 전체 가용 리스트를 탐색해야 하며, 할당 후 남는 매우 미세한 크기의 자투리 빈 공간(파편)들이 대량 발생한다.",
        "최초 적합 / 메모리가 낭비되지 않는다.",
        "최악 적합 / 가장 큰 공간만 남긴다.",
        "순환 적합 / 속도가 가장 느리다."
      ],
      "answer": 0,
      "explanation": "Best-fit은 낭비를 최소화하려 하지만 결과적으로 쓸모없는 극소 크기의 구멍들이 메모리 곳곳에 흩어지게 됩니다."
    },
    {
      "id": 42,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "외부 단편화(External Fragmentation)에 대한 정의로 가장 올바른 것은?",
      "options": [
        "메모리 내에 사용 가능한 총 빈 공간의 합은 프로세스를 적재하기에 충분하지만, 공간들이 작게 쪼개져 흩어져 있어 연속된 단일 공간으로 할당할 수 없는 상태",
        "프로세스에 할당된 메모리 블록 내부에서 요구한 크기보다 블록이 커서 블록 내부가 낭비되는 상태",
        "하드디스크의 배드 섹터로 인해 파일 저장이 불가능한 상태",
        "CPU 캐시가 가득 차서 더 이상 데이터를 적재하지 못하는 상태"
      ],
      "answer": 0,
      "explanation": "프로세스의 잦은 생성과 소멸로 메모리가 조각조각 분할되어 총 용량은 넉넉함에도 연속 할당이 불가능해지는 현상입니다."
    },
    {
      "id": 43,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "연속 메모리 할당에서 외부 단편화를 해결하기 위해 메모리 내의 프로세스들을 한쪽으로 몰아 빈 공간들을 하나의 거대한 단일 블록으로 합치는 기법은?",
      "options": [
        "압축 (Compaction)",
        "페이징 (Paging)",
        "스와핑 (Swapping)",
        "버퍼링 (Buffering)"
      ],
      "answer": 0,
      "explanation": "압축은 외부 단편화를 일시 해소하지만 모든 프로세스의 메모리 내용을 대량 복사·이동시켜야 하므로 막대한 I/O 및 CPU 오버헤드가 발생하며 동적 재배치가 지원되어야만 가능합니다."
    },
    {
      "id": 44,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "페이징(Paging) 기법의 근본적인 개념으로 옳은 것은?",
      "options": [
        "프로세스의 논리 메모리를 고정 크기의 '페이지(Page)'로 나누고, 물리 메모리를 동일한 크기의 '프레임(Frame)'으로 나누어 비연속적으로 적재하는 기법",
        "프로세스 전체를 반드시 연속된 물리 메모리에만 할당하는 기법",
        "모든 프로세스를 1MB 단위로 강제 축소시키는 기법",
        "하드디스크의 트랙과 섹터를 일치시키는 기법"
      ],
      "answer": 0,
      "explanation": "고정 크기 분할을 통해 프로세스의 조각들을 비어있는 임의의 물리 프레임에 흩뿌려 적재할 수 있어 외부 단편화를 100% 원천 해결합니다."
    },
    {
      "id": 45,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "페이징 기법에서 논리 주소가 32비트이고 페이지 크기가 4KB($2^{12}$ 바이트)일 때, 논리 주소에서 페이지 번호($p$)와 페이지 오프셋($d$)의 비트 할당은?",
      "options": [
        "페이지 번호: 20비트, 오프셋: 12비트",
        "페이지 번호: 16비트, 오프셋: 16비트",
        "페이지 번호: 12비트, 오프셋: 20비트",
        "페이지 번호: 8비트, 오프셋: 24비트"
      ],
      "answer": 0,
      "explanation": "페이지 크기가 $4\\text{KB} = 2^{12}$바이트이므로 페이지 내 상대적 위치(오프셋)를 나타내는 데 하위 12비트가 쓰이고, 나머지 상위 $32 - 12 = 20$비트가 페이지 번호가 됩니다."
    },
    {
      "id": 46,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "페이징 시스템에서 페이지 번호($p$)를 물리 메모리의 프레임 번호($f$)로 변환해주는 자료구조는?",
      "options": [
        "페이지 테이블 (Page Table)",
        "프레임 큐",
        "세그먼트 맵",
        "디렉터리 엔트리"
      ],
      "answer": 0,
      "explanation": "프로세스마다 독립적인 페이지 테이블을 가지며, 페이지 번호 $p$를 인덱스로 삼아 해당 페이지가 위치한 물리 프레임 번호 $f$를 매핑합니다."
    },
    {
      "id": 47,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "페이징 기법은 외부 단편화(External Fragmentation)는 완벽하게 0으로 제거하지만, 프로세스의 마지막 페이지가 프레임 크기를 다 채우지 못해 '내부 단편화(Internal Fragmentation)'가 발생할 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "예를 들어 프레임이 4KB인데 프로세스 마지막 조각이 1KB라면 나머지 3KB는 빈 채로 할당되어 프로세스 내부에서 낭비(평균 반 페이지 크기)됩니다."
    },
    {
      "id": 48,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "페이징을 적용할 때 메모리에 접근하기 위해 1) 페이지 테이블 조회, 2) 실제 데이터 접근이라는 2번의 메모리 접근이 필요하여 속도가 절반으로 저하되는 문제를 해결하기 위해 도입된 초고속 하드웨어 캐시는?",
      "options": [
        "TLB (Translation Lookaside Buffer)",
        "L3 캐시",
        "재배치 버퍼",
        "스왑 버퍼"
      ],
      "answer": 0,
      "explanation": "TLB는 자주 사용되는 가상 페이지 번호와 물리 프레임 번호의 매핑 쌍을 저장하는 연관 메모리(Associative Cache)로 1클럭 내에 초고속 주소 변환을 수행합니다."
    },
    {
      "id": 49,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "TLB 적중률(Hit Ratio)이 90%(0.9)이고, TLB 검색 시간이 10ns, 메인 메모리 접근 시간이 100ns일 때 유효 접근 시간(EAT: Effective Access Time)은?",
      "options": [
        "120 ns",
        "110 ns",
        "200 ns",
        "100 ns"
      ],
      "answer": 0,
      "explanation": "적중 시: $10 + 100 = 110$ns, 미스 시: $10 + 100 + 100 = 210$ns. $\\text{EAT} = 0.9 \\times 110 + 0.1 \\times 210 = 99 + 21 = 120$ns입니다."
    },
    {
      "id": 50,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "문맥 교환(Context Switch)이 일어날 때 새로운 프로세스는 이전 프로세스와 완전히 다른 가상 주소 매핑을 가지므로 기존 TLB 엔트리를 모두 비우는(Flush) 오버헤드가 발생한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "TLB에 ASID(주소 공간 식별자) 태그가 지원되지 않는 경우 이전 프로세스의 주소 오염을 막기 위해 TLB를 전부 무효화해야 합니다."
    },
    {
      "id": 51,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "32비트 주소 체계에서 페이지 크기가 4KB일 때 단일 계층 페이지 테이블 엔트리(PTE) 수가 $2^{20} \\approx 100$만 개에 달해 메모리 낭비가 심해지는 문제를 해결하기 위한 기법은?",
      "options": [
        "다단계 페이징 (Multi-level Paging / Hierarchical Paging)",
        "정적 연속 할당",
        "단일 레지스터 사상",
        "무제한 스와핑"
      ],
      "answer": 0,
      "explanation": "페이지 테이블 자체를 다시 페이지 단위로 나누어 다단계(예: 2단계, 4단계) 트리 구조로 관리함으로써, 실제로 프로세스가 사용 중인 영역의 페이지만 동적으로 생성하여 메모리를 아낍니다."
    },
    {
      "id": 52,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "페이지 테이블 엔트리(PTE)에 포함되는 유효-무효 비트(Valid-Invalid Bit)의 역할은?",
      "options": [
        "해당 페이지가 현재 물리 메모리(DRAM 프레임)에 실제로 적재되어 있는지(Valid: 1), 아니면 스왑 영역(디스크)에 있거나 유효하지 않은 주소인지(Invalid: 0)를 나타낸다.",
        "해당 페이지의 폰트 색상을 나타낸다.",
        "CPU 클럭 속도를 나타낸다.",
        "네트워크 연결 여부를 나타낸다."
      ],
      "answer": 0,
      "explanation": "Valid 비트가 0인 페이지에 CPU가 접근하려고 시도하면 MMU가 페이지 폴트(Page Fault) 트랩을 발생시켜 OS가 디스크에서 적재하도록 만듭니다."
    },
    {
      "id": 53,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "세그멘테이션(Segmentation) 기법이 페이징 기법과 구별되는 가장 큰 차이점은?",
      "options": [
        "고정된 물리적 크기(4KB 등)로 분할하는 페이징과 달리, 프로그래머 관점의 논리적 의미 단위(코드, 데이터, 스택, 함수 등)로 서로 크기가 다른 가변적인 블록으로 분할한다.",
        "세그멘테이션은 하드웨어 지원이 전혀 필요 없다.",
        "세그멘테이션은 내부 단편화만 대량 발생한다.",
        "세그멘테이션은 텍스트 전용 시스템에서만 동작한다."
      ],
      "answer": 0,
      "explanation": "세그멘테이션은 논리적 모듈 단위(Segment)로 분할하므로 보호와 공유(Sharing)가 매우 직관적이지만 가변 크기이므로 '외부 단편화' 문제가 발생합니다."
    },
    {
      "id": 54,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "세그먼트 테이블(Segment Table)의 각 엔트리가 반드시 가지고 있어야 하는 두 가지 핵심 필드는?",
      "options": [
        "베이스(Base: 세그먼트의 물리 메모리 시작 주소)와 리미트(Limit: 세그먼트의 길이/한계 크기)",
        "프레임 번호와 오프셋",
        "아이콘과 파일 이름",
        "포트 번호와 IP 주소"
      ],
      "answer": 0,
      "explanation": "가변 크기이므로 물리 시작 주소(Base)뿐만 아니라 유효 크기(Limit)를 확인하여 오프셋이 Limit을 초과하면 트랩을 걸어 메모리를 보호합니다."
    },
    {
      "id": 55,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "현대 대부분의 상용 범용 운영체제는 세그멘테이션의 논리적 모듈화 이점과 페이징의 외부 단편화 방지 이점을 결합한 '세그멘테이션-페이징 혼용 기법(Paged Segmentation)'을 채택하고 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "사용자 관점에서는 가변 크기 세그먼트로 나누되, 각 세그먼트의 내부를 다시 고정 크기 페이지들로 분할하여 물리 메모리에 적재합니다."
    },
    {
      "id": 56,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "페이지 테이블 엔트리의 '더티 비트(Dirty Bit / Modified Bit)'가 1로 설정되어 있다는 것의 의미와 중요성은?",
      "options": [
        "해당 페이지가 메모리에 적재된 후 CPU에 의해 내용이 수정(Write)되었음을 의미하며, 페이지 교체(Page Replacement) 시 디스크에 변경 사항을 다시 기록(Write-back)해야 함을 나타낸다.",
        "해당 페이지에 바이러스가 감염되었음을 의미한다.",
        "해당 페이지를 영구 삭제해야 함을 의미한다.",
        "해당 페이지가 읽기 전용 상수임을 의미한다."
      ],
      "answer": 0,
      "explanation": "수정되지 않은 깨끗한(Clean) 페이지는 디스크 내용과 일치하므로 그냥 버리면 되지만, Dirty 페이지는 디스크에 덮어써야 하므로 I/O 발생 여부를 판단하는 핵심 비트입니다."
    },
    {
      "id": 57,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "역페이지 테이블(Inverted Page Table)은 프로세스마다 테이블을 두지 않고 물리 메모리의 프레임마다 하나의 엔트리를 두어, 시스템 전체에 단 하나의 테이블만 유지함으로써 페이지 테이블의 메모리 낭비를 줄인다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "물리 프레임 수만큼만 엔트리를 두어 메모리를 아끼지만, 주소 검색 시 해시 테이블 등을 쓰지 않으면 탐색 시간이 길어질 수 있습니다."
    },
    {
      "id": 58,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "프로세스가 실행 중 물리 메모리에 존재하지 않는 무효 페이지(Invalid Page)에 접근했을 때 CPU 하드웨어가 발생시키는 트랩은?",
      "options": [
        "페이지 폴트 (Page Fault)",
        "세그멘테이션 폴트",
        "스택 오버플로우",
        "시스템 리셋"
      ],
      "answer": 0,
      "explanation": "페이지 폴트가 발생하면 OS의 페이지 폴트 핸들러가 가동되어 스왑 공간에서 해당 페이지를 찾아 빈 프레임에 적재하고 페이지 테이블을 갱신합니다."
    },
    {
      "id": 59,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "페이지 크기를 4KB에서 2MB나 1GB의 거대 페이지(Huge Page)로 키우면 TLB 엔트리 하나가 커버하는 메모리 범위가 넓어져 TLB 적중률이 극적으로 향상된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "데이터베이스나 대규모 AI 모델처럼 거대한 연속 메모리를 사용하는 환경에서 TLB 미스 오버헤드를 줄이기 위해 Huge Pages를 널리 사용합니다."
    },
    {
      "id": 60,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "페이지 크기가 작을 때와 비교하여 페이지 크기를 크게 설정했을 때의 장단점으로 옳은 것은?",
      "options": [
        "장점: 페이지 테이블 크기가 줄어들고 TLB 효율이 좋아진다. / 단점: 마지막 페이지의 내부 단편화 낭비가 커진다.",
        "장점: 내부 단편화가 0이 된다. / 단점: 외부 단편화가 생긴다.",
        "장점: CPU 속도가 2배 빨라진다. / 단점: 디스크 I/O가 불가능해진다.",
        "장점: 메모리가 2배로 확장된다. / 단점: 아무런 변화가 없다."
      ],
      "answer": 0,
      "explanation": "페이지가 커지면 엔트리 수가 줄어 페이지 테이블 용량이 대폭 절약되지만 내부 단편화 손실은 커집니다."
    },
    {
      "id": 61,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "스와핑(Swapping)은 메모리가 부족할 때 유휴 상태의 프로세스 전체 또는 일부 페이지를 보조기억장치의 스왑 영역(Swap Space)으로 내보내고(Swap-out), 필요할 때 다시 불러오는(Swap-in) 기법이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "물리 메모리의 한계를 넘어 더 많은 프로세스를 다중 프로그래밍할 수 있도록 지원하는 가상 메모리의 기반 메커니즘입니다."
    },
    {
      "id": 62,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "공유 메모리(Shared Memory) 페이징에서 두 개 이상의 프로세스가 표준 C 라이브러리(`libc.so`) 같은 읽기 전용 코드를 공유하는 방법은?",
      "options": [
        "각 프로세스의 서로 다른 논리 페이지들이 물리 메모리의 동일한 프레임을 가리키도록 페이지 테이블 엔트리를 매핑한다.",
        "메모리를 공유할 수 없어 프로세스마다 물리 복사본을 각각 만든다.",
        "하드디스크에서만 라이브러리를 직접 읽어온다.",
        "모든 코드를 전역 변수로 선언한다."
      ],
      "answer": 0,
      "explanation": "페이지 테이블의 물리 프레임 번호를 동일하게 설정하면 코드의 물리적 중복 없이 수백 개의 프로세스가 단 하나의 메모리 사본을 안전하게 공유할 수 있습니다."
    },
    {
      "id": 63,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "페이지 테이블 엔트리의 접근 제어 비트(Protection Bits)는 해당 페이지에 대해 읽기(Read), 쓰기(Write), 실행(Execute) 권한을 각각 설정하여 코드 영역에 쓰기를 시도할 경우 오류를 발생시킨다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "W^X(Write XOR Execute) 보안 정책 등을 통해 버퍼 오버플로우 공격 시 셸코드가 실행되지 않도록 하드웨어적으로 차단합니다."
    },
    {
      "id": 64,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "동적 연속 메모리 할당에서 메모리 풀의 빈 공간들을 크기별로 관리하여 $2^k$ 크기 단위로 쪼개고 병합(Coalescing)하는 알고리즘은?",
      "options": [
        "버디 시스템 (Buddy System)",
        "슬랩 할당자",
        "라운드 로빈",
        "피포(FIFO)"
      ],
      "answer": 0,
      "explanation": "버디 시스템은 블록을 2의 거듭제곱 크기로 분할하고 해제 시 인접한 짝(Buddy) 블록을 빠르게 합쳐 외부 단편화를 관리하는 커널 할당 기법입니다."
    },
    {
      "id": 65,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "연속 메모리 할당의 최초 적합(First-fit)과 최적 적합(Best-fit) 중 통상적으로 실행 속도와 공간 효율성 면에서 최초 적합이 최적 적합보다 우수하거나 대등하다는 것이 실험적으로 알려져 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "First-fit은 탐색을 조기 종료할 수 있어 압도적으로 빠르며 외부 단편화 총량에서도 Best-fit보다 뒤지지 않습니다."
    },
    {
      "id": 66,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "가상 메모리(Virtual Memory)가 제공하는 핵심 이점이 아닌 것은?",
      "options": [
        "실제 물리 메모리(RAM) 용량보다 훨씬 큰 크기의 프로그램을 실행할 수 있다.",
        "프로세스마다 독립적인 가상 주소 공간을 제공하여 다른 프로세스의 메모리를 침범하지 못하도록 격리 및 보호한다.",
        "CPU의 발열을 물리적으로 완전히 제거하여 쿨러를 끌 수 있다.",
        "프로세스 간의 코드 및 데이터 공유를 매우 쉽게 만들어준다."
      ],
      "answer": 2,
      "explanation": "가상 메모리는 논리적 메모리 추상화 및 격리 기술이며 하드웨어의 물리적 발열을 없애는 기술이 아닙니다."
    },
    {
      "id": 67,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "페이지 오프셋(Offset, $d$)은 가상 주소에서나 물리 주소에서나 크기와 값이 100% 동일하게 유지된다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "페이지 내에서의 상대적 변위(Offset)는 프레임의 크기와 페이지의 크기가 같으므로 변환 없이 그대로 복사됩니다."
    },
    {
      "id": 68,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "주소 바인딩(Address Binding) 시점 중 프로그램 실행 도중 물리 메모리 내에서 프로세스의 위치가 동적으로 이동할 수 있는 가장 유연한 바인딩 방식은?",
      "options": [
        "실행 시간 바인딩 (Execution-time / Run-time Binding)",
        "컴파일 시간 바인딩 (Compile-time Binding)",
        "로드 시간 바인딩 (Load-time Binding)",
        "정적 링크 바인딩"
      ],
      "answer": 0,
      "explanation": "실행 시간 바인딩은 MMU 하드웨어의 지원을 받아 매 메모리 참조 시마다 주소를 동적으로 계산하므로 스와핑이나 메모리 이동에 필수적입니다."
    },
    {
      "id": 69,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "ox",
      "question": "컴파일 시간 바인딩은 소스 코드를 컴파일할 때 절대 주소(Absolute Address)가 확정되므로 프로그램이 메모리의 지정된 시작 위치에만 적재되어야 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "MS-DOS의 .COM 파일처럼 시작 번지가 고정되어 다중 프로그래밍 환경에는 부적합합니다."
    },
    {
      "id": 70,
      "subject": "os",
      "topic": "W3. 메모리 관리 & 페이징",
      "type": "mcq",
      "question": "다단계 페이징에서 4단계 페이징을 사용하는 64비트 x86-64 아키텍처의 경우, TLB 미스가 발생하면 단 한 번의 메모리 참조를 위해 물리 메모리를 몇 번 접근해야 하는가?",
      "options": [
        "1번",
        "2번",
        "4번",
        "5번 (페이지 테이블 4번 + 실제 데이터 1번)"
      ],
      "answer": 3,
      "explanation": "PML4 -> PDPT -> PD -> PT의 4단계 페이지 테이블 엔트리를 각각 순차 조회(4회)한 후 최종 물리 데이터에 접근(1회)하므로 총 5회의 접근이 필요하며 TLB의 중요성이 극대화됩니다."
    },
    {
      "id": 71,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "리눅스 및 유닉스 표준 바이너리 실행 파일 및 오브젝트 파일 포맷의 명칭은?",
      "options": [
        "ELF (Executable and Linkable Format)",
        "PE (Portable Executable)",
        "Mach-O",
        "COM"
      ],
      "answer": 0,
      "explanation": "ELF는 컴파일러가 생성하는 재배치 가능 오브젝트(`.o`), 최종 실행 파일, 공유 라이브러리(`.so`)의 통합 표준 포맷입니다."
    },
    {
      "id": 72,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "ELF 바이너리 파일 구조의 최상단에 위치하며, 매직 넘버(`0x7F 'E' 'L' 'F'`), 32/64비트 구분, 엔디안(Endianness), 진입점 주소(Entry Point)를 담고 있는 헤더는?",
      "options": [
        "ELF 헤더 (ELF Header)",
        "프로그램 헤더 테이블",
        "섹션 헤더 테이블",
        "심볼 테이블"
      ],
      "answer": 0,
      "explanation": "ELF 헤더는 파일의 정체성과 전체 구조의 크기 및 다른 헤더 테이블들의 위치(오프셋)를 명시하는 총괄 메타데이터입니다."
    },
    {
      "id": 73,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "ELF 파일에서 '섹션(Section)'과 '세그먼트(Segment)'의 관점(View) 차이로 올바른 것은?",
      "options": [
        "섹션은 컴파일/링킹(Linking View)을 위한 논리적 단위이고, 세그먼트는 운영체제 로더가 메모리에 적재(Execution View)하기 위해 유사 권한의 섹션들을 묶은 단위이다.",
        "섹션은 실행 파일에만 있고 세그먼트는 소스 코드에만 있다.",
        "섹션은 메모리에 적재되고 세그먼트는 디스크에서 버려진다.",
        "두 단위는 완전히 동일한 개념이다."
      ],
      "answer": 0,
      "explanation": "링크 시에는 섹션 헤더 테이블을 참조하여 세부 섹션별로 재배치하고, 실행 시에는 프로그램 헤더 테이블을 참조하여 세그먼트 단위로 메모리 페이지에 매핑합니다."
    },
    {
      "id": 74,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "ELF 바이너리의 주요 섹션 중 컴파일된 실제 CPU 기계어 명령어 코드(Instruction)가 저장되는 읽기/실행 전용 섹션은?",
      "options": [
        "`.text` 섹션",
        "`.data` 섹션",
        "`.bss` 섹션",
        "`.rodata` 섹션"
      ],
      "answer": 0,
      "explanation": "`.text`는 프로그램의 실행 가능한 기계어 코드가 위치하는 영역으로 임의 변경을 막기 위해 실행(X)과 읽기(R) 권한만 부여됩니다."
    },
    {
      "id": 75,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "C 언어 코드 `int count = 100;`과 같이 '초기화된 전역 변수 및 static 변수'가 저장되는 섹션은?",
      "options": [
        "`.data` 섹션",
        "`.bss` 섹션",
        "`.text` 섹션",
        "`.symtab` 섹션"
      ],
      "answer": 0,
      "explanation": "초기값이 지정된 전역/정적 변수는 초기값을 파일에 보관해야 하므로 `.data` 섹션에 저장되어 디스크 용량을 차지합니다."
    },
    {
      "id": 76,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "C 언어 코드 `int buffer[10000];`과 같이 '초기화되지 않은 전역 변수'가 저장되는 섹션과 그 파일 크기 특성은?",
      "options": [
        "`.bss` 섹션 / 초기값이 없으므로(0으로 초기화 예정) 디스크 실행 파일 내에는 실제 바이트를 차지하지 않고 필요한 크기 메타데이터만 저장된다.",
        "`.data` 섹션 / 파일 크기가 40KB만큼 즉시 커진다.",
        "`.rodata` 섹션 / 읽기 전용으로 디스크에 박힌다.",
        "`.stack` 섹션 / 함수 호출 시에만 생성된다."
      ],
      "answer": 0,
      "explanation": "`.bss`(Block Started by Symbol)는 0으로 채워질 공간이므로 디스크 용량을 아끼기 위해 파일에는 바이트를 할당하지 않고, 실행 시 로더가 메모리에 0으로 할당합니다."
    },
    {
      "id": 77,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "C 언어에서 문자열 리터럴 `\"Hello, World!\"`나 `const int MAX = 50;`과 같이 수정 불가능한 상수가 저장되는 섹션은?",
      "options": [
        "`.rodata` (Read-Only Data) 섹션",
        "`.data` 섹션",
        "`.bss` 섹션",
        "`.text` 섹션"
      ],
      "answer": 0,
      "explanation": "읽기 전용 데이터(Read-Only Data)를 모아두는 섹션으로 쓰기 권한이 부여되지 않아 런타임 위변조를 방지합니다."
    },
    {
      "id": 78,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "프로세스(Process)의 정의로 가장 올바른 것은?",
      "options": [
        "하드디스크에 파일 형태로 저장되어 있는 수동적인 명령어 집합(프로그램)",
        "메모리에 적재되어 CPU 자원을 할당받아 실행 중인 능동적인 프로그램 인스턴스 (Program in Execution)",
        "컴퓨터 모니터에 출력되는 텍스트 창",
        "인터넷을 통해 전송되는 압축 파일"
      ],
      "answer": 1,
      "explanation": "프로그램이 보조기억장치에 있는 정적인 코드라면, 프로세스는 메모리에 로드되어 PCB, PC, 스택, 힙을 갖추고 활동하는 능동적 개체입니다."
    },
    {
      "id": 79,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "실행 중인 프로세스의 4대 메모리 레이아웃 구조가 낮은 메모리 주소부터 높은 메모리 주소 순서로 올바르게 나열된 것은?",
      "options": [
        "Text(Code) -> Data / BSS -> Heap(위로 증가) -> Stack(아래로 증가)",
        "Stack -> Heap -> Data -> Text",
        "Heap -> Stack -> Text -> Data",
        "Data -> Text -> Stack -> Heap"
      ],
      "answer": 0,
      "explanation": "하위 주소에 고정 크기의 텍스트와 데이터가 오고, 그 위에 동적 할당 공간인 힙(위로 확장)과 함수 호출 공간인 스택(상위 주소에서 아래로 확장)이 서로 마주보며 자랍니다."
    },
    {
      "id": 80,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "C 언어에서 `malloc()`, C++의 `new` 등을 통해 런타임에 동적으로 할당되는 메모리가 위치하는 프로세스 영역은?",
      "options": [
        "힙 (Heap) 영역",
        "스택 (Stack) 영역",
        "데이터 (Data) 영역",
        "텍스트 (Text) 영역"
      ],
      "answer": 0,
      "explanation": "개발자가 원하는 시점에 동적으로 메모리를 확보하고 해제(`free`)하는 가변 크기 공간입니다."
    },
    {
      "id": 81,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "함수 호출 시의 매개변수, 반환 주소(Return Address), 함수의 지역 변수(Local Variables)가 임시로 저장되는 프로세스 메모리 영역은?",
      "options": [
        "스택 (Stack) 영역",
        "힙 (Heap) 영역",
        "BSS 영역",
        "코드 영역"
      ],
      "answer": 0,
      "explanation": "함수가 호출될 때 스택 프레임(Stack Frame)이 push되고 함수가 리턴되면 pop되어 자동으로 정리되는 LIFO 구조의 메모리 영역입니다."
    },
    {
      "id": 82,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "운영체제가 각 프로세스를 제어하고 관리하기 위해 프로세스에 관한 모든 핵심 정보를 유지하는 커널의 핵심 자료구조는?",
      "options": [
        "PCB (Process Control Block)",
        "TCB (Translation Control Block)",
        "FCB (File Control Block)",
        "DCB (Device Control Block)"
      ],
      "answer": 0,
      "explanation": "PCB는 프로세스마다 하나씩 생성되는 '프로세스의 주민등록증'으로 PID, 프로세스 상태, PC, 레지스터 저장값, 스케줄링 정보, 메모리 맵 등을 담고 있습니다."
    },
    {
      "id": 83,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "프로세스 제어 블록(PCB)에 저장되는 정보 항목이 아닌 것은?",
      "options": [
        "프로세스 식별자 (PID: Process ID)",
        "프로그램 카운터 (PC) 및 CPU 레지스터 값들의 저장 상태",
        "프로세스 상태 (Ready, Running, Waiting 등)",
        "컴퓨터 모니터의 화면 밝기 및 해상도 설정값"
      ],
      "answer": 3,
      "explanation": "모니터 밝기 등 하드웨어 디스플레이 설정은 프로세스 개별 상태와 무관하며, PCB는 순수하게 해당 프로세스의 CPU 실행 문맥을 복원하기 위한 정보를 담습니다."
    },
    {
      "id": 84,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "프로세스의 표준 5상태 전이 모델(5-State Model)의 상태 구성으로 올바른 것은?",
      "options": [
        "생성(New), 준비(Ready), 실행(Running), 대기(Waiting/Blocked), 종료(Terminated)",
        "시작, 중지, 재시작, 삭제, 완료",
        "부팅, 연산, 출력, 저장, 종료",
        "활성, 비활성, 슬립, 동면, 리셋"
      ],
      "answer": 0,
      "explanation": "생성(New) -> CPU 할당 대기(Ready) <-> CPU 실행(Running) -> I/O 대기(Waiting) -> 작업 완료(Terminated)의 5가지 상태로 전이합니다."
    },
    {
      "id": 85,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "프로세스 상태 전이 중 준비(Ready) 상태에서 스케줄러에 의해 선택되어 실행(Running) 상태로 전이하는 동작을 무엇이라 부르는가?",
      "options": [
        "디스패치 (Dispatch)",
        "타임아웃 (Timeout)",
        "블록 (Block)",
        "웨이크업 (Wakeup)"
      ],
      "answer": 0,
      "explanation": "스케줄러가 Ready 큐의 선두 프로세스를 골라 CPU를 배정하고 문맥을 적재하여 실행을 시작시키는 것을 디스패치라고 합니다."
    },
    {
      "id": 86,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "실행(Running) 상태의 프로세스가 대기(Waiting/Blocked) 상태로 전이되는 전형적인 원인은?",
      "options": [
        "I/O 요청(디스크 읽기 등)을 발행하여 I/O 완료 응답을 기다려야 할 때",
        "할당된 CPU 타임 퀀텀이 만료되었을 때",
        "프로세스가 정상적으로 연산을 마쳤을 때",
        "컴퓨터 마우스가 움직였을 때"
      ],
      "answer": 0,
      "explanation": "I/O 작업이나 이벤트 발생을 기다려야 할 때는 CPU를 쥐고 있을 필요가 없으므로 자발적으로 Waiting 상태로 전환되어 I/O 대기 큐로 이동합니다."
    },
    {
      "id": 87,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "실행(Running) 상태의 프로세스가 할당된 CPU 시간(Time Slice / Quantum)을 모두 소진했을 때 타이머 인터럽트에 의해 전이되는 상태는?",
      "options": [
        "준비 (Ready) 상태",
        "대기 (Waiting) 상태",
        "종료 (Terminated) 상태",
        "생성 (New) 상태"
      ],
      "answer": 0,
      "explanation": "타임아웃 시에는 I/O를 기다리는 것이 아니라 CPU만 다시 받으면 즉시 실행 가능하므로 Ready 큐의 맨 뒤로 이동합니다."
    },
    {
      "id": 88,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "문맥 교환(Context Switch)의 정의로 가장 올바른 것은?",
      "options": [
        "CPU가 현재 실행 중인 프로세스의 상태(문맥)를 해당 PCB에 저장하고, 새로운 프로세스의 PCB로부터 이전 상태를 복원하여 CPU의 실행 권한을 전환하는 작업",
        "컴퓨터의 운영체제를 다른 종류의 운영체제로 교체하는 것",
        "파일의 확장자를 `.txt`에서 `.html`로 바꾸는 것",
        "C 언어 코드를 파이썬 코드로 번역하는 것"
      ],
      "answer": 0,
      "explanation": "시분할 멀티태스킹의 핵심 메커니즘으로 현재 프로세스의 CPU 레지스터를 PCB에 저장하고 다음 프로세스의 레지스터를 CPU로 복원합니다."
    },
    {
      "id": 89,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "문맥 교환(Context Switch)이 빈번하게 발생할 때 시스템 성능에 미치는 순수한 오버헤드 요인이 아닌 것은?",
      "options": [
        "PCB 저장 및 복원 시 소비되는 CPU 사이클",
        "새 프로세스가 실행되면서 발생하는 CPU 캐시 메모리 미스(Cold Cache) 및 오염",
        "TLB 플러시로 인한 유효 메모리 접근 시간(EAT) 증가",
        "하드디스크의 물리적 플래터 회전 속도 증가"
      ],
      "answer": 3,
      "explanation": "문맥 교환은 순수 소프트웨어/레지스터 상태 전환 오버헤드이며 하드디스크의 모터 회전 속도와는 전혀 무관합니다."
    },
    {
      "id": 90,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "`fork()` 시스템 콜을 호출했을 때 부모 프로세스와 자식 프로세스에게 각각 반환되는 반환값(Return Value)의 구분이 올바른 것은?",
      "options": [
        "부모 프로세스: 새로 생성된 자식의 PID (양의 정수) / 자식 프로세스: 0",
        "부모 프로세스: 0 / 자식 프로세스: -1",
        "부모 프로세스: 1 / 자식 프로세스: 1",
        "부모 프로세스: 자식의 PID / 자식 프로세스: 부모의 PID"
      ],
      "answer": 0,
      "explanation": "단일 호출로 2개의 프로세스가 동시에 리턴하며, 코드는 반환값이 0인지 양수인지 검사(`if (pid == 0)`)하여 자식과 부모의 실행 흐름을 분기합니다."
    },
    {
      "id": 91,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "`fork()` 호출 시 자식 프로세스가 부모의 모든 메모리 페이지를 즉시 복사하지 않고, 두 프로세스가 동일한 물리 페이지를 공유하다가 둘 중 하나가 쓰기(수정)를 시도할 때 비로소 해당 페이지만 복사하는 최적화 기법은?",
      "options": [
        "COW (Copy-on-Write: 쓰기 시 복사)",
        "Direct Paging",
        "Lazy Evaluation",
        "Write-Through"
      ],
      "answer": 0,
      "explanation": "`fork()` 직후 대다수 프로그램이 `exec()`를 호출하여 주소 공간을 버리고 새 프로그램을 로드하므로 불필요한 전체 메모리 복사를 방지하는 핵심 최적화입니다."
    },
    {
      "id": 92,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "자식 프로세스가 `exit()`를 호출하여 실행을 종료했으나, 부모 프로세스가 아직 `wait()`를 호출하지 않아 자식의 종료 상태(반환값)가 회수되지 않고 PCB가 커널에 남아있는 상태의 프로세스는?",
      "options": [
        "좀비 프로세스 (Zombie Process)",
        "고아 프로세스 (Orphan Process)",
        "데몬 프로세스 (Daemon Process)",
        "인터럽트 프로세스"
      ],
      "answer": 0,
      "explanation": "프로세스의 실행은 끝났으나 부모가 종료 코드를 읽어가지 않아 프로세스 테이블 엔트리(PID)를 차지하고 있는 죽은 상태의 프로세스입니다."
    },
    {
      "id": 93,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "부모 프로세스가 자식 프로세스보다 먼저 종료되어 버려 부모를 잃어버린 자식 프로세스를 무엇이라 부르며, 운영체제는 이를 어떻게 처리하는가?",
      "options": [
        "고아 프로세스 (Orphan Process) / 최상위 루트 프로세스인 `init` (또는 `systemd`, PID 1) 프로세스가 새로운 부모로 입양(Adopt)하여 관리 및 회수한다.",
        "좀비 프로세스 / 즉시 컴퓨터 전원을 끈다.",
        "미아 프로세스 / 해당 프로세스의 메모리를 강제 동결한다.",
        "데드락 프로세스 / 모든 파일을 삭제한다."
      ],
      "answer": 0,
      "explanation": "부모가 먼저 죽은 고아 프로세스는 PID 1번인 `init`/`systemd`가 양부모가 되어 자식이 종료될 때 `wait()`를 호출하여 좀비가 되는 것을 막아줍니다."
    },
    {
      "id": 94,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "ox",
      "question": "스택(Stack) 영역이 너무 깊은 재귀 호출로 인해 힙(Heap) 영역의 경계를 침범하거나 허용 한도를 넘어서면 '스택 오버플로우(Stack Overflow)' 오류가 발생한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "스택 포인터가 한계 경계를 넘어 유효하지 않은 주소 공간을 건드릴 때 MMU가 예외를 발생시키고 프로세스가 비정상 종료됩니다."
    },
    {
      "id": 95,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "스레드(Thread)가 동일 프로세스 내의 다른 스레드와 공유하는 자원과 독립적으로 개별 유지하는 자원의 구분이 올바른 것은?",
      "options": [
        "공유: 코드(Text), 데이터(Data), 힙(Heap), 열린 파일 / 개별 유지: 스택(Stack), PC, 레지스터 집합",
        "공유: 스택, PC / 개별 유지: 코드, 힙",
        "공유: 모든 자원 / 개별 유지: 아무것도 없음",
        "공유: 없음 / 개별 유지: 모든 자원"
      ],
      "answer": 0,
      "explanation": "스레드는 가상 메모리 공간(코드, 데이터, 힙)을 함께 공유하여 협업하며, 독립적인 실행 흐름 추적을 위해 스택과 레지스터(PC)만을 독립적으로 보유합니다."
    },
    {
      "id": 96,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "ox",
      "question": "스레드 간의 문맥 교환은 가상 주소 공간(페이지 테이블)을 변경할 필요가 없으므로 프로세스 간 문맥 교환보다 훨씬 빠르고 오버헤드가 적다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "동일 프로세스 내 스레드는 주소 공간을 공유하므로 TLB를 플러시할 필요가 없어 캐시 친화적이고 문맥 교환 속도가 빠릅니다."
    },
    {
      "id": 97,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "스케줄링 알고리즘 중 준비 큐에 도착한 순서대로 CPU를 할당하며 비선점형(Non-preemptive) 방식인 가장 단순한 알고리즘은?",
      "options": [
        "FCFS (First-Come, First-Served)",
        "SJF (Shortest Job First)",
        "Round Robin (RR)",
        "다단계 피드백 큐"
      ],
      "answer": 0,
      "explanation": "먼저 온 작업을 먼저 처리하는 FIFO 큐 방식으로 앞선 긴 작업 때문에 뒤의 짧은 작업들이 오래 대기하는 호위 효과(Convoy Effect)가 발생합니다."
    },
    {
      "id": 98,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "시분할 시스템을 위해 설계된 선점형 스케줄링으로, 각 프로세스에 동일한 CPU 시간 할당량(Time Quantum)을 부여하고 시간이 끝나면 큐의 맨 뒤로 보내는 알고리즘은?",
      "options": [
        "라운드 로빈 (Round Robin, RR)",
        "우선순위 스케줄링",
        "최단 잔여 시간 우선 (SRTF)",
        "FCFS"
      ],
      "answer": 0,
      "explanation": "응답 시간을 보장하는 공평한 대화형 스케줄러로 타임 퀀텀의 크기가 성능을 좌우합니다."
    },
    {
      "id": 99,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "ox",
      "question": "라운드 로빈(RR) 스케줄링에서 타임 퀀텀이 무한히 커지면 FCFS 알고리즘과 동작이 완전히 동일해진다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "타임아웃이 발생하지 않아 프로세스가 스스로 종료되거나 I/O를 요청할 때까지 CPU를 독점하므로 선입선출(FCFS)이 됩니다."
    },
    {
      "id": 100,
      "subject": "os",
      "topic": "W4. ELF & 프로세스 관리",
      "type": "mcq",
      "question": "현대 리눅스 커널의 표준 기본 CPU 스케줄러로, 각 프로세스의 가상 실행 시간(`vruntime`)을 추적하여 레드-블랙 트리(Red-Black Tree)를 통해 가장 CPU를 적게 쓴 프로세스에 공평하게 CPU를 할당하는 알고리즘은?",
      "options": [
        "CFS (Completely Fair Scheduler: 완전 공평 스케줄러)",
        "O(1) 스케줄러",
        "다단계 큐 스케줄러",
        "비선점형 우선순위 스케줄러"
      ],
      "answer": 0,
      "explanation": "가장 낮은 `vruntime`을 가진 프로세스를 $O(\\log N)$에 선택하여 모든 프로세스에 CPU 시간을 완전히 공평하게 분배합니다."
    }
  ],
  "db": [
    {
      "id": 1,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "전통적인 파일 처리 시스템(File Processing System)이 가졌던 가장 치명적인 2대 문제점은?",
      "options": [
        "데이터 종속성(Data Dependency)과 데이터 중복성(Data Redundancy)",
        "파일의 용량 부족과 네트워크 속도 저하",
        "데이터의 암호화와 압축 불가",
        "하드웨어 단가 상승과 전력 과다 소비"
      ],
      "answer": 0,
      "explanation": "응용 프로그램이 파일의 물리적 저장 구조에 종속되고(종속성), 파일마다 동일 데이터가 중복 저장되어 불일치와 불일관성이 발생하는 것이 파일 시스템의 핵심 한계였습니다."
    },
    {
      "id": 2,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터 중복성(Data Redundancy)으로 인해 발생하는 2차적 문제점으로 옳지 않은 것은?",
      "options": [
        "데이터 수정 시 일부 파일만 갱신되어 데이터 간 불일치(Inconsistency)가 발생한다.",
        "저장 공간이 불필요하게 낭비된다.",
        "데이터의 무결성(Integrity)을 유지하기 극히 어려워진다.",
        "데이터 검색 속도가 항상 100배 빨라진다."
      ],
      "answer": 3,
      "explanation": "데이터 중복은 저장 공간 낭비와 불일관성을 초래하며 데이터 검색 속도를 빠르게 해주지 않습니다."
    },
    {
      "id": 3,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스(Database)의 4대 정의적 요소(통합, 저장, 운영, 공용) 중 '중복을 최소화하여 여러 파일의 데이터를 하나로 모았다'는 의미를 갖는 것은?",
      "options": [
        "통합된 데이터 (Integrated Data)",
        "저장된 데이터 (Stored Data)",
        "운영 데이터 (Operational Data)",
        "공용 데이터 (Shared Data)"
      ],
      "answer": 0,
      "explanation": "데이터의 불필요한 중복을 배제하고 최소한의 통제된 중복만을 허용하여 일관성을 확보한 통합 데이터의 정의입니다."
    },
    {
      "id": 4,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스의 4대 기본 특성 중 '질의(Query)에 대해 수초 이내의 빠른 응답 시간을 보장해야 한다'는 특성은?",
      "options": [
        "실시간 접근성 (Real-time Accessibility)",
        "계속적인 변화 (Continuous Evolution)",
        "동시 공유 (Concurrent Sharing)",
        "내용에 의한 참조 (Content Reference)"
      ],
      "answer": 0,
      "explanation": "사용자의 요구에 실시간으로 즉각 반응하여 결과를 반환해야 하는 실시간 접근성의 특성입니다."
    },
    {
      "id": 5,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스에서 데이터를 검색할 때 물리적인 저장 주소나 위치가 아니라, '데이터가 가지고 있는 값(내용)'에 기반하여 조건을 검색하는 특성은?",
      "options": [
        "내용에 의한 참조 (Content Reference)",
        "주소에 의한 참조 (Address Reference)",
        "포인터 체인 참조",
        "시퀀셜 순차 검색"
      ],
      "answer": 0,
      "explanation": "`WHERE age >= 20`처럼 물리적 디스크 오프셋이 아닌 데이터의 내용(값)을 조건으로 데이터를 식별합니다."
    },
    {
      "id": 6,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "ANSI/SPARC 3단계 데이터베이스 스키마 구조의 3계층으로 올바른 것은?",
      "options": [
        "외부 스키마(External), 개념 스키마(Conceptual), 내부 스키마(Internal)",
        "사용자 스키마, 관리자 스키마, 하드웨어 스키마",
        "상위 스키마, 중간 스키마, 하위 스키마",
        "논리 스키마, 물리 스키마, 네트워크 스키마"
      ],
      "answer": 0,
      "explanation": "개별 사용자의 뷰인 외부 스키마, 조직 전체의 논리적 구조인 개념 스키마, 디스크 저장 구조인 내부 스키마로 분리됩니다."
    },
    {
      "id": 7,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "ANSI/SPARC 3단계 구조에서 '개념 스키마(Conceptual Schema)'에 대한 설명으로 옳은 것은?",
      "options": [
        "모든 개별 사용자 관점의 다양한 서브스키마(View)의 총칭이다.",
        "데이터베이스의 전체적인 논리적 구조로서, 모든 응용 프로그램과 사용자들이 필요로 하는 데이터를 통합하여 전체 조직의 관점에서 정의한 단 하나의 스키마이다.",
        "디스크의 블록 크기, 인덱스 B-Tree 구조, 레코드 저장 방식을 정의한 물리적 스키마이다.",
        "사용자가 작성한 SQL 쿼리문 자체를 의미한다."
      ],
      "answer": 1,
      "explanation": "개념 스키마는 개체, 관계, 제약조건을 포함하는 기관 전체의 범기관적 논리적 데이터 구조이며 시스템당 하나만 존재합니다."
    },
    {
      "id": 8,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "ANSI/SPARC 구조의 '논리적 데이터 독립성(Logical Data Independence)'이란 무엇인가?",
      "options": [
        "내부 스키마를 변경해도 개념 스키마가 영향을 받지 않는 성질",
        "개념 스키마가 변경(예: 새로운 속성이나 릴레이션 추가)되어도 기존의 외부 스키마(사용자 뷰)와 응용 프로그램은 영향을 받지 않는 성질",
        "하드디스크를 SSD로 교체해도 데이터가 깨지지 않는 성질",
        "SQL 문법이 영구적으로 변하지 않는 성질"
      ],
      "answer": 1,
      "explanation": "개념-외부 사상(Mapping)을 조정함으로써 개념 스키마가 확장되더라도 기존 응용 프로그램의 수정 없이 독립성을 보장합니다."
    },
    {
      "id": 9,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "ANSI/SPARC 구조의 '물리적 데이터 독립성(Physical Data Independence)'이란 무엇인가?",
      "options": [
        "성능 향상을 위해 내부 스키마(저장 장치 구조, 인덱스 생성/수정 등)를 변경하더라도 개념 스키마나 외부 스키마가 영향을 받지 않는 성질",
        "외부 스키마를 고치면 내부 스키마가 자동 변경되는 성질",
        "물리적 서버를 꺼도 데이터베이스가 돌아가는 성질",
        "테이블의 열 이름을 바꾸어도 쿼리가 실행되는 성질"
      ],
      "answer": 0,
      "explanation": "내부-개념 사상을 통해 인덱스를 재구성하거나 저장 경로를 바꾸어도 논리적 개념 구조나 사용자 프로그램이 전혀 영향받지 않습니다."
    },
    {
      "id": 10,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터 언어(Data Language) 중 테이블 생성, 구조 변경, 삭제를 수행하는 데이터 정의어(DDL)에 해당하는 명령어 세트는?",
      "options": [
        "`CREATE`, `ALTER`, `DROP`",
        "`SELECT`, `INSERT`, `UPDATE`, `DELETE`",
        "`GRANT`, `REVOKE`",
        "`COMMIT`, `ROLLBACK`"
      ],
      "answer": 0,
      "explanation": "DDL(Data Definition Language)은 스키마 구조를 정의·수정·삭제하는 명령어로 `CREATE`, `ALTER`, `DROP` 등이 있습니다."
    },
    {
      "id": 11,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스에 저장된 실제 데이터를 검색, 삽입, 수정, 삭제하는 데이터 조작어(DML) 명령어로 옳은 것은?",
      "options": [
        "`SELECT`, `INSERT`, `UPDATE`, `DELETE`",
        "`CREATE`, `ALTER`, `DROP`",
        "`GRANT`, `REVOKE`",
        "`SAVEPOINT`, `ROLLBACK`"
      ],
      "answer": 0,
      "explanation": "DML(Data Manipulation Language)은 사용자가 튜플을 질의하고 조작하는 명령어입니다."
    },
    {
      "id": 12,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터 제어어(DCL: Data Control Language)의 주된 역할 두 가지는?",
      "options": [
        "데이터의 보안/권한 부여(`GRANT`, `REVOKE`) 및 트랜잭션 병행 제어/무결성 유지(`COMMIT`, `ROLLBACK`)",
        "HTML 화면 렌더링 및 CSS 스타일 적용",
        "컴파일 및 바이너리 링크",
        "데이터베이스 테이블의 인덱스 크기 축소"
      ],
      "answer": 0,
      "explanation": "DCL은 보안, 무결성, 권한 관리, 트랜잭션 제어를 담당합니다."
    },
    {
      "id": 13,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스 관리 시스템(DBMS)이 시스템 카탈로그(System Catalog / Data Dictionary)에 저장하는 '데이터에 관한 데이터'를 무엇이라 부르는가?",
      "options": [
        "메타데이터 (Metadata)",
        "빅데이터 (Big Data)",
        "원시 데이터 (Raw Data)",
        "휘발성 데이터"
      ],
      "answer": 0,
      "explanation": "테이블 정의, 속성 타입, 제약조건, 사용자 권한 등 스키마에 관한 정보를 메타데이터라고 합니다."
    },
    {
      "id": 14,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "DBMS 엔진의 주요 컴포넌트 중 사용자가 제출한 고수준의 SQL 쿼리를 파싱하고 검사한 뒤 최적의 실행 계획(Execution Plan)을 세워 바이트코드로 변환하는 모듈은?",
      "options": [
        "질의 최적화기 및 처리기 (Query Optimizer / Processor)",
        "버퍼 관리자",
        "회복 관리자",
        "동시성 제어기"
      ],
      "answer": 0,
      "explanation": "옵티마이저는 비용 모델을 바탕으로 다양한 인덱스 및 조인 방식 중 가장 적은 I/O 비용의 최적 실행 계획을 수립합니다."
    },
    {
      "id": 15,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스 관리자(DBA: Database Administrator)의 핵심 직무에 해당하지 않는 것은?",
      "options": [
        "데이터베이스의 스키마 정의 및 물리적 저장 구조 설계",
        "사용자 계정 생성, 접근 권한 부여 및 보안 정책 수립",
        "시스템 장애에 대비한 주기적 백업 및 회복(복구) 절차 관리",
        "스마트폰 모바일 화면의 UI 버튼 디자인 및 색상 선정"
      ],
      "answer": 3,
      "explanation": "DBA는 데이터베이스 시스템의 설계, 성능 튜닝, 보안, 백업 및 복구 등 데이터 인프라 전반을 총괄합니다."
    },
    {
      "id": 16,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "시스템 카탈로그(데이터 사전)는 DBMS 스스로 생성하고 갱신하며, 일반 사용자도 `SELECT` 문을 통해 그 메타데이터 내용을 검색해 볼 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "시스템 카탈로그는 일반 테이블과 동일한 형태로 저장되어 질의가 가능하지만 무결성 유지를 위해 사용자가 `UPDATE`/`DELETE`로 직접 수정할 수는 없습니다."
    },
    {
      "id": 17,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "파일 시스템 대비 DBMS를 도입했을 때의 잠재적인 단점(비용)으로 옳은 것은?",
      "options": [
        "소프트웨어 구입 비용 및 고성능 하드웨어 요구로 인한 초기 구축 비용의 증가와 시스템 복잡성 증대",
        "데이터 중복성이 10배 증가하는 문제",
        "데이터 무결성을 지킬 수 없게 되는 문제",
        "여러 사용자의 동시 접근이 원천 차단되는 문제"
      ],
      "answer": 0,
      "explanation": "DBMS 라이선스 비용, 고사양 서버 자원 필요, 장애 발생 시 복잡한 회복 절차 등이 단점으로 꼽힙니다."
    },
    {
      "id": 18,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "외부 스키마(External Schema)는 개별 사용자나 응용 프로그래머가 보는 논리적 데이터 구조이므로, 동일한 데이터베이스에 대해 여러 개의 서로 다른 외부 스키마가 존재할 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "부서나 직무에 따라 서로 다른 뷰(View)를 정의할 수 있으므로 외부 스키마는 다수 존재합니다."
    },
    {
      "id": 19,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "내부 스키마(Internal Schema)는 개념 스키마의 물리적 저장 표현으로, 데이터베이스 시스템 전체에 단 하나만 존재한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "실제 물리적 디스크 저장 장치에 구현된 물리적 구조이므로 시스템당 단 하나만 존재합니다."
    },
    {
      "id": 20,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스의 상태를 한 상태에서 다른 일관된 상태로 변환시키는 논리적 작업의 최소 단위를 무엇이라 부르는가?",
      "options": [
        "트랜잭션 (Transaction)",
        "프로세스",
        "인덱스",
        "커서"
      ],
      "answer": 0,
      "explanation": "트랜잭션은 분할할 수 없는 원자적(All-or-Nothing) 연산의 단위입니다."
    },
    {
      "id": 21,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "트랜잭션이 반드시 준수해야 하는 4대 특성(ACID)으로 올바른 것은?",
      "options": [
        "원자성(Atomicity), 일관성(Consistency), 격리성/고립성(Isolation), 지속성(Durability)",
        "접근성, 가용성, 신뢰성, 기밀성",
        "정확성, 복잡성, 가변성, 독립성",
        "자동성, 통일성, 안전성, 분산성"
      ],
      "answer": 0,
      "explanation": "ACID는 데이터베이스 트랜잭션의 신뢰성을 보장하는 4대 기본 특성입니다."
    },
    {
      "id": 22,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "트랜잭션의 원자성(Atomicity)은 트랜잭션 내의 모든 연산이 완벽하게 완료(Commit)되거나, 실패 시 아무것도 실행되지 않은 상태로 취소(Rollback)되어야 함을 보장한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "전부 성공하든지 전부 취소되든지 하는 'All or Nothing' 원칙입니다."
    },
    {
      "id": 23,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "여러 트랜잭션이 동시에 실행될 때 한 트랜잭션의 중간 연산 결과가 다른 트랜잭션에 노출되지 않도록 제어하는 ACID 특성은?",
      "options": [
        "격리성 / 고립성 (Isolation)",
        "원자성",
        "일관성",
        "지속성"
      ],
      "answer": 0,
      "explanation": "동시에 실행되는 트랜잭션들이 서로 간섭하지 못하게 하여 마치 혼자 순차적으로 실행된 것 같은 결과를 보장합니다."
    },
    {
      "id": 24,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "스키마(Schema)가 데이터베이스의 정적인 구조와 제약조건을 정의한 틀(내포, Intension)이라면, 인스턴스(Instance)는 특정 시점에 데이터베이스에 실제로 저장된 데이터 값들의 상태(외연, Extension)를 의미한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "스키마는 거의 변하지 않는 데이터베이스의 구조적 정의이고, 인스턴스는 삽입/삭제로 시시각각 변하는 실제 데이터 값들의 집합입니다."
    },
    {
      "id": 25,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터 조작어(DML) 중 '사용자가 원하는 데이터가 무엇(What)인지만 명시하고 어떻게(How) 찾을지는 시스템에 위임하는' 언어 형태는?",
      "options": [
        "비절차적(선언적) DML (Non-procedural / Declarative DML, 예: SQL)",
        "절차적 DML (Procedural DML)",
        "기계어 DML",
        "어셈블리 DML"
      ],
      "answer": 0,
      "explanation": "SQL은 원하는 조건(What)만 지정하면 DBMS 옵티마이저가 최적 경로(How)를 결정하는 비절차적 언어입니다."
    },
    {
      "id": 26,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "동시 공유(Concurrent Sharing) 특성은 수천 명의 사용자가 동시에 같은 데이터에 접근하더라도 데이터의 일관성이 훼손되지 않도록 병행 제어(Concurrency Control)가 이루어짐을 의미한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "락(Locking)이나 MVCC 등의 기술을 통해 동시 접근 시의 갱신 분실, 모순성 등을 방지합니다."
    },
    {
      "id": 27,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "데이터베이스 설계(Database Design)의 4대 표준 단계 순서로 올바른 것은?",
      "options": [
        "요구조건 분석 -> 개념적 설계 -> 논리적 설계 -> 물리적 설계",
        "물리적 설계 -> 논리적 설계 -> 개념적 설계 -> 요구조건 분석",
        "개념적 설계 -> 요구조건 분석 -> 물리적 설계 -> 논리적 설계",
        "논리적 설계 -> 개념적 설계 -> 요구조건 분석 -> 물리적 설계"
      ],
      "answer": 0,
      "explanation": "요구사항 분석을 거쳐 DBMS에 독립적인 ER 다이어그램을 도출(개념적 설계)하고, 이를 관계형 테이블 스키마로 변환(논리적 설계)한 뒤 디스크 저장 구조 및 인덱스를 결정(물리적 설계)합니다."
    },
    {
      "id": 28,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "개념적 설계(Conceptual Design) 단계의 대표적인 산출물은 특정 상용 DBMS 제품(오라클, MySQL 등)에 전혀 종속되지 않는 고수준의 'ER 다이어그램'이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "개념적 설계는 소프트웨어나 하드웨어 환경과 무관하게 비즈니스 데이터 요구사항을 개념적 모델로 추상화하는 단계입니다."
    },
    {
      "id": 29,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "mcq",
      "question": "논리적 설계(Logical Design) 단계의 주된 작업 내용은?",
      "options": [
        "개념적 ER 모델을 목표 DBMS가 지원하는 데이터 모델(예: 관계형 모델)의 릴레이션 스키마로 사상(Mapping)하고 정규화(Normalization)를 수행하는 것",
        "하드디스크의 블록 크기와 섹터를 포맷하는 것",
        "데이터베이스 관리자의 비밀번호를 설정하는 것",
        "사용자 인터뷰를 진행하여 기능 요구사항을 작성하는 것"
      ],
      "answer": 0,
      "explanation": "ER 다이어그램을 관계형 테이블로 변환하고 이상 현상을 제거하기 위해 정규화를 적용하는 단계입니다."
    },
    {
      "id": 30,
      "subject": "db",
      "topic": "Chap 1. DBMS 개요 & 3단계 스키마",
      "type": "ox",
      "question": "물리적 설계(Physical Design) 단계에서는 데이터 접근 경로인 인덱스(B-Tree, Hash), 레코드 저장 클러스터링, 파티셔닝, 버퍼 풀 크기 등을 결정하여 성능을 최적화한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "특정 DBMS와 하드웨어 환경의 물리적 특성을 고려하여 트랜잭션 처리 속도와 공간 효율을 극대화하는 설계 단계입니다."
    },
    {
      "id": 31,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "1976년 피터 첸(Peter Chen)이 제안한 ER 모델(개체-관계 모델)의 기본 그래픽 기호 매핑으로 올바른 것은?",
      "options": [
        "개체(Entity): 직사각형 / 속성(Attribute): 타원 / 관계(Relationship): 마름모",
        "개체: 원 / 속성: 삼각형 / 관계: 사각형",
        "개체: 마름모 / 속성: 직사각형 / 관계: 타원",
        "개체: 육각형 / 속성: 별표 / 관계: 실선"
      ],
      "answer": 0,
      "explanation": "ER 다이어그램의 기본 3대 요소 기호는 개체(직사각형), 속성(타원), 관계(마름모)입니다."
    },
    {
      "id": 32,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "ER 모델에서 속성(Attribute)의 유형 중 다른 여러 개의 세부 속성으로 더 쪼갤 수 있는 속성(예: '주소' = 시, 구, 동, 번지)은?",
      "options": [
        "복합 속성 (Composite Attribute)",
        "단순 속성 (Simple / Atomic Attribute)",
        "다중값 속성",
        "유도 속성"
      ],
      "answer": 0,
      "explanation": "독립적인 의미를 갖는 더 작은 단순 속성들로 분해 가능한 속성을 복합 속성이라고 합니다."
    },
    {
      "id": 33,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "한 개체 인스턴스에 대해 여러 개의 값을 가질 수 있어 ER 다이어그램에서 '이중 타원(Double Oval)'으로 표기하는 속성(예: 학생의 '취미', 교수의 '학위')은?",
      "options": [
        "다중값 속성 (Multivalued Attribute)",
        "복합 속성",
        "유도 속성",
        "키 속성"
      ],
      "answer": 0,
      "explanation": "하나의 엔티티가 동일 속성에 대해 0개 이상의 복수 값을 가질 수 있는 속성입니다."
    },
    {
      "id": 34,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "다른 속성의 값으로부터 계산이나 추론이 가능하여 데이터베이스에 물리적으로 저장하지 않고 필요 시 계산하는 속성(예: '생년월일'로부터 계산되는 '나이')과 그 표기법은?",
      "options": [
        "유도 속성 (Derived Attribute) / 점선 타원 (Dashed Oval)",
        "저장 속성 / 이중 타원",
        "키 속성 / 밑줄 타원",
        "복합 속성 / 이중 마름모"
      ],
      "answer": 0,
      "explanation": "물리적 중복 저장을 피하고 필요할 때 동적으로 유도 계산되는 속성으로 점선 타원으로 표기합니다."
    },
    {
      "id": 35,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "자체적인 속성들만으로는 고유하게 개체를 식별할 수 없어 반드시 다른 소유 개체(Owner Entity)에 종속되어야만 존재하는 개체는?",
      "options": [
        "약한 개체 (Weak Entity)",
        "강한 개체 (Strong / Regular Entity)",
        "복합 개체",
        "슈퍼클래스 개체"
      ],
      "answer": 0,
      "explanation": "약한 개체(예: 직원의 부양가족)는 독자적인 키가 없어 식별 개체(직원)에 종속되며 이중 직사각형으로 표기합니다."
    },
    {
      "id": 36,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "약한 개체(Weak Entity)를 소유 개체와 연결하는 식별 관계(Identifying Relationship)와 약한 개체 내부에서 인스턴스들을 구별해주는 키의 표기법으로 옳은 것은?",
      "options": [
        "이중 마름모(식별 관계) / 점선 밑줄(부분키 또는 구별자, Discriminator/Partial Key)",
        "단일 마름모 / 실선 밑줄",
        "점선 사각형 / 이중 타원",
        "삼각형 / 화살표"
      ],
      "answer": 0,
      "explanation": "식별 관계는 이중 마름모로 나타내며, 약한 개체 내부의 구별자(예: 부양가족이름)는 점선 밑줄로 표기합니다."
    },
    {
      "id": 37,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "관계(Relationship)에 참여하는 개체 타입의 개수를 의미하는 관계의 차수(Degree) 중, '사원' 개체가 '관리한다' 관계를 통해 다시 '사원' 개체와 맺는 자기참조 관계의 차수는?",
      "options": [
        "단항 관계 (Unary / Recursive Relationship, 1항)",
        "이항 관계 (Binary Relationship, 2항)",
        "삼항 관계 (Ternary Relationship, 3항)",
        "다항 관계 (N-ary Relationship)"
      ],
      "answer": 0,
      "explanation": "동일한 하나의 개체 타입 내에서 인스턴스들 간에 맺어지는 재귀적(순환) 관계를 1항(단항) 관계라고 합니다."
    },
    {
      "id": 38,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "관계의 카디널리티 비율(Cardinality Ratio) 4가지 유형에 해당하지 않는 것은?",
      "options": [
        "1:1 (일대일 관계)",
        "1:N (일대다 관계)",
        "N:M (다대다 관계)",
        "0:0 (영대영 관계)"
      ],
      "answer": 3,
      "explanation": "두 개체 집합 간의 사상 비율은 1:1, 1:N, N:1, N:M의 형태로 분류됩니다."
    },
    {
      "id": 39,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "ER 모델에서 참여 제약조건(Participation Constraint) 중 '모든 학과 인스턴스는 반드시 최소 1명의 학과장 교수를 가져야 한다'와 같이 개체 집합의 모든 인스턴스가 관계에 반드시 참여해야 함을 나타내는 제약과 표기법은?",
      "options": [
        "전체 참여 (Total Participation / 필수적 참여) / 이중 실선 (Double Line)",
        "부분 참여 (Partial Participation / 선택적 참여) / 단일 실선",
        "조건부 참여 / 점선",
        "배타적 참여 / 빗금선"
      ],
      "answer": 0,
      "explanation": "모든 인스턴스가 관계에 참여해야 하는 필수 참여는 관계선에 이중 실선(Double Line)을 사용하여 표기합니다."
    },
    {
      "id": 40,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "IE(Information Engineering) 표기법(까마귀발 표기법, Crow's Foot)에서 다(Many) 쪽의 관계선 끝에 표시되는 기호는?",
      "options": [
        "까마귀발 모양의 세 갈래 선 (<-<)",
        "단일 수직선 (|)",
        "동그라미 (O)",
        "이중 네모"
      ],
      "answer": 0,
      "explanation": "까마귀발 표기법에서 1은 단일 바(|), Many는 까마귀발(세 갈래), 선택적(0)은 작은 동그라미(O)로 표시합니다."
    },
    {
      "id": 41,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "관계(Relationship) 자체도 단순 속성을 가질 수 있다. 예를 들어 학생과 과목 간의 '수강(Enroll)' 관계는 '성적(Grade)'이라는 관계 속성을 가질 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "어느 한쪽 개체에 종속되지 않고 두 개체의 결합(수강) 사건에 의해 비로소 발생하는 속성은 관계 자체에 부여됩니다."
    },
    {
      "id": 42,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "두 개체 간에 둘 이상의 서로 다른 관계가 동시에 존재할 수 있는가?",
      "options": [
        "존재할 수 있다. 예를 들어 교수와 학과 사이에 '소속된다(N:1)' 관계와 '학과장을 맡는다(1:1)' 관계가 동시에 존재할 수 있다.",
        "ER 모델 규칙상 두 개체 사이에는 오직 1개의 관계만 허용된다.",
        "외래키 제약조건 위반이므로 불가능하다.",
        "오직 1:1 관계일 때만 2개 이상 존재할 수 있다."
      ],
      "answer": 0,
      "explanation": "동일한 개체 쌍이라도 비즈니스 의미가 다르면 여러 개의 독립적인 관계 타입을 정의할 수 있습니다."
    },
    {
      "id": 43,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "약한 개체는 식별 개체에 대해 항상 '전체 참여(Total Participation, 이중 실선)'해야만 존재할 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "존재 종속(Existence Dependency)이므로 소유 개체 없이는 약한 개체 인스턴스가 생성되거나 유지될 수 없습니다."
    },
    {
      "id": 44,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "확장된 ER(EER: Enhanced ER) 모델에서 상위 클래스(Superclass)의 속성과 관계를 하위 클래스(Subclass)가 그대로 물려받는 메커니즘을 무엇이라 부르는가?",
      "options": [
        "상속 (Inheritance)",
        "다형성",
        "캡슐화",
        "역정규화"
      ],
      "answer": 0,
      "explanation": "IS-A 계층 구조에서 서브클래스는 슈퍼클래스의 모든 속성과 관계를 자동으로 상속받습니다."
    },
    {
      "id": 45,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "EER 모델의 서브클래스 분할 제약조건 중, 한 개체 인스턴스가 여러 서브클래스에 동시에 속할 수 있는지 여부를 나타내는 제약은?",
      "options": [
        "디스조인트 제약 (Disjointness Constraint: Disjoint 'd' vs Overlapping 'o')",
        "완전성 제약 (Completeness: Total vs Partial)",
        "참여 제약",
        "외래키 제약"
      ],
      "answer": 0,
      "explanation": "상호 배타적이면 Disjoint(d, 예: 직원은 정규직이거나 계약직 중 하나), 중복 허용이면 Overlapping(o, 예: 부품은 제조품이면서 구매품일 수 있음)입니다."
    },
    {
      "id": 46,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "ER 다이어그램에서 키 속성(Key Attribute)은 타원 안에 속성 이름을 적고 그 아래에 '실선 밑줄'을 그어 표기한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "개체 인스턴스를 유일하게 구별하는 기본키 속성은 실선 밑줄로 명시합니다."
    },
    {
      "id": 47,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "다음 중 복합 속성(Composite Attribute)의 가장 대표적인 사례는?",
      "options": [
        "주민등록번호",
        "성명 (성 + 이름)",
        "나이",
        "학번"
      ],
      "answer": 1,
      "explanation": "성명은 '성(Last Name)'과 '이름(First Name)'이라는 세부 속성들로 구성된 복합 속성의 전형적인 예입니다."
    },
    {
      "id": 48,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "단순 속성이면서 단일값 속성인 것은 더 이상 분해할 수 없고 인스턴스당 단 하나의 값만 갖는 속성(예: 학생의 학번, 성별)이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "원자적이며 1개의 값만 가지므로 가장 흔한 속성 형태입니다."
    },
    {
      "id": 49,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "공급자, 부품, 프로젝트 3개의 개체가 '공급한다' 관계에 동시에 참여하는 형태의 관계는?",
      "options": [
        "삼항 관계 (Ternary Relationship)",
        "단항 관계",
        "이항 관계",
        "사상 관계"
      ],
      "answer": 0,
      "explanation": "3개의 개체 집합이 결합하여 하나의 관계 인스턴스를 이루는 차수 3의 삼항 관계입니다."
    },
    {
      "id": 50,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "비식별 관계(Non-identifying Relationship)는 부모 개체의 기본키가 자식 개체의 기본키의 일부가 되지 않고 일반 외래키 속성으로만 참조되는 관계이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "자식 개체가 독자적인 기본키를 가지고 부모는 단순 참조만 하는 일반적인 약결합 관계입니다."
    },
    {
      "id": 51,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "개체 집합의 최소 카디널리티와 최대 카디널리티를 명시하기 위해 Chen 표기법에서 사용하는 구조적 표기 방식은?",
      "options": [
        "(min, max) 표기법",
        "(top, bottom) 표기법",
        "(first, last) 표기법",
        "[in, out] 표기법"
      ],
      "answer": 0,
      "explanation": "예: 사원-(1, 1)-소속-(0, N)-부서 처럼 최소 및 최대 참여 횟수를 괄호 쌍으로 정확히 명시하는 방법입니다."
    },
    {
      "id": 52,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "(min, max) 표기법에서 min = 0이면 부분 참여(선택적 참여)를 의미하고, min >= 1이면 전체 참여(필수 참여)를 의미한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "최소 참여 수가 0이면 관계를 맺지 않아도 되므로 부분 참여이고, 1 이상이면 무조건 최소 1회 참여해야 하므로 필수 참여입니다."
    },
    {
      "id": 53,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "개념적 모델링 과정에서 현실 세계의 명사(Noun)와 동사(Verb)는 통상적으로 ER 모델의 어떤 요소로 각각 매핑되는가?",
      "options": [
        "명사 -> 개체(Entity) 또는 속성(Attribute) / 동사 -> 관계(Relationship)",
        "명사 -> 관계 / 동사 -> 개체",
        "명사 -> 키 / 동사 -> 도메인",
        "명사 -> 데이터 / 동사 -> 트랜잭션"
      ],
      "answer": 0,
      "explanation": "자연어 요구사항 명세에서 주어나 목적어인 명사는 엔티티나 어트리뷰트가 되고, 서술어인 동사는 관계 타입으로 모델링됩니다."
    },
    {
      "id": 54,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "개체 타입(Entity Type)은 개체의 이름과 속성들의 구조를 정의한 스키마이고, 개체 집합(Entity Set)은 특정 시점에 해당 개체 타입에 속하는 인스턴스들의 실제 모임이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "타입(Type)은 정의(틀)이고, 집합(Set)은 인스턴스들의 집단(데이터)입니다."
    },
    {
      "id": 55,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "병원 시스템에서 '환자'와 '의사' 사이의 '진료' 관계가 1:N이 아닌 N:M 관계인 이유는?",
      "options": [
        "한 환자는 여러 의사에게 진료받을 수 있고, 한 의사 역시 여러 환자를 진료할 수 있기 때문",
        "병원에 환자가 1명만 입원할 수 있기 때문",
        "의사는 한 번에 한 환자만 치료할 수 있기 때문",
        "진료 기록을 디스크에 저장하지 않기 때문"
      ],
      "answer": 0,
      "explanation": "양방향 모두 복수의 인스턴스와 연계될 수 있으므로 N:M 다대다 관계입니다."
    },
    {
      "id": 56,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "ER 모델에서 속성 값이 아직 알려지지 않았거나(Unknown), 해당 개체에 적용할 수 없는 경우(Inapplicable)에 표현하는 특수한 값을 '널(NULL)' 값이라고 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "NULL은 공백이나 숫자 0이 아니라 '알 수 없음' 또는 '해당 없음'을 나타내는 특수 표식입니다."
    },
    {
      "id": 57,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "다중값 속성(Multivalued Attribute)을 관계 데이터 모델의 테이블로 직접 변환하지 못하는 근본적인 이유는?",
      "options": [
        "관계형 데이터 모델의 제1정규형(1NF) 원칙에 따라 릴레이션의 모든 속성 값은 반드시 더 이상 쪼갤 수 없는 '원자값(Atomic Value)'이어야 하기 때문",
        "SQL에 다중값을 저장하는 데이터 타입이 전혀 없기 때문",
        "외래키가 동작하지 않기 때문",
        "테이블의 행 수가 무한대로 늘어나기 때문"
      ],
      "answer": 0,
      "explanation": "1NF는 속성의 원자성을 요구하므로 하나의 칸에 여러 값을 넣을 수 없어 별도의 테이블로 분리해야 합니다."
    },
    {
      "id": 58,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "식별 관계(Identifying Relationship)에서 부모 개체(Owner)가 삭제되면 이에 종속된 약한 개체(Weak Entity) 인스턴스들도 연쇄 삭제(CASCADE Delete)되어야 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "약한 개체는 부모의 존재에 종속되므로 부모가 사라지면 존재 의미를 상실하여 함께 삭제됩니다."
    },
    {
      "id": 59,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "mcq",
      "question": "개체와 속성을 구별할 때, 어떤 개념이 독자적인 여러 세부 속성들을 가지고 독립적으로 관리되어야 한다면 무엇으로 모델링해야 하는가?",
      "options": [
        "개체 (Entity)",
        "단순 속성 (Attribute)",
        "유도 속성",
        "외래키"
      ],
      "answer": 0,
      "explanation": "그 자체로 고유한 여러 정보(속성들)를 거느리고 있다면 단순 속성이 아니라 독립적인 '개체(Entity)'로 승격시켜야 합니다."
    },
    {
      "id": 60,
      "subject": "db",
      "topic": "Chap 2. ER 모델 & 제약조건",
      "type": "ox",
      "question": "ER 모델은 관계형 데이터베이스뿐만 아니라 객체지향 DB나 NoSQL DB 설계를 위한 개념적 모델링 도구로도 범용적으로 활용될 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "비즈니스 도메인의 데이터 구조를 개념적으로 추상화하는 모델이므로 특정 DBMS 패러다임에 국한되지 않습니다."
    },
    {
      "id": 61,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "1970년 IBM 연구소의 E.F. Codd가 제안한 관계 데이터 모델(Relational Model)의 기초가 되는 수학적 개념은?",
      "options": [
        "수학적 집합론의 관계(Relation) 및 튜플의 카티시안 곱(Cartesian Product) 부분집합",
        "미적분학의 도함수",
        "기하학의 유클리드 공간",
        "추상대수학의 군론"
      ],
      "answer": 0,
      "explanation": "도메인들의 데카르트 곱(Cartesian Product) $D_1 \\times D_2 \\times \\dots \\times D_n$의 부분집합으로 릴레이션을 엄밀하게 수학적으로 정의했습니다."
    },
    {
      "id": 62,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "관계 데이터 모델의 용어와 일반 파일 시스템 용어 간의 매핑으로 올바른 것은?",
      "options": [
        "릴레이션(Relation) = 파일/테이블, 튜플(Tuple) = 레코드/행, 속성(Attribute) = 필드/열",
        "릴레이션 = 필드, 튜플 = 테이블, 속성 = 레코드",
        "릴레이션 = 데이터, 튜플 = 키, 속성 = 인덱스",
        "릴레이션 = 뷰, 튜플 = 스키마, 속성 = 도메인"
      ],
      "answer": 0,
      "explanation": "수학적 관계형 모델의 릴레이션, 튜플, 어트리뷰트는 실무의 테이블, 행(Row), 열(Column)에 각각 대응됩니다."
    },
    {
      "id": 63,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "어떤 속성(Attribute)이 가질 수 있는 모든 유효한 원자값(Atomic Value)들의 집합을 무엇이라 부르는가?",
      "options": [
        "도메인 (Domain)",
        "릴레이션",
        "차수",
        "카디널리티"
      ],
      "answer": 0,
      "explanation": "도메인은 속성의 유효한 값의 범위(타입, 크기, 제약조건 등)를 규정하는 수학적 집합입니다."
    },
    {
      "id": 64,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "어떤 릴레이션에 5개의 속성(열)과 100개의 튜플(행)이 존재할 때, 이 릴레이션의 차수(Degree)와 카디널리티(Cardinality)는?",
      "options": [
        "차수: 5, 카디널리티: 100",
        "차수: 100, 카디널리티: 5",
        "차수: 500, 카디널리티: 1",
        "차수: 20, 카디널리티: 50"
      ],
      "answer": 0,
      "explanation": "차수(Degree)는 속성의 개수(5)이고, 카디널리티(Cardinality)는 튜플의 개수(100)입니다."
    },
    {
      "id": 65,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "릴레이션의 4대 본질적 특성에 해당하지 않는 것은?",
      "options": [
        "튜플의 유일성: 릴레이션 내에 완전히 동일한 튜플은 중복되어 존재할 수 없다.",
        "튜플의 무순서성: 튜플들 간의 순서는 상관없다.",
        "속성의 무순서성: 속성들 간의 순서는 상관없다.",
        "속성의 다중값성: 하나의 속성 칸에 여러 개의 값을 배열 형태로 자유롭게 저장할 수 있다."
      ],
      "answer": 3,
      "explanation": "릴레이션의 모든 속성 값은 반드시 분해 불가능한 '단일 원자값(Atomic Value)'이어야 한다는 원자성이 4대 특성 중 하나입니다."
    },
    {
      "id": 66,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "릴레이션에서 키(Key)가 만족해야 하는 2대 기본 조건인 '유일성(Uniqueness)'과 '최소성(Minimality)'의 의미로 옳은 것은?",
      "options": [
        "유일성: 하나의 키 값으로 튜플을 유일하게 식별 가능함 / 최소성: 키를 구성하는 속성 중 어느 하나라도 제거하면 유일성이 깨지는 꼭 필요한 최소 속성 집합임",
        "유일성: 키 값이 1자리 숫자여야 함 / 최소성: 테이블 크기가 작아야 함",
        "유일성: 테이블에 키가 1개만 있어야 함 / 최소성: NULL 값이 없어야 함",
        "유일성: 모든 속성이 키여야 함 / 최소성: 중복을 허용함"
      ],
      "answer": 0,
      "explanation": "유일성은 튜플 고유 식별 능력이고, 최소성은 불필요한 군더더기 속성이 없는 가장 콤팩트한 구성임을 의미합니다."
    },
    {
      "id": 67,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "튜플을 유일하게 식별할 수 있는 유일성은 만족하지만, 최소성은 만족하지 않는 속성들의 집합(예: (학번, 이름))은 어떤 키에 해당하는가?",
      "options": [
        "슈퍼키 (Super Key)",
        "후보키 (Candidate Key)",
        "기본키 (Primary Key)",
        "외래키 (Foreign Key)"
      ],
      "answer": 0,
      "explanation": "슈퍼키는 유일성은 만족하지만 불필요한 속성이 덧붙여져 있어 최소성을 만족하지 못하는 키입니다."
    },
    {
      "id": 68,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "유일성과 최소성을 모두 만족하는 키들의 집합을 무엇이라 부르는가?",
      "options": [
        "후보키 (Candidate Key)",
        "슈퍼키",
        "외래키",
        "인덱스키"
      ],
      "answer": 0,
      "explanation": "기본키가 될 수 있는 자격을 갖춘 유일성과 최소성을 겸비한 모든 키들을 후보키라고 합니다."
    },
    {
      "id": 69,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "후보키들 중에서 릴레이션의 대표 키로 선정된 단 하나의 키를 무엇이라 부르는가?",
      "options": [
        "기본키 (Primary Key, PK)",
        "대체키 (Alternate Key)",
        "슈퍼키",
        "외래키"
      ],
      "answer": 0,
      "explanation": "테이블의 주 식별자로 지정된 대표 후보키를 기본키(PK)라고 합니다."
    },
    {
      "id": 70,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "후보키 중에서 기본키(Primary Key)로 선택되지 못하고 남은 나머지 후보키들을 무엇이라 부르는가?",
      "options": [
        "대체키 (Alternate Key / 보조키)",
        "외래키",
        "인덱스키",
        "도메인키"
      ],
      "answer": 0,
      "explanation": "기본키 대신 보조적으로 유일성을 식별할 수 있는 나머지 후보키를 대체키라고 합니다."
    },
    {
      "id": 71,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "다른 릴레이션의 기본키(또는 고유키)를 참조하는 속성 또는 속성들의 집합을 무엇이라 부르는가?",
      "options": [
        "외래키 (Foreign Key, FK)",
        "기본키",
        "대체키",
        "슈퍼키"
      ],
      "answer": 0,
      "explanation": "두 릴레이션 간의 연결 고리(관계)를 형성하며 피참조 릴레이션의 기본키를 가리키는 속성을 외래키라고 합니다."
    },
    {
      "id": 72,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "개체 무결성 제약조건(Entity Integrity Constraint)의 핵심 규칙은?",
      "options": [
        "기본키(Primary Key)를 구성하는 어떤 속성도 널(NULL) 값을 가질 수 없으며, 중복된 값을 가질 수 없다.",
        "외래키는 항상 0보다 커야 한다.",
        "테이블에 행이 100개 이상 있어야 한다.",
        "속성의 이름은 영어 대문자여야 한다."
      ],
      "answer": 0,
      "explanation": "기본키는 튜플을 고유하게 식별해야 하므로 절대로 비어있거나(NOT NULL) 중복(UNIQUE)될 수 없습니다."
    },
    {
      "id": 73,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "참조 무결성 제약조건(Referential Integrity Constraint)의 핵심 규칙은?",
      "options": [
        "외래키(FK) 값은 참조하는 릴레이션의 기본키(PK) 값으로 반드시 존재하는 실제 값이거나, 또는 널(NULL) 값이어야 한다.",
        "외래키 값은 기본키 값보다 항상 커야 한다.",
        "외래키는 절대로 NULL 값을 가질 수 없다.",
        "외래키와 기본키는 속성 이름이 100% 철자까지 같아야 한다."
      ],
      "answer": 0,
      "explanation": "존재하지 않는 엉뚱한 부모 키를 참조하는 유령 데이터(Dangling Pointer)가 생기지 않도록 보장하는 핵심 규칙입니다."
    },
    {
      "id": 74,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "도메인 무결성 제약조건(Domain Integrity Constraint)의 의미는?",
      "options": [
        "릴레이션의 각 속성 값은 해당 속성에 정의된 도메인의 데이터 타입, 길이, 허용 범위에 속하는 원자값이어야 한다.",
        "인터넷 도메인 주소(DNS)가 등록되어 있어야 한다.",
        "기본키가 1개만 존재해야 한다.",
        "모든 튜플의 개수가 짝수여야 한다."
      ],
      "answer": 0,
      "explanation": "예: 나이 속성에 음수나 문자열이 들어갈 수 없고 정해진 정수 도메인 범위의 값만 허용되는 규칙입니다."
    },
    {
      "id": 75,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "부모 릴레이션의 특정 기본키 튜플이 삭제(DELETE)될 때, 이를 참조하고 있던 자식 릴레이션의 관련 튜플들도 자동으로 함께 연쇄 삭제되도록 하는 외래키 조치 옵션은?",
      "options": [
        "`ON DELETE CASCADE`",
        "`ON DELETE SET NULL`",
        "`ON DELETE RESTRICT`",
        "`ON DELETE NO ACTION`"
      ],
      "answer": 0,
      "explanation": "부모 레코드 삭제 시 자식의 관련 레코드들도 함께 일괄 삭제하여 참조 무결성을 유지합니다."
    },
    {
      "id": 76,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "부모 릴레이션의 튜플을 삭제하려 할 때, 해당 튜플을 참조하는 자식 튜플이 단 하나라도 존재하면 부모의 삭제 명령 자체를 아예 거부(차단)하고 오류를 발생시키는 옵션은?",
      "options": [
        "`RESTRICT` 또는 `NO ACTION`",
        "`CASCADE`",
        "`SET NULL`",
        "`SET DEFAULT`"
      ],
      "answer": 0,
      "explanation": "자식 데이터가 존재하는 한 부모를 함부로 지우지 못하도록 엄격히 보호하는 옵션입니다."
    },
    {
      "id": 77,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "부모 릴레이션의 기본키가 삭제될 때, 자식 릴레이션의 외래키 값을 자동으로 NULL로 변경하여 연결을 끊는 옵션은?",
      "options": [
        "`ON DELETE SET NULL`",
        "`ON DELETE CASCADE`",
        "`ON DELETE RESTRICT`",
        "`ON DELETE DEFAULT`"
      ],
      "answer": 0,
      "explanation": "자식 레코드는 유지하되 참조 링크만 NULL로 비워두는 방식(단, 외래키가 NOT NULL 제약이 없을 때만 가능)입니다."
    },
    {
      "id": 78,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "ox",
      "question": "외래키(FK)를 구성하는 속성의 이름은 반드시 참조하는 부모 테이블의 기본키(PK) 속성 이름과 철자가 똑같아야만 한다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 1,
      "explanation": "도메인(데이터 타입과 의미)만 일치하면 외래키의 속성 이름은 부모의 기본키 속성 이름과 완전히 달라도 무방합니다."
    },
    {
      "id": 79,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "ox",
      "question": "외래키는 다른 테이블의 기본키뿐만 아니라 자기 자신의 테이블의 기본키를 참조하는 자기참조 외래키(Self-referencing FK)로 구성될 수도 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "예를 들어 사원 테이블에서 '사번'이 PK이고 '관리자사번'이 동일 테이블의 '사번'을 참조하는 외래키가 될 수 있습니다."
    },
    {
      "id": 80,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "관계 대수(Relational Algebra) 연산자 중 특정 조건을 만족하는 '행(튜플)'들만을 수평적으로 골라내는 연산자와 기호는?",
      "options": [
        "셀렉션 (Selection) / $\\sigma$ (시그마)",
        "프로젝션 (Projection) / $\\pi$ (파이)",
        "조인 (Join) / $\\bowtie$",
        "카티시안 곱 / $\\times$"
      ],
      "answer": 0,
      "explanation": "조건식에 맞는 튜플을 필터링하는 연산은 셀렉션($\\sigma$)이며 SQL의 `WHERE` 절에 해당합니다."
    },
    {
      "id": 81,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "관계 대수 연산자 중 릴레이션에서 원하는 특정 '열(속성)'들만을 수직적으로 추출하고 중복을 제거하는 연산자와 기호는?",
      "options": [
        "프로젝션 (Projection) / $\\pi$ (파이)",
        "셀렉션 (Selection) / $\\sigma$",
        "디비전 (Division) / $\\div$",
        "합집합 (Union) / $\\cup$"
      ],
      "answer": 0,
      "explanation": "원하는 속성 컬럼만 추출하는 연산은 프로젝션($\\pi$)이며 SQL의 `SELECT 컬럼명`에 해당합니다."
    },
    {
      "id": 82,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "ox",
      "question": "외래키(Foreign Key) 속성은 참조 무결성을 훼손하지 않는 한 중복된 값을 가질 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "1:N 관계에서 N측의 여러 튜플들이 동일한 1측 부모의 기본키를 공유하므로 외래키는 기본적으로 중복을 허용합니다."
    },
    {
      "id": 83,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "두 릴레이션 간에 공통된 속성의 값이 일치하는 튜플들을 결합하고 중복된 공통 속성을 하나로 합쳐주는 조인 연산은?",
      "options": [
        "자연 조인 (Natural Join)",
        "세타 조인 (Theta Join)",
        "외부 조인 (Outer Join)",
        "세미 조인 (Semi Join)"
      ],
      "answer": 0,
      "explanation": "동일 이름 속성에 대해 동등 조인(Equi Join)을 수행한 후 중복 속성을 제거하는 표준 결합 연산입니다."
    },
    {
      "id": 84,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "ox",
      "question": "기본키는 단 하나의 속성으로만 구성되어야 하며, 2개 이상의 속성을 묶어서 기본키로 지정하는 것은 불가능하다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 1,
      "explanation": "2개 이상의 속성을 묶어 유일성을 식별하는 '복합 기본키(Composite Primary Key)'가 널리 사용됩니다."
    },
    {
      "id": 85,
      "subject": "db",
      "topic": "Chap 3. 관계 모델, Key & 무결성",
      "type": "mcq",
      "question": "테이블에서 특정 컬럼에 대해 `CHECK (급여 >= 1000)`와 같이 업무 규칙에 맞는 값만 입력되도록 강제하는 제약조건은?",
      "options": [
        "사용자 정의 무결성 제약조건 (User-defined Integrity)",
        "개체 무결성",
        "참조 무결성",
        "시스템 무결성"
      ],
      "answer": 0,
      "explanation": "비즈니스 도메인의 특정 논리적 업무 규칙을 강제하기 위한 제약조건입니다."
    },
    {
      "id": 86,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "ER 모델의 '정규(강한) 개체 타입'을 관계 데이터 모델의 테이블로 사상(변환)하는 1단계 규칙으로 올바른 것은?",
      "options": [
        "각 정규 개체마다 독립된 릴레이션을 생성하고, 개체의 단순 속성들을 릴레이션의 속성으로 포함시키며, 개체의 키 속성을 릴레이션의 기본키(PK)로 지정한다.",
        "모든 개체를 단 하나의 통합 테이블로 합친다.",
        "기본키를 만들지 않고 튜플만 적재한다.",
        "속성들의 이름을 모두 숫자로 변환한다."
      ],
      "answer": 0,
      "explanation": "강한 엔티티는 그대로 1:1로 릴레이션이 되며 단순 속성들이 컬럼이 되고 식별자가 PK가 됩니다."
    },
    {
      "id": 87,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "ER 모델의 '약한 개체 타입(Weak Entity)'을 관계 모델로 사상하는 2단계 규칙으로 올바른 것은?",
      "options": [
        "약한 개체를 위한 릴레이션을 생성하고, 자신의 단순 속성들과 함께 '소유(식별) 개체의 기본키'를 외래키로 가져와 자신의 부분키(구별자)와 결합하여 '복합 기본키'를 구성한다.",
        "소유 개체의 테이블에 약한 개체의 모든 데이터를 컬럼으로 추가한다.",
        "약한 개체는 관계 모델에서 영구 삭제한다.",
        "부분키만으로 단독 기본키를 삼는다."
      ],
      "answer": 0,
      "explanation": "약한 개체 테이블의 기본키는 '식별 개체의 PK(외래키) + 자신의 구별자'의 복합 기본키가 됩니다."
    },
    {
      "id": 88,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "ER 모델의 '1:1 관계'를 사상할 때 가장 널리 권장되는 '외래키 접근 방식'으로 올바른 것은?",
      "options": [
        "관계에 '전체 참여(Total Participation, 필수)'하는 개체 측의 릴레이션에 상대방 개체의 기본키를 외래키로 추가한다.",
        "부분 참여하는 쪽에 외래키를 추가하여 NULL을 대량 발생시킨다.",
        "반드시 3번째 새로운 교차 테이블을 만들어야만 한다.",
        "양쪽 테이블을 무조건 하나로 병합해야만 한다."
      ],
      "answer": 0,
      "explanation": "전체 참여 쪽에 외래키를 두어야 외래키 컬럼에 NULL 값이 생기지 않고 완전한 매핑이 이루어집니다."
    },
    {
      "id": 89,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "ER 모델의 '1:N (일대다) 관계'를 관계 데이터 모델로 사상하는 4단계 표준 규칙은?",
      "options": [
        "N(다) 측에 해당하는 릴레이션에 1(일) 측 릴레이션의 기본키를 외래키(FK)로 추가한다.",
        "1(일) 측 릴레이션에 N(다) 측의 기본키들을 배열로 추가한다.",
        "무조건 새로운 관계 릴레이션을 별도로 생성해야 한다.",
        "양쪽 테이블의 기본키를 서로 맞바꾼다."
      ],
      "answer": 0,
      "explanation": "N측 튜플은 부모가 1개뿐이므로 N측에 부모(1측)의 기본키를 외래키로 심는 것이 가장 깔끔하며 불필요한 테이블 생성을 방지합니다."
    },
    {
      "id": 90,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "ER 모델의 'N:M (다대다) 관계'를 관계 데이터 모델로 사상하는 5단계 규칙으로 가장 올바른 것은?",
      "options": [
        "N:M 관계를 표현하기 위해 '새로운 관계(교차/조인) 릴레이션'을 별도로 생성하고, 참여하는 양측 개체들의 기본키를 외래키로 가져와 이들의 조합을 '복합 기본키'로 설정한다.",
        "어느 한쪽 테이블에 상대방 키를 콤마로 구분하여 문자열로 저장한다.",
        "1:N 관계처럼 N측에 외래키를 하나만 추가한다.",
        "N:M 관계는 관계 데이터 모델로 변환할 수 없다."
      ],
      "answer": 0,
      "explanation": "다대다 관계는 두 테이블 간 직접 외래키 매핑이 불가능하므로, 중간에 연결 테이블(교차 엔티티)을 만들어 두 1:N 관계로 해소합니다."
    },
    {
      "id": 91,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "N:M 관계 자체에 속성(예: 학생과 과목 간의 수강 관계에 붙은 '성적' 속성)이 존재할 때, 이 관계 속성은 사상 후 어디에 위치하는가?",
      "options": [
        "새로 생성된 교차(관계) 릴레이션의 일반 속성으로 포함된다.",
        "학생 릴레이션의 속성으로 추가된다.",
        "과목 릴레이션의 속성으로 추가된다.",
        "데이터베이스에서 버려진다."
      ],
      "answer": 0,
      "explanation": "관계 속성은 두 엔티티의 결합 테이블(수강 릴레이션)에 컬럼으로 들어갑니다."
    },
    {
      "id": 92,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "ER 모델의 '다중값 속성(Multivalued Attribute)'(예: 사원의 '취미')을 사상하는 6단계 규칙으로 옳은 것은?",
      "options": [
        "다중값 속성을 위한 '별도의 새로운 릴레이션'을 생성하고, 해당 개체의 기본키를 외래키로 가져오며, [개체의 기본키 + 다중값 속성]을 묶어 복합 기본키로 지정한다.",
        "사원 테이블에 취미1, 취미2, 취미3 컬럼을 무한히 추가한다.",
        "사원 테이블의 취미 컬럼에 JSON 형태로 몽땅 집어넣는다.",
        "다중값 속성은 무시하고 삭제한다."
      ],
      "answer": 0,
      "explanation": "원자성(1NF)을 지키기 위해 독립 릴레이션으로 분리하고, 사번과 취미의 쌍을 복합 기본키로 설정합니다."
    },
    {
      "id": 93,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "ox",
      "question": "복합 속성(Composite Attribute, 예: 주소 = 시, 구, 동)을 관계 모델로 사상할 때는 복합 속성 자체는 생략하고 세부 단순 속성들(시, 구, 동)만을 릴레이션의 컬럼으로 직접 펼쳐서 포함시킨다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "복합 속성의 상위 개념 이름은 제거하고 원자적인 리프(Leaf) 속성들만 실제 테이블 컬럼으로 플랫(Flatten)하게 만듭니다."
    },
    {
      "id": 94,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "사원(1)과 부서(1) 간의 '관리한다(1:1)' 관계에서, 사원은 부서 관리자일 수도 있고 아닐 수도 있지만(부분 참여), 모든 부서는 반드시 관리자 사원을 가져야 할 때(전체 참여), 외래키를 어느 테이블에 추가해야 NULL을 방지하는가?",
      "options": [
        "부서(Department) 릴레이션에 관리자 사원번호(FK)를 추가한다.",
        "사원(Employee) 릴레이션에 부서번호(FK)를 추가한다.",
        "양쪽 모두에 외래키를 서로 추가한다.",
        "외래키를 추가하지 않는다."
      ],
      "answer": 0,
      "explanation": "모든 부서는 관리자가 필수(전체 참여)이므로 부서 테이블에 외래키를 두면 해당 컬럼이 결코 NULL이 되지 않습니다."
    },
    {
      "id": 95,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "ox",
      "question": "1:1 관계에서 양쪽 개체 집합이 모두 '전체 참여(Total Participation)'하는 드문 경우라면, 두 릴레이션을 단 하나의 통합 릴레이션으로 합치는(Merge) 것이 가장 효율적인 사상 대안이 될 수 있다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "양쪽이 1:1로 항상 100% 대응되므로 두 테이블을 하나로 합쳐도 낭비나 NULL이 생기지 않고 조인 비용을 없앨 수 있습니다."
    },
    {
      "id": 96,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "삼항(Ternary) 이상의 다항 관계 타입을 관계 모델로 사상하는 올바른 방법은?",
      "options": [
        "관계를 나타내는 새로운 릴레이션을 생성하고, 참여하는 모든 개체들의 기본키를 외래키로 가져와 결합하여 기본키를 구성한다.",
        "세 개체 중 가장 데이터가 많은 개체 테이블에 다른 두 개체의 키를 넣는다.",
        "다항 관계는 무조건 2개씩 쪼개어 이항 관계로 바꾼 뒤 사상한다.",
        "데이터베이스 트리거로만 처리한다."
      ],
      "answer": 0,
      "explanation": "참여하는 모든 엔티티의 식별자를 외래키로 모아 관계 릴레이션을 정의합니다."
    },
    {
      "id": 97,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "ox",
      "question": "약한 개체 릴레이션의 기본키는 항상 외래키 속성을 포함하는 '복합 기본키' 형태를 띤다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "약한 개체 단독으로는 유일성을 보장할 수 없으므로 식별 부모의 PK가 반드시 기본키의 일부분으로 결합되어야 합니다."
    },
    {
      "id": 98,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "유도 속성(Derived Attribute, 예: 총점, 평균, 나이)에 대한 관계 모델 사상 원칙으로 옳은 것은?",
      "options": [
        "원칙적으로 데이터의 중복성과 불일관성을 방지하기 위해 릴레이션의 물리적 속성으로 포함시키지 않고 쿼리 시 동적 계산(SQL 표현식 또는 View)으로 처리한다.",
        "항상 물리 테이블의 첫 번째 컬럼으로 무조건 추가해야 한다.",
        "유도 속성만 모아둔 별도의 테이블을 만든다.",
        "데이터베이스가 정지할 때까지 계속 계산한다."
      ],
      "answer": 0,
      "explanation": "성능상 반정규화가 필요한 특수 상황을 제외하면 원칙적으로 유도 속성은 저장하지 않는 것이 데이터 무결성에 안전합니다."
    },
    {
      "id": 99,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "ox",
      "question": "1:N 관계를 사상할 때 1측의 릴레이션에 N측의 기본키를 외래키로 추가할 수 없는 이유는, 1측의 한 행에 N측의 키 값이 여러 개 들어가야 하므로 속성의 원자성(1NF)을 위반하기 때문이다.",
      "options": [
        "⭕ 그렇다 (O)",
        "❌ 아니다 (X)"
      ],
      "answer": 0,
      "explanation": "1측에 넣으려면 키를 여러 개 저장하는 다중값이 되어버리므로 오직 부모가 1개인 N측에 외래키를 심어야 합니다."
    },
    {
      "id": 100,
      "subject": "db",
      "topic": "Chap 3-1. ER-to-Relational 사상 규칙",
      "type": "mcq",
      "question": "ER 모델에서 관계형 스키마로의 사상 과정을 성공적으로 마친 후 데이터베이스 설계자가 수행해야 하는 다음 논리적 검증 절차는?",
      "options": [
        "정규화(Normalization: 1NF -> 2NF -> 3NF -> BCNF)를 통해 데이터 중복 및 갱신/삽입/삭제 이상(Anomaly)을 검증 및 제거하는 단계",
        "서버의 운영체제를 재설치하는 단계",
        "모든 외래키 제약조건을 삭제하는 단계",
        "네트워크 방화벽을 끄는 단계"
      ],
      "answer": 0,
      "explanation": "사상된 릴레이션 스키마들이 함수 종속성에 기반하여 이상 현상 없는 깔끔한 정규형을 만족하는지 정규화 이론으로 최종 정제합니다."
    }
  ]
};

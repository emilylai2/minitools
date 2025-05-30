[
  {
    "id": 15,
    "question": "What is a container breakout?",
    "options": [
      "When a container fails to start",
      "A container exceeding its resource limits",
      "An exploit where an attacker escapes the container to the host",
      "Scaling a container beyond maximum replicas",
      "Moving a container to another node"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Container breakout is when isolation is breached, and host access is gained.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Privilege Escalation",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 23,
    "question": "In the STRIDE threat model, under which category does a Trojan compromising the build server fall?",
    "options": [
      "Spoofing",
      "Repudiation",
      "Information Disclosure",
      "Denial of Service",
      "Tampering"
    ],
    "correct_answers": [
      4
    ],
    "explanation": "A Trojan compromising the build server is an act of tampering.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Malicious Code Execution and Compromised Applications in Containers",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 27,
    "question": "Which of the following actions cross over trust boundaries in Kubernetes? (Select all that apply)",
    "options": [
      "Accessing the Kubernetes API",
      "Communicating between pods in the same namespace",
      "Mounting hostPath volumes",
      "Using service accounts across namespaces",
      "Pulling images from public registries"
    ],
    "correct_answers": [
      2,
      3,
      4
    ],
    "explanation": "These actions cross trust boundaries and can pose security risks.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Kubernetes Trust Boundaries and Data Flow",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 48,
    "question": "Which combination of capabilities allows a compromised pod to access and modify the host? (Select all that apply)",
    "options": [
      "Running in privileged mode",
      "Mounting the host filesystem",
      "Using host networking",
      "Dropping all Linux capabilities",
      "Running as a non-root user"
    ],
    "correct_answers": [
      0,
      1,
      2
    ],
    "explanation": "These capabilities allow a pod to access and modify the host.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Privilege Escalation",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 49,
    "question": "When an attacker gains access to a pod, which scenario is not persistent?",
    "options": [
      "The attacker modifies the container image",
      "The attacker installs malware in the pod's filesystem",
      "The attacker exfiltrates data from the pod",
      "The attacker alters data in a mounted PersistentVolume",
      "The attacker changes configurations stored in a ConfigMap"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Changes in the container's filesystem are ephemeral and not persistent.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Persistence",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 72,
    "question": "Which of the following practices can help prevent container breakouts? (Select all that apply)",
    "options": [
      "Running containers as root",
      "Using minimal base images",
      "Applying the principle of least privilege",
      "Disabling SELinux or AppArmor",
      "Regularly updating container runtimes"
    ],
    "correct_answers": [
      1,
      2,
      4
    ],
    "explanation": "Using minimal base images, applying least privilege, and updating runtimes help prevent container breakouts.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Privilege Escalation",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 227,
    "question": "What is a potential risk of running a privileged container?",
    "options": [
      "Increased memory usage",
      "Limited network access",
      "Container can access host resources, leading to security risks",
      "Reduced application performance",
      "Inability to use persistent volumes"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Privileged containers have full access to the host's resources, which can pose security risks.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Privilege Escalation",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 251,
    "question": "What does the 'S' in STRIDE stand for in threat modeling?",
    "options": [
      "Spoofing",
      "Scanning",
      "Snooping",
      "Spamming",
      "Sniffing"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "In STRIDE, 'S' stands for Spoofing.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Kubernetes Trust Boundaries and Data Flow",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 252,
    "question": "Which category of STRIDE is primarily concerned with integrity?",
    "options": [
      "Spoofing",
      "Tampering",
      "Repudiation",
      "Information Disclosure",
      "Denial of Service"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Tampering is the category concerned with integrity.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Malicious Code Execution and Compromised Applications in Containers",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 253,
    "question": "In the context of STRIDE, what does 'Repudiation' refer to?",
    "options": [
      "Unauthorized access",
      "Denial of an action or event",
      "Data leakage",
      "Service unavailability",
      "Privilege escalation"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Repudiation involves the ability to deny that an action occurred.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Kubernetes Trust Boundaries and Data Flow",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 254,
    "question": "Which of the following is an example of 'Information Disclosure' under STRIDE?",
    "options": [
      "A user deletes all records from a database",
      "A user reads sensitive data in a database without authorization",
      "A user denies performing a destructive action",
      "A user overflows a buffer to gain root access",
      "A user floods a network to make services unavailable"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Unauthorized reading of sensitive data is an Information Disclosure threat.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Access to Sensitive Data",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 255,
    "question": "What does 'Elevation of Privileges' mean in STRIDE?",
    "options": [
      "Gaining access to resources by posing as someone else",
      "Modifying data in transit",
      "Gaining unauthorized access that one should not have",
      "Denial of actions performed",
      "Accessing services during downtime"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "It means obtaining higher access rights than permitted.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Privilege Escalation",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 256,
    "question": "Which of the following is a common mitigation for 'Spoofing' threats?",
    "options": [
      "Implementing proper authentication mechanisms",
      "Using encryption for data at rest",
      "Implementing audit logging",
      "Applying rate limiting",
      "Running processes as root"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Proper authentication helps verify identity and mitigate spoofing.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Kubernetes Trust Boundaries and Data Flow",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 257,
    "question": "Which STRIDE category is primarily concerned with availability?",
    "options": [
      "Spoofing",
      "Tampering",
      "Denial of Service",
      "Information Disclosure",
      "Elevation of Privileges"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Denial of Service focuses on making services unavailable.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Denial of Service",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 258,
    "question": "Which of the following best describes 'Threat Modeling'?",
    "options": [
      "A process to identify and mitigate security risks systematically",
      "A method to design software architectures",
      "A technique to improve application performance",
      "A strategy for marketing products",
      "An approach to project management"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Threat Modeling is a systematic process to identify and mitigate security risks.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Kubernetes Trust Boundaries and Data Flow",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 259,
    "question": "In STRIDE, which category would an attacker exploiting a buffer overflow to gain root access fall under?",
    "options": [
      "Spoofing",
      "Tampering",
      "Repudiation",
      "Information Disclosure",
      "Elevation of Privileges"
    ],
    "correct_answers": [
      4
    ],
    "explanation": "Exploiting a buffer overflow to gain root access is an Elevation of Privileges threat.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Privilege Escalation",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 260,
    "question": "Which of the following is NOT one of the STRIDE categories?",
    "options": [
      "Spoofing",
      "Tampering",
      "Replication",
      "Information Disclosure",
      "Denial of Service"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Replication is not part of STRIDE.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Kubernetes Trust Boundaries and Data Flow",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 261,
    "question": "Which mitigation technique is suitable for 'Information Disclosure' threats?",
    "options": [
      "Implementing audit logging",
      "Encrypting data at rest and in transit",
      "Using rate limiting",
      "Implementing CAPTCHA",
      "Using prepared SQL statements"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Encryption helps protect data confidentiality.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Access to Sensitive Data",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 262,
    "question": "What is a common mitigation for 'Tampering' threats?",
    "options": [
      "Implementing strong authentication",
      "Using digital signatures and checksums",
      "Applying redundant servers",
      "Implementing multi-factor authentication",
      "Enforcing password complexity"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Digital signatures and checksums help ensure data integrity.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Malicious Code Execution and Compromised Applications in Containers",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 264,
    "question": "Why is it important to restrict access to etcd in a Kubernetes cluster?",
    "options": [
      "Because etcd stores logs that can be tampered with",
      "Because etcd contains all cluster data, including secrets, and access can lead to cluster compromise",
      "Because etcd runs the application code",
      "Because etcd controls network policies",
      "Because etcd is not important and can be ignored"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Restricting access to etcd is critical to protect sensitive data.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Access to Sensitive Data",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 265,
    "question": "Which Kubernetes component exposes the Kubernetes API and is considered the front end of the control plane?",
    "options": [
      "kubelet",
      "kube-scheduler",
      "kube-apiserver",
      "kube-proxy",
      "etcd"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The kube-apiserver is the front end of the control plane.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Kubernetes Trust Boundaries and Data Flow",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 266,
    "question": "What is the recommended way to secure the Kubernetes Dashboard?",
    "options": [
      "Expose it publicly without authentication",
      "Use Role-Based Access Control (RBAC) and restrict access",
      "Grant it cluster-admin privileges",
      "Disable it entirely",
      "Run it as a privileged container"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Securing the Dashboard with RBAC helps limit its exposure.",
    "question_type": "single-choice",
    "domain": "Kubernetes Threat Model",
    "subdomain": "Attacker on the Network",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 11,
    "question": "What does Public Key Infrastructure (PKI) manage?",
    "options": [
      "Network configurations",
      "Storage volumes",
      "Digital certificates and encryption keys",
      "Container images",
      "Application logs"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "PKI manages keys and certificates for secure communication.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 12,
    "question": "Grafana is primarily used for:",
    "options": [
      "Code version control",
      "Continuous integration",
      "Monitoring and visualization",
      "Network security",
      "Identity management"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Grafana is used to create dashboards for visualizing metrics.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 78,
    "question": "How can you rotate TLS certificates in a Kubernetes cluster?",
    "options": [
      "Manually delete and recreate certificates",
      "Use the 'kubeadm certs renew' command",
      "Certificates cannot be rotated",
      "Restart the kubelet service",
      "Use a third-party certificate manager"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "'kubeadm' provides commands to renew cluster certificates.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 85,
    "question": "Which tool serves as a data source for visualizing Kubernetes cluster metrics in Grafana?",
    "options": [
      "Prometheus",
      "Elasticsearch",
      "Kibana",
      "Fluentd",
      "Logstash"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Prometheus is a robust monitoring and alerting toolkit that collects metrics from Kubernetes clusters. These metrics can be integrated into Grafana as a data source to create dashboards for visualization. While Grafana handles the visualization, Prometheus provides the necessary data. Other options like Elasticsearch, Kibana, Fluentd, and Logstash are primarily used for logging and log analysis, not for collecting or serving metrics directly.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [
      {
        "name": "Kubernetes Documentation - Monitoring with Prometheus",
        "url": "https://kubernetes.io/docs/tasks/debug/debug-cluster/monitoring/"
      },
      {
        "name": "Grafana Documentation - Prometheus Integration",
        "url": "https://grafana.com/docs/grafana/latest/datasources/prometheus/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:38"
  },
  {
    "id": 91,
    "question": "Which command would you use to view the logs of a pod named 'my-pod'?",
    "options": [
      "'kubectl get logs my-pod'",
      "'kubectl describe my-pod'",
      "'kubectl logs my-pod'",
      "'kubectl status my-pod'",
      "'kubectl inspect my-pod'"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "This command retrieves logs from the specified pod.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 100,
    "question": "How can you view the resources consumed by a pod?",
    "options": [
      "'kubectl describe pod <pod-name>'",
      "'kubectl top pod <pod-name>'",
      "'kubectl get pod <pod-name> --resources'",
      "'kubectl logs <pod-name>'",
      "'kubectl inspect pod <pod-name>'"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'kubectl top' command shows resource usage for pods or nodes.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 110,
    "question": "Which command do you use to get detailed information about a Kubernetes object?",
    "options": [
      "kubectl get <resource>",
      "kubectl describe <resource>",
      "kubectl inspect <resource>",
      "kubectl show <resource>",
      "kubectl info <resource>"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'describe' command provides detailed information about a resource.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 127,
    "question": "Which command is recommended to check the readiness and status of Kubernetes cluster components?",
    "options": [
      "kubectl get components",
      "kubectl get --raw='/readyz?verbose'",
      "kubectl get cs",
      "kubectl get componentstatuses",
      "kubectl describe components"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The command `kubectl get --raw='/readyz?verbose'` is the recommended way to check the readiness and status of Kubernetes cluster components. This approach provides detailed and up-to-date information about the health of the cluster. Other commands, such as `kubectl get cs` and `kubectl get componentstatuses`, are deprecated and may not provide accurate results in newer Kubernetes versions.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - API Server Health Checks",
        "url": "https://kubernetes.io/docs/reference/using-api/health-checks/"
      },
      {
        "name": "Kubernetes Blog - Deprecation of kubectl get cs",
        "url": "https://kubernetes.io/blog/2020/09/03/kubectl-get-componentstatus-deprecated/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:36:42"
  },
  {
    "id": 128,
    "question": "How do you check the health of nodes in the cluster?",
    "options": [
      "kubectl get nodes",
      "kubectl describe nodes",
      "kubectl health nodes",
      "kubectl check nodes",
      "kubectl status nodes"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command lists nodes and shows their status.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 135,
    "question": "How do you display a pod's YAML definition?",
    "options": [
      "kubectl show pod <pod-name>",
      "kubectl get pod <pod-name> -o yaml",
      "kubectl describe pod <pod-name>",
      "kubectl view pod <pod-name>",
      "kubectl yaml pod <pod-name>"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "This command outputs the pod's YAML definition.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 144,
    "question": "How do you view the events in a Kubernetes cluster?",
    "options": [
      "kubectl get events",
      "kubectl describe events",
      "kubectl list events",
      "kubectl events",
      "kubectl get logs"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command displays the cluster's events.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 151,
    "question": "Which command allows you to list all the nodes in a Kubernetes cluster?",
    "options": [
      "kubectl get nodes",
      "kubectl describe cluster",
      "kubectl list nodes",
      "kubectl cluster-info",
      "kubectl get cluster-nodes"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "kubectl get nodes lists all cluster nodes.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 185,
    "question": "Which tool can be used to benchmark a Kubernetes cluster against CIS best practices?",
    "options": [
      "kube-bench",
      "kube-hunter",
      "kubesec",
      "kube-score",
      "kube-linter"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "kube-bench is used to benchmark clusters against CIS standards.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 186,
    "question": "Which Kubernetes resource allows you to configure automatic scaling based on CPU utilization?",
    "options": [
      "HorizontalPodAutoscaler",
      "VerticalPodAutoscaler",
      "ResourceQuota",
      "LimitRange",
      "Deployment"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The HorizontalPodAutoscaler adjusts the number of replicas based on CPU utilisation.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 196,
    "question": "Which command can be used to get detailed information about a Kubernetes node?",
    "options": [
      "kubectl get node <node-name>",
      "kubectl describe node <node-name>",
      "kubectl inspect node <node-name>",
      "kubectl info node <node-name>",
      "kubectl logs node <node-name>"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "'kubectl describe node <node-name>' provides detailed node information.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 197,
    "question": "Which flag can be used with 'kubectl run' to generate a Pod manifest YAML file without creating the resource?",
    "options": [
      "--dry-run=server",
      "--dry-run=client -o yaml",
      "--output=yaml",
      "--generate-only",
      "--no-create"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Using '--dry-run=client -o yaml' outputs the manifest without creation.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 199,
    "question": "Which command is used to apply configuration changes defined in 'deployment.yaml' to a Kubernetes resource?",
    "options": [
      "kubectl create -f deployment.yaml",
      "kubectl apply -f deployment.yaml",
      "kubectl set -f deployment.yaml",
      "kubectl update -f deployment.yaml",
      "kubectl replace -f deployment.yaml"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'kubectl apply -f deployment.yaml' command applies configuration changes to a Kubernetes resource defined in the YAML file. It uses declarative management, ensuring that the resource's current state matches the desired state specified in the file. Other commands like 'kubectl create' are used for creating resources but do not update existing ones, while 'kubectl replace' replaces the entire resource instead of merging changes.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [
      {
        "name": "Kubernetes Documentation: kubectl apply",
        "url": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#apply"
      },
      {
        "name": "Spacelift Blog: kubectl apply vs create",
        "url": "https://spacelift.io/blog/kubectl-apply-vs-create"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:49:03"
  },
  {
    "id": 206,
    "question": "Which command is used to generate a private key for a new Kubernetes user?",
    "options": [
      "openssl genrsa -out user.key 2048",
      "openssl rsa -in user.key -out user.key",
      "openssl req -newkey rsa:2048 -nodes -keyout user.key -out user.csr",
      "kubectl create secret tls user.key",
      "ssh-keygen -t rsa -b 2048 -f user.key"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The command 'openssl genrsa -out user.key 2048' generates a 2048-bit RSA private key.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 207,
    "question": "After generating a CSR and signing it with the cluster CA, how do you configure kubectl to use the new certificate for user 'alice'?",
    "options": [
      "kubectl config set-credentials alice --client-certificate=alice.crt --client-key=alice.key",
      "kubectl create secret tls alice --cert=alice.crt --key=alice.key",
      "kubectl config set-context alice-context --cluster=kubernetes --user=alice",
      "kubectl apply -f alice.crt",
      "kubectl certificate approve alice"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Use 'kubectl config set-credentials' with the client certificate and key.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 222,
    "question": "Which commands can be used to list all loaded AppArmor profiles on a Linux node?",
    "options": [
      "sudo apparmor_status",
      "sudo aa-enforce",
      "sudo apparmor_parser -L",
      "sudo aa-status",
      "sudo systemctl status apparmor"
    ],
    "correct_answers": [
      0,
      3
    ],
    "explanation": "Both `sudo apparmor_status` and `sudo aa-status` can be used to list all loaded AppArmor profiles on a Linux node. These commands provide detailed information about AppArmor, including the number of loaded profiles, their modes (enforce or complain), and any unconfined processes.\n\nOther options are incorrect for the following reasons:\n\n1. `sudo aa-enforce`: This command is used to set an AppArmor profile to enforce mode, not to list profiles.\n2. `sudo apparmor_parser -L`: This command is used for loading AppArmor profiles but does not list them.\n3. `sudo systemctl status apparmor`: This command checks the status of the AppArmor service but does not provide a list of loaded profiles.\n\nUsing either `sudo apparmor_status` or `sudo aa-status` ensures you can monitor and manage AppArmor profiles effectively.",
    "question_type": "multiple-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [
      {
        "name": "AppArmor Documentation - Ubuntu",
        "url": "https://ubuntu.com/server/docs/security-apparmor"
      },
      {
        "name": "Linux Manual Pages - aa-status",
        "url": "https://manpages.ubuntu.com/manpages/bionic/man8/aa-status.8.html"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:38"
  },
  {
    "id": 223,
    "question": "In Kubernetes, how can you apply an AppArmor profile to all containers within a Pod?",
    "options": [
      "Set the profile in the Pod's securityContext",
      "Annotate each container with the AppArmor profile",
      "Use the 'appArmorProfile' field in the container spec",
      "Specify the profile in the Deployment's metadata",
      "Set the profile in the node's AppArmor configuration"
    ],
    "correct_answers": [
      1,
      2
    ],
    "explanation": "To apply an AppArmor profile to all containers in a Pod, you can use one of two methods:\n\n1. **Annotations**: Use the annotation `container.apparmor.security.beta.kubernetes.io/<container_name>: <profile_ref>` for each container in the Pod. This method has been traditionally used and is backward-compatible.\n\n2. **`appArmorProfile` field in `securityContext`**: Starting with Kubernetes v1.30, you can specify the AppArmor profile directly in the `securityContext` of a container using the `appArmorProfile` field. This method is more intuitive and avoids relying on annotations.\n\nOther options, such as setting it in the Pod's `securityContext`, Deployment metadata, or node-level configuration, are not valid methods for applying AppArmor profiles to specific containers.",
    "question_type": "multiple-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - Security Contexts",
        "url": "https://kubernetes.io/docs/tutorials/clusters/apparmor/"
      },
      {
        "name": "Kubernetes v1.30 Release Notes",
        "url": "https://kubernetes.io/docs/setup/release/notes/#feature-apparmor-profile-in-securitycontext"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:38"
  },
  {
    "id": 236,
    "question": "Which Kubernetes resource is used to request certificate signing via the Kubernetes API?",
    "options": [
      "CertificateRequest",
      "CertificateSigningRequest",
      "CertificateApproval",
      "CertificateSigning",
      "Certificate"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "CertificateSigningRequest is used to request certificate signing.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 237,
    "question": "Which command is used to approve a CertificateSigningRequest (CSR) in Kubernetes?",
    "options": [
      "kubectl sign csr <csr-name>",
      "kubectl create csr <csr-name>",
      "kubectl approve csr <csr-name>",
      "kubectl certificate approve <csr-name>",
      "kubectl csr approve <csr-name>"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "The correct command to approve a CertificateSigningRequest (CSR) in Kubernetes is 'kubectl certificate approve <csr-name>'. This command instructs the certificate signing controller to approve the CSR, allowing the requested certificate to be issued. Other options like 'kubectl create' are used for creating resources, while 'kubectl sign' and 'kubectl csr approve' are invalid commands.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [
      {
        "name": "Kubernetes Documentation: Managing TLS Certificates",
        "url": "https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/"
      },
      {
        "name": "Kubernetes Reference: kubectl certificate approve",
        "url": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_certificate/kubectl_certificate_approve/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:52:59"
  },
  {
    "id": 240,
    "question": "Which command lists all processes listening on TCP and UDP ports?",
    "options": [
      "sudo netstat -tulpn",
      "sudo lsof -i",
      "sudo ss -tulw",
      "sudo ps aux | grep LISTEN",
      "sudo netstat -an"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The command 'sudo netstat -tulpn' lists all listening ports with process IDs.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Connectivity",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 241,
    "question": "After identifying an unwanted process listening on a port, which command can you use to stop it?",
    "options": [
      "killall <process-name>",
      "sudo stop <process-name>",
      "sudo systemctl disable <process-name>",
      "sudo kill <pid>",
      "sudo service <process-name> remove"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "Using 'sudo kill <pid>' stops the process with the given PID.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Connectivity",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 242,
    "question": "Which command can be used to remove an unwanted package 'apache2' from a Debian-based system?",
    "options": [
      "sudo apt-get install apache2",
      "sudo yum remove apache2",
      "sudo apt-get remove apache2",
      "sudo rpm -e apache2",
      "sudo dnf erase apache2"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "On Debian-based systems, 'sudo apt-get remove apache2' removes the package.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Supply Chain Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 243,
    "question": "Which command lists all installed packages on a Debian-based system using apt?",
    "options": [
      "apt list --installed",
      "dpkg -l",
      "rpm -qa",
      "yum list installed",
      "pkg info"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The command 'apt list --installed' lists all packages installed via apt.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Supply Chain Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 244,
    "question": "Which strace option summarises the time spent in each system call?",
    "options": [
      "-c",
      "-p",
      "-t",
      "-e trace=%time",
      "-s"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The '-c' option produces a summary of system calls and their time usage.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 245,
    "question": "To trace system calls made by a running process with PID 1234, which command would you use?",
    "options": [
      "strace 1234",
      "strace -p 1234",
      "strace -c 1234",
      "sudo trace -pid 1234",
      "strace --process 1234"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'strace -p 1234' command attaches to the process with PID 1234.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 246,
    "question": "Which command computes the SHA256 checksum of the file '/usr/bin/kubelet'?",
    "options": [
      "sha1sum /usr/bin/kubelet",
      "md5sum /usr/bin/kubelet",
      "checksum -sha256 /usr/bin/kubelet",
      "sha256sum /usr/bin/kubelet",
      "hash -a sha256 /usr/bin/kubelet"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "sha256sum /usr/bin/kubelet calculates the SHA256 checksum.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 247,
    "question": "Why is it important to verify the checksums of Kubernetes binaries?",
    "options": [
      "To ensure they are the latest version",
      "To verify the integrity and authenticity of the binaries",
      "To improve their performance",
      "To check for syntax errors",
      "To enable automatic updates"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Verifying checksums ensures that the binaries are authentic and unaltered.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "PKI",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 289,
    "question": "What is a Service Mesh in Kubernetes?",
    "options": [
      "A network overlay for pod communication",
      "An infrastructure layer for handling service-to-service communication",
      "A type of storage solution",
      "A container runtime interface",
      "A logging mechanism"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "A Service Mesh provides an infrastructure layer that handles secure and observable service-to-service communication.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Service Mesh",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 290,
    "question": "Which of the following are advantages of using a Service Mesh? (Select all that apply)",
    "options": [
      "Observability",
      "Simplifies application code",
      "Enhanced security with mutual TLS",
      "Adds significant overhead",
      "Requires no additional expertise"
    ],
    "correct_answers": [
      0,
      2
    ],
    "explanation": "A Service Mesh improves observability and enhances security (for example, via mutual TLS).",
    "question_type": "multiple-choice",
    "domain": "Platform Security",
    "subdomain": "Service Mesh",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 300,
    "question": "Which command can be used to set the default namespace for kubectl commands?",
    "options": [
      "kubectl config use-context <namespace>",
      "kubectl set namespace <namespace>",
      "kubectl config set-context --current --namespace=<namespace>",
      "kubectl namespace set <namespace>",
      "kubectl switch namespace <namespace>"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "This command sets the default namespace in the current context.",
    "question_type": "single-choice",
    "domain": "Platform Security",
    "subdomain": "Observability",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 7,
    "question": "What is the primary purpose of a Cloud Workload Protection Platform (CWPP)?",
    "options": [
      "Monitor network traffic",
      "Secure workloads across various environments",
      "Manage cloud costs",
      "Provide identity and access management",
      "Automate infrastructure provisioning"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "CWPPs are designed to protect workloads in any environment.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Workload and Application Code Security",
    "sources": [],
    "revision": 1,
    "revision_date": "2025-02-04 09:03:39"
  },
  {
    "id": 10,
    "question": "What is the primary purpose of signing container images in a cloud-native environment?",
    "options": [
      "To reduce the image size for deployment",
      "To verify the image's integrity and authenticity",
      "To include metadata for deployment automation",
      "To enforce runtime security policies",
      "To speed up image pulling during deployment"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The primary purpose of image signing is to ensure that a container image originates from a trusted source and has not been tampered with. This process involves cryptographically signing the image, allowing users to verify its integrity and authenticity before use. Incorrect options such as reducing image size or speeding up deployment do not relate to the security function of signing. Similarly, metadata inclusion and runtime policy enforcement are separate mechanisms unrelated to image signing.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [
      {
        "name": "Docker Content Trust Documentation",
        "url": "https://docs.docker.com/engine/security/trust/"
      },
      {
        "name": "CNCF Cloud Native Security Whitepaper",
        "url": "https://github.com/cncf/tag-security/blob/main/security-whitepaper/cloud-native-security-whitepaper.md"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:25:13"
  },
  {
    "id": 14,
    "question": "How do multistage builds in Docker reduce image size?",
    "options": [
      "By running multiple containers within a single image",
      "By creating images compatible with multiple architectures",
      "By separating build-time dependencies from runtime components in different stages",
      "By enabling parallel builds across multiple stages",
      "By deploying to multiple environments simultaneously"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Multistage builds in Docker allow developers to separate build-time dependencies (e.g., compilers, libraries) from runtime components by using multiple `FROM` instructions in a single Dockerfile. This ensures that only the necessary artifacts (e.g., binaries) are included in the final image, significantly reducing its size and improving security. While multistage builds can simplify workflows, they do not inherently enable parallel builds or support multi-environment deployments.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [
      {
        "name": "Docker Documentation: Multi-Stage Builds",
        "url": "https://docs.docker.com/get-started/docker-concepts/building-images/multi-stage-builds/"
      },
      {
        "name": "Earthly Blog: Understanding Docker Multistage Builds",
        "url": "https://earthly.dev/blog/docker-multistage/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:13:12"
  },
  {
    "id": 18,
    "question": "Which of the following statements are true about gVisor and Firecracker? (Select all that apply)",
    "options": [
      "gVisor is a user-space kernel providing sandboxing",
      "Firecracker uses lightweight microVMs with KVM",
      "Both provide full hardware virtualization",
      "Firecracker is a container runtime interface",
      "gVisor offers better performance than traditional VMs"
    ],
    "correct_answers": [
      0,
      1,
      4
    ],
    "explanation": "gVisor provides sandboxing; Firecracker uses microVMs; gVisor offers better performance than traditional VMs.",
    "question_type": "multiple-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 19,
    "question": "What is the primary difference between MicroVM and User-Space Kernel approaches?",
    "options": [
      "MicroVMs are larger in size",
      "User-space kernels provide hardware virtualization",
      "MicroVMs run directly on hardware without a host OS",
      "User-space kernels intercept system calls in user space",
      "There is no difference; they are the same"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "User-space kernels like gVisor run in user space and intercept system calls.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 22,
    "question": "What components are needed to verify the integrity of a container image?",
    "options": [
      "A checksum and the image manifest",
      "A digital signature, public key, and verification tool",
      "The Dockerfile used to build the image",
      "Access to the container registry logs",
      "The image's pull secret"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "These components verify image integrity and authenticity.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 28,
    "question": "What are the 4 Cs of cloud-native security?",
    "options": [
      "Code, Container, Cluster, Cloud",
      "Compute, Connectivity, Compliance, Cost",
      "Cloud, Core, Control, Compliance",
      "Code, Continuous Integration, Cloud, Compliance",
      "Containerization, Coordination, Configuration, Control"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The 4 Cs represent layers where security should be applied.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "The 4Cs of Cloud Native Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 32,
    "question": "Does the underlying cloud infrastructure affect Kubernetes cluster security?",
    "options": [
      "No, Kubernetes abstracts the infrastructure entirely",
      "Yes, because infrastructure vulnerabilities can compromise the cluster",
      "Only if using on-premises hardware",
      "It depends on the Kubernetes version",
      "Only when running stateful applications"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The security of the underlying infrastructure affects the cluster's security.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Cloud Provider and Infrastructure Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 38,
    "question": "When is soft multi-tenancy preferred over hard multi-tenancy?",
    "options": [
      "When strict isolation is required",
      "For untrusted tenant workloads",
      "To maximize resource efficiency in trusted environments",
      "In compliance-regulated industries",
      "When using multiple clusters"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Soft tenancy is suitable when strict isolation isn't required.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 39,
    "question": "How can resources be isolated in a multi-tenancy Kubernetes setting? (Select all that apply)",
    "options": [
      "Using separate clusters for each tenant",
      "Implementing namespaces and RBAC",
      "Applying network policies",
      "Sharing service accounts among tenants",
      "Disabling resource quotas"
    ],
    "correct_answers": [
      0,
      1,
      2
    ],
    "explanation": "These methods help isolate resources in multi-tenancy setups.",
    "question_type": "multiple-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 40,
    "question": "What is a consistent way of enforcing policies across Kubernetes clusters?",
    "options": [
      "Manually applying policies on each cluster",
      "Using policy as code tools like OPA or Kyverno",
      "Relying on default Kubernetes settings",
      "Using different policies for each environment",
      "Enforcing policies at the application level"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Policy as code ensures consistent enforcement across clusters.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Controls and Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 45,
    "question": "What could be a possible reason for failing to pull the latest version of an image from 'k8s.gcr.io'?",
    "options": [
      "The image registry is deprecated",
      "Incorrect image tag or name",
      "Network policies blocking egress traffic",
      "The node has insufficient resources",
      "kube-proxy is not running"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "A common reason is specifying an incorrect image name or tag.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 54,
    "question": "Which of the following best describes the function of Open Policy Agent (OPA) in Kubernetes?",
    "options": [
      "A tool for monitoring cluster performance",
      "A general-purpose policy engine that can enforce custom policies",
      "A built-in Kubernetes admission controller",
      "A network policy enforcement tool",
      "A secret management system"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "OPA allows you to define and enforce custom policies in Kubernetes and other systems.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Controls and Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 63,
    "question": "What is a potential risk of mounting the Docker socket ('/var/run/docker.sock') into a container?",
    "options": [
      "No risk; it's a common practice",
      "The container can control the Docker daemon and other containers",
      "It improves container performance",
      "It provides secure access to host resources",
      "It isolates the container from the host"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Mounting the Docker socket can lead to full control over the host's Docker daemon.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 66,
    "question": "How can you ensure that only signed images are run in your Kubernetes cluster?",
    "options": [
      "Use imagePullSecrets",
      "Configure admission controllers to verify image signatures",
      "Manually inspect images before deployment",
      "Disable image caching on nodes",
      "Use a private container registry"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Admission controllers can enforce policies to allow only signed images.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 73,
    "question": "What is the primary benefit of using multistage Docker builds?",
    "options": [
      "Faster build times by reusing intermediate stages",
      "Smaller and more secure final images by excluding build-time dependencies",
      "Compatibility with older Docker versions for broader deployment",
      "Simplified deployment scripts for easier automation",
      "Enhanced network performance during container communication"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The primary advantage of multistage Docker builds is the ability to create smaller and more secure final images. By separating the build and runtime stages, unnecessary build-time dependencies (e.g., compilers, libraries) are excluded from the final image. This reduces the image size, minimizes the attack surface, and enhances security. While multistage builds can indirectly improve build times by optimizing layers, their main focus is on producing leaner and safer images. They do not specifically address network performance or deployment script simplification.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [
      {
        "name": "Docker Documentation: Multi-Stage Builds",
        "url": "https://docs.docker.com/get-started/docker-concepts/building-images/multi-stage-builds/"
      },
      {
        "name": "Cherry Servers: Docker Multi-Stage Build",
        "url": "https://www.cherryservers.com/blog/docker-multistage-build"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:13:12"
  },
  {
    "id": 90,
    "question": "What is the outcome of setting 'imagePullPolicy: Never' in a pod spec?",
    "options": [
      "The image will always be pulled from the registry",
      "The pod will fail to start if the image is not present locally",
      "The image will be pulled only if not present",
      "The pod will ignore image updates in the registry",
      "The kubelet will crash"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Setting 'imagePullPolicy: Never' prevents pulling images; the image must exist locally.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 133,
    "question": "Which object defines how to build and deploy an application from source code in Kubernetes?",
    "options": [
      "Deployment",
      "StatefulSet",
      "BuildConfig",
      "DaemonSet",
      "Job"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "While not a native Kubernetes object, BuildConfig is used in OpenShift for this purpose.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Workload and Application Code Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 146,
    "question": "Which of the following is a key principle of the 4 Cs of cloud-native security?",
    "options": [
      "Encrypting data at rest only",
      "Applying security at Code, Container, Cluster, and Cloud levels",
      "Relying solely on cloud provider security",
      "Using containers to bypass security checks",
      "Limiting security to the network layer"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 4 Cs emphasise layered security across all levels.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "The 4Cs of Cloud Native Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 150,
    "question": "Which Kubernetes object allows you to inject environment variables into a pod from a ConfigMap?",
    "options": [
      "VolumeMount",
      "EnvFrom",
      "Secret",
      "Annotation",
      "Label"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'envFrom' field in a pod spec allows environment variables from a ConfigMap to be injected.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Workload and Application Code Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 156,
    "question": "To block access to the cloud metadata API from Pods, which IP address should be blocked in the NetworkPolicy?",
    "options": [
      "0.0.0.0/0",
      "127.0.0.1/32",
      "169.254.169.254/32",
      "255.255.255.255/32",
      "192.168.0.1/32"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Blocking 169.254.169.254 prevents access to the cloud metadata service.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Cloud Provider and Infrastructure Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 164,
    "question": "Which tool can be used to perform static analysis of Kubernetes manifests for security issues?",
    "options": [
      "kube-bench",
      "kube-hunter",
      "kube-score",
      "kubectl describe",
      "kubesec"
    ],
    "correct_answers": [
      4
    ],
    "explanation": "Kubesec is a tool for static analysis of Kubernetes manifests to find security issues.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Controls and Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 203,
    "question": "Which annotation is used in a Pod manifest to specify an AppArmor profile for a container named 'nginx'?",
    "options": [
      "apparmor.security.beta.kubernetes.io/nginx: 'localhost/nginx-profile'",
      "security.alpha.kubernetes.io/apparmor/nginx: 'localhost/nginx-profile'",
      "container.apparmor.security.beta.kubernetes.io/nginx: 'localhost/nginx-profile'",
      "nginx.apparmor.kubernetes.io/profile: 'localhost/nginx-profile'",
      "securityContext.apparmorProfile: 'localhost/nginx-profile'"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The correct annotation is 'container.apparmor.security.beta.kubernetes.io/nginx: \"localhost/nginx-profile\"'.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 210,
    "question": "What are the key best practices for hardening container images to enhance security?",
    "options": [
      "Use a minimal base image to reduce the attack surface.",
      "Run containers as root to simplify privilege management.",
      "Remove unnecessary packages and dependencies to minimize potential vulnerabilities.",
      "Expose all ports for maximum connectivity and flexibility.",
      "Regularly scan images for known vulnerabilities and apply necessary patches."
    ],
    "correct_answers": [
      0,
      2,
      4
    ],
    "explanation": "To effectively harden container images, it is crucial to minimize the attack surface and potential vulnerabilities. Using minimal base images ensures that only essential components are included, reducing the number of potential security flaws. Removing unnecessary packages further decreases the likelihood of exploitable vulnerabilities. Regularly scanning images for known vulnerabilities allows for proactive identification and remediation of security risks. Running containers as root is discouraged because it gives the process elevated privileges that it does not need and exposes the host system to vulnerabilities. Exposing all ports creates unnecessary entry points for attackers.",
    "question_type": "multiple-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [
      {
        "name": "NIST Special Publication 800-190",
        "url": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-190.pdf"
      },
      {
        "name": "OWASP Container Security Cheat Sheet",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Container_Security_Cheat_Sheet.html"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 14:05:18"
  },
  {
    "id": 211,
    "question": "In a Dockerfile, which instruction can be used to ensure the application runs as a non-root user?",
    "options": [
      "FROM nonroot",
      "USER nobody",
      "RUN chmod 777 /app",
      "EXPOSE 80",
      "ENTRYPOINT [\"/app\"]"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The USER instruction sets the running user to 'nobody', ensuring the container does not run as root.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Workload and Application Code Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 212,
    "question": "Which command scans a Docker image 'myapp:latest' for HIGH and CRITICAL vulnerabilities using Trivy?",
    "options": [
      "trivy myapp:latest",
      "trivy image --severity HIGH,CRITICAL myapp:latest",
      "trivy scan --critical myapp:latest",
      "trivy image --vulnerabilities HIGH,CRITICAL myapp:latest",
      "trivy inspect myapp:latest"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The command 'trivy image --severity HIGH,CRITICAL myapp:latest' scans the image for critical vulnerabilities.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 213,
    "question": "After identifying a vulnerable image in your cluster, what is the recommended immediate action?",
    "options": [
      "Ignore the vulnerability",
      "Update the image tag to 'latest'",
      "Delete the pod using the image",
      "Restart the Kubernetes cluster",
      "Rebuild the image without changes"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Deleting the pod running the vulnerable image is the recommended immediate action to mitigate risk.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 216,
    "question": "Which flag allows you to run a Docker container sharing the PID namespace with another container named 'container1'?",
    "options": [
      "--pid=host",
      "--pid=container1",
      "--pid=container:container1",
      "--net=container:container1",
      "--namespace=pid:container1"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The '--pid=container:container1' flag allows sharing the PID namespace with 'container1'.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 217,
    "question": "What is the effect of sharing the PID namespace between two Docker containers?",
    "options": [
      "They share the same network interfaces",
      "They can see and signal each other's processes",
      "They share the same filesystem",
      "They can access each other's environment variables",
      "They share the same memory space"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Sharing the PID namespace allows containers to see and interact with each other's processes.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Isolation Techniques",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 218,
    "question": "Why is it recommended to use image digests instead of tags in Kubernetes manifests?",
    "options": [
      "Digests are shorter than tags",
      "Tags can be mutable, but digests ensure image immutability",
      "Using digests is required by Kubernetes",
      "Tags are not supported in private registries",
      "Digests allow for automatic updates"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Digests refer to a specific, immutable image version, ensuring consistency.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 219,
    "question": "How do you obtain the digest of an image 'nginx:1.19'?",
    "options": [
      "docker images nginx:1.19 --digests",
      "docker inspect nginx:1.19 --format='{{.Id}}'",
      "docker pull nginx@sha256",
      "docker inspect --format='{{index .RepoDigests 0}}' nginx:1.19",
      "docker tag nginx:1.19 nginx:sha256"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "The 'docker inspect --format='{{index .RepoDigests 0}}' nginx:1.19' command returns the image digest.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 248,
    "question": "What is a potential risk of using an insecure container registry?",
    "options": [
      "Faster image downloads",
      "Increased image caching",
      "Man-in-the-middle attacks leading to compromised images",
      "Improved image availability",
      "Automatic image updates"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "An insecure registry can be compromised in transit, leading to tampered images.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 249,
    "question": "Which of the following is a best practice when configuring container registries?",
    "options": [
      "Use HTTP instead of HTTPS for performance",
      "Allow anonymous access",
      "Use authenticated and encrypted connections (HTTPS)",
      "Disable TLS verification",
      "Expose the registry publicly without restrictions"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Using HTTPS with authentication secures registry access.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Artifact Repository and Image Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 273,
    "question": "During the build phase of a Kubernetes application, which practices are most effective for ensuring security?",
    "options": [
      "Use minimal base images to reduce the attack surface.",
      "Run containers as root to simplify privilege management.",
      "Scan images for vulnerabilities to identify and remediate potential security flaws.",
      "Include unnecessary packages to provide additional functionality.",
      "Use only authorized images from trusted registries to prevent the introduction of malicious code."
    ],
    "correct_answers": [
      0,
      2,
      4
    ],
    "explanation": "In the build phase, security is best ensured by minimizing the image footprint with minimal base images, regularly scanning for vulnerabilities to catch issues early, and using only authorized images from trusted sources.  Minimal base images reduce the attack surface.  Vulnerability scanning identifies and allows remediation of security flaws before deployment. Using authorized images prevents the introduction of untrusted or malicious code. Running containers as root is a security risk, and including unnecessary packages increases the potential attack surface.",
    "question_type": "multiple-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Workload and Application Code Security",
    "sources": [
      {
        "name": "Kubernetes Security Best Practices",
        "url": "https://kubernetes.io/docs/concepts/security/best-practices/"
      },
      {
        "name": "SANS Institute: Securing Docker Containers",
        "url": "https://www.sans.org/white-papers/36267/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 14:05:18"
  },
  {
    "id": 284,
    "question": "Which of the following are Kubernetes best practices during the Deploy Phase? (Select all that apply)",
    "options": [
      "Implement network policies",
      "Run containers as root",
      "Use image tags like 'latest'",
      "Use the ImagePolicyWebhook admission controller",
      "Apply security contexts to pods and containers"
    ],
    "correct_answers": [
      0,
      3,
      4
    ],
    "explanation": "Deploy best practices include implementing network policies, using admission controllers for images, and applying security contexts.",
    "question_type": "multiple-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Controls and Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 288,
    "question": "Which of the following is a reason to use 'distroless' images?",
    "options": [
      "They include a shell for debugging",
      "They have a larger attack surface",
      "They are minimal images that reduce vulnerabilities",
      "They support all Linux distributions",
      "They are required by Kubernetes"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Distroless images are minimal and reduce the attack surface by excluding unnecessary packages.",
    "question_type": "single-choice",
    "domain": "Cloud Native Security",
    "subdomain": "Workload and Application Code Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 8,
    "question": "Which NIST Special Publication provides guidelines on security and privacy controls for federal information systems?",
    "options": [
      "NIST SP 800-53 Rev. 5",
      "NIST SP 800-190",
      "NIST SP 800-63",
      "NIST SP 800-171",
      "NIST SP 800-30"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This publication provides guidelines on security and privacy controls.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 24,
    "question": "What is the MITRE ATT&CK framework, and how is it used in cybersecurity?",
    "options": [
      "A set of compliance requirements for cloud providers",
      "A vulnerability scanning tool",
      "A knowledge base of adversary tactics and techniques used in cyberattacks",
      "An incident response guide for organizations",
      "A network security protocol for secure communication"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The MITRE ATT&CK framework is a comprehensive knowledge base that catalogs adversary tactics, techniques, and procedures (TTPs) observed in real-world cyberattacks. It is widely used by cybersecurity professionals to understand attacker behavior, improve threat detection, and enhance defense strategies. Other options are incorrect because they describe unrelated tools or concepts.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Threat Modelling Frameworks",
    "sources": [
      {
        "name": "MITRE ATT&CK Official Website",
        "url": "https://attack.mitre.org/"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 14:00:20"
  },
  {
    "id": 301,
    "question": "What is the primary focus of the NIST Cybersecurity Framework?",
    "options": [
      "A universal law for international data privacy",
      "A set of risk management guidelines to identify, protect, detect, respond, and recover from cyber threats",
      "A standard for container registry licensing",
      "A government mandate exclusively for financial institutions",
      "A platform for automating software supply chain security"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The NIST CSF provides a framework for identifying, protecting against, detecting, responding to, and recovering from cyber threats.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 302,
    "question": "Which statement best describes the CIS Kubernetes Benchmark?",
    "options": [
      "It is a proprietary software suite for securing virtual machines",
      "It offers prescriptive configuration guidelines for hardening Kubernetes clusters",
      "It focuses solely on threat modelling for Kubernetes",
      "It is primarily used for scanning container images for malware",
      "It provides guidelines for zero-trust network architecture"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The CIS Kubernetes Benchmark provides detailed configuration guidelines to harden and secure Kubernetes environments.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 304,
    "question": "What is the main purpose of Microsoft’s Security Development Lifecycle (SDL)?",
    "options": [
      "To provide a compliance checklist for healthcare data",
      "To outline an encryption standard for IoT devices",
      "To offer a threat modelling and mitigation process during software development",
      "To define data storage formats for container logs",
      "To guide zero-downtime deployment strategies"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Microsoft’s SDL aims to incorporate threat modelling and mitigation at every stage of software development.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Threat Modelling Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 305,
    "question": "In a Data Flow Diagram (DFD) approach to threat modelling, what is primarily visualised?",
    "options": [
      "Financial transaction records across global markets",
      "Network latency metrics in high-availability clusters",
      "Entry points, exit points, and potential threat vectors within the system",
      "Container orchestration for microservices deployment",
      "Source code management for Git-based repositories"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "DFDs illustrate application data flows, highlighting entry/exit points and possible threat vectors.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Threat Modelling Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 306,
    "question": "Which best defines PCI DSS in a containerized environment?",
    "options": [
      "A software license for open-source container platforms",
      "A set of security standards for systems handling cardholder data, applicable to container-based workflows",
      "A Kubernetes admission controller for preventing configuration drift",
      "A recommended approach to container performance tuning",
      "A zero-trust compliance framework for data science workloads"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "PCI DSS in a containerized environment refers to the application of its security standards to workflows that handle cardholder data within containers. This includes ensuring compliance with requirements such as network segmentation, access control, and real-time monitoring. Other options are incorrect because they either mischaracterize PCI DSS or describe unrelated concepts like software licenses or Kubernetes-specific tools.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [
      {
        "name": "Sysdig Blog - PCI Compliance for Containers and Kubernetes",
        "url": "https://sysdig.com/blog/container-pci-compliance/"
      },
      {
        "name": "Red Hat - Container and Kubernetes Compliance Considerations",
        "url": "https://www.redhat.com/en/topics/containers/compliance"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 14:16:11"
  },
  {
    "id": 307,
    "question": "Why is TLS certificate integration critical for supply chain security in Kubernetes?",
    "options": [
      "It ensures faster application deployment via automation",
      "It facilitates multi-cloud resource allocation",
      "It secures admission controller communication with the API server to prevent man-in-the-middle attacks",
      "It helps in container orchestration on legacy systems",
      "It extends the cluster’s node pool automatically"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Using TLS certificates protects communication channels in Kubernetes, preventing interception or tampering in the supply chain.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Supply Chain Compliance",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 308,
    "question": "Which tool is commonly used to automate CIS Benchmark compliance checks in Kubernetes?",
    "options": [
      "Nmap",
      "Kube-bench",
      "Grafana",
      "syslog-ng",
      "Bash scripts in CronJobs"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Kube-bench automates checks against the CIS Kubernetes Benchmark to ensure configuration compliance.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 309,
    "question": "What is the primary purpose of Open Policy Agent (OPA) Gatekeeper in Kubernetes?",
    "options": [
      "To manage node scaling based on CPU usage",
      "To provide an integrated container registry",
      "To enforce policy-as-code by validating configurations during admission",
      "To offer a threat feed for container vulnerabilities",
      "To install an alternative container runtime in Kubernetes"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "OPA Gatekeeper is a validating admission controller that enforces policies defined as code during resource creation or updates in Kubernetes. It ensures compliance by preventing non-compliant resources from being admitted to the cluster. Incorrect options, such as managing node scaling or providing a container registry, are unrelated to OPA Gatekeeper's functionality. Similarly, it does not handle threat feeds or runtime installation.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [
      {
        "name": "Cloud Google - Pod Security Policies with Gatekeeper",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/pod-security-policies-with-gatekeeper"
      },
      {
        "name": "Open Policy Agent Documentation - Kubernetes Admission Control",
        "url": "https://www.openpolicyagent.org/docs/v0.12.2/kubernetes-admission-control/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:33:32"
  },
  {
    "id": 310,
    "question": "Which of the following best describes Kyverno in a Kubernetes environment?",
    "options": [
      "A container scanning tool for malware detection",
      "A platform for automating cost optimisations",
      "An admission controller for writing and enforcing policies as Kubernetes resources",
      "An event streaming system for logs",
      "A vulnerability database maintained by CIS"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Kyverno is a policy engine designed for Kubernetes, allowing users to write policies as Kubernetes-native resources.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 311,
    "question": "Which statement accurately describes container scanning tools like Aqua Security or Clair?",
    "options": [
      "They are used to manage multi-cluster ingress controllers",
      "They automate vulnerability detection in container images, often before deployment",
      "They provide a database of open-source container licences",
      "They specialise in high-availability cluster provisioning",
      "They replace Kubernetes’ default scheduler"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Tools like Aqua Security or Clair scan container images for known vulnerabilities as part of a secure supply chain process.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Supply Chain Compliance",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 312,
    "question": "Which of the following is a core function of the NIST Cybersecurity Framework?",
    "options": [
      "Monitor, Map, Maintain, Minimise, and Mutate",
      "Identify, Protect, Detect, Respond, and Recover",
      "Review, Replace, Retract, Renew, and Reserve",
      "Discover, Compare, Archive, Document, and Renew",
      "Encrypt, Store, Backup, Alert, and Evaluate"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "NIST CSF’s core functions are Identify, Protect, Detect, Respond, and Recover.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 313,
    "question": "What is the main goal of Botkube in a Kubernetes environment?",
    "options": [
      "To provide an integrated container build system",
      "To automate Slack-based alerts for compliance events and checks",
      "To serve as an API gateway for microservices",
      "To orchestrate container autoscaling across clusters",
      "To replace kubelet on worker nodes"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Botkube integrates with messaging platforms (like Slack) to notify about compliance and security events in Kubernetes.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 314,
    "question": "Which framework specifically focuses on secure software development practices by including threat modelling and validation phases?",
    "options": [
      "Microsoft Security Development Lifecycle (SDL)",
      "Open Container Initiative (OCI) Standard",
      "JWT Token Compliance Framework",
      "HTTP Strict Transport Security (HSTS)",
      "NIST SP 800-63"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Microsoft’s SDL includes phases for requirements definition, threat modelling, mitigation, and validation.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Threat Modelling Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 315,
    "question": "Which compliance framework is best known for emphasising continuous policy review and network traffic monitoring in cloud environments?",
    "options": [
      "NIST Cybersecurity Framework",
      "SOC 1 Type II",
      "ISO 27017",
      "FedRAMP",
      "COBIT"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The NIST Cybersecurity Framework underlines ongoing policy review and traffic monitoring to manage risks effectively.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 316,
    "question": "What is the primary purpose of threat modelling in Kubernetes security?",
    "options": [
      "To define default CPU and memory limits for all workloads",
      "To visualise data flows and identify potential attack vectors in cluster configurations",
      "To enforce container image scanning during runtime",
      "To conduct load testing on container orchestration systems",
      "To accelerate pipeline deployments in CI/CD"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Threat modelling aims to uncover vulnerabilities by mapping data flows and identifying potential risks within the Kubernetes environment.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Threat Modelling Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 317,
    "question": "Which of the following best describes the role of Kubernetes admission controllers in compliance?",
    "options": [
      "They schedule pods onto nodes according to resource requirements",
      "They manage persistent storage volumes for stateful applications",
      "They intercept API requests to validate and enforce policies before object creation or modification",
      "They act as a certificate authority for cluster nodes",
      "They provide a GUI for cluster configuration"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Admission controllers can validate and enforce compliance policies before an object is admitted into the cluster’s runtime environment.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 318,
    "question": "Which guidance document provides best practices for mitigating supply chain risks in Kubernetes environments?",
    "options": [
      "TOGAF Enterprise Architecture Framework",
      "OWASP Top 10 Security Risks",
      "NSA/CISA Kubernetes Hardening Guidance",
      "ITIL Service Management Framework",
      "SRE (Site Reliability Engineering) Handbook"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The NSA/CISA Kubernetes Hardening Guidance outlines strategies to mitigate supply chain risks in Kubernetes environments. It includes recommendations for securing container images, implementing role-based access control (RBAC), and ensuring secure configurations for clusters.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [
      {
        "name": "NSA/CISA Kubernetes Hardening Guidance",
        "url": "https://media.defense.gov/2021/Aug/03/2002820346/-1/-1/0/ESF_KUBERNETES_HARDENING_GUIDANCE.PDF"
      },
      {
        "name": "Kubernetes Supply Chain Security Best Practices",
        "url": "https://kubernetes.io/blog/2021/04/06/supply-chain-security-best-practices/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:43:26"
  },
  {
    "id": 319,
    "question": "Why is Infrastructure as Code (IaC) relevant to Kubernetes compliance?",
    "options": [
      "It replaces the need for container registries",
      "It enables the manual application of security patches",
      "It provides a script-free approach to deployment",
      "It ensures repeatable and auditable deployments aligned with security best practices",
      "It automatically detects vulnerabilities without scanning"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "IaC tools like Terraform or CloudFormation allow consistent and secure provisioning, which is crucial for compliance and auditing.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 320,
    "question": "Which compliance standard is particularly relevant for organisations in healthcare handling Protected Health Information (PHI)?",
    "options": [
      "HIPAA",
      "SOX",
      "ISO 9001",
      "GDPR",
      "MITRE ATT&CK"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "HIPAA contains security and privacy rules pertinent to PHI and is relevant when deploying healthcare solutions on Kubernetes.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 321,
    "question": "Which methodology involves visualising application components and interactions to identify security threats?",
    "options": [
      "Scrum methodology",
      "Data Flow Diagram (DFD) approach",
      "Waterfall model",
      "Incident Response Cycle",
      "Serverless microservices design"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The DFD approach helps map out data paths and interactions, facilitating threat identification and mitigation.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Threat Modelling Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 322,
    "question": "Which tool can be used for real-time compliance monitoring and alerting in Kubernetes clusters?",
    "options": [
      "Sysdig Secure",
      "NTP daemon",
      "CoreDNS",
      "Kubernetes Dashboard",
      "etcd"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Sysdig Secure, like other tools, offers real-time compliance monitoring, anomaly detection, and security enforcement in Kubernetes.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 324,
    "question": "How does Kube-bench contribute to Kubernetes security?",
    "options": [
      "By automating cluster scaling during high load",
      "By auditing cluster configurations against CIS Kubernetes Benchmark recommendations",
      "By providing a continuous integration pipeline for containers",
      "By replacing default CNI plugins with a secure version",
      "By encrypting container images at runtime"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Kube-bench automates the evaluation of Kubernetes cluster configurations to align with CIS best practices.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 325,
    "question": "Which compliance framework is considered mandatory for U.S. federal agencies or their contractors hosting government data in the cloud?",
    "options": [
      "FedRAMP",
      "COSO",
      "ISO 20000",
      "DMARC",
      "SAML"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "FedRAMP is a government-wide program for assessing and authorising cloud services used by U.S. federal agencies.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 326,
    "question": "Which of the following is a key objective of supply chain compliance in Kubernetes?",
    "options": [
      "To reduce container start-up times",
      "To ensure each software component, including third-party images, meets security standards",
      "To provide a universal logging format for microservices",
      "To scale nodes automatically based on temperature sensor data",
      "To track CPU resource usage for cost optimisation"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Supply chain compliance addresses verifying the integrity and security of all components used in an application’s lifecycle.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Supply Chain Compliance",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 327,
    "question": "Which statement best describes the purpose of the CIS Controls in an enterprise security context?",
    "options": [
      "They are licensing restrictions for enterprise software",
      "They list hardware specifications for data centre appliances",
      "They outline a set of actions to defend systems from common cyber attacks",
      "They provide guidelines for AI-based container scheduling",
      "They focus exclusively on physical security measures"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The CIS Controls recommend a series of steps to help organisations defend against the most widespread cyber threats.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 328,
    "question": "Which tool allows policy enforcement through a webhooks-based admission controller for Kubernetes compliance?",
    "options": [
      "Kubeproxy",
      "Prometheus",
      "OPA Gatekeeper",
      "kubectl",
      "MetalLB"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Open Policy Agent (OPA) Gatekeeper uses admission webhooks to enforce custom policies on Kubernetes resources.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Automation and Tooling",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 329,
    "question": "What is the primary focus of the NSA/CISA Kubernetes Hardening Guidance?",
    "options": [
      "Using insecure container registries for testing purposes",
      "Skipping vulnerability scanning to reduce operational overhead",
      "Securing supply chain components and minimizing container privileges",
      "Disabling TLS to accelerate deployment processes",
      "Automatically approving all configuration changes to enhance agility"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The NSA/CISA Kubernetes Hardening Guidance emphasizes securing the software supply chain and minimizing container privileges to reduce attack surfaces. This includes practices like signing container images, scanning for vulnerabilities, and implementing least privilege access controls.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [
      {
        "name": "NSA/CISA Kubernetes Hardening Guidance",
        "url": "https://media.defense.gov/2021/Aug/03/2002820346/-1/-1/0/ESF_KUBERNETES_HARDENING_GUIDANCE.PDF"
      },
      {
        "name": "Kubernetes Security Best Practices",
        "url": "https://kubernetes.io/docs/concepts/security/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:43:26"
  },
  {
    "id": 330,
    "question": "What is the main advantage of applying CIS Kubernetes Benchmark in production clusters?",
    "options": [
      "It guarantees zero downtime of all microservices",
      "It provides prescriptive hardening steps to bolster security and compliance",
      "It enforces a rolling-update strategy by default",
      "It offers automatic data encryption for stateful workloads",
      "It replaces manual container orchestration with serverless functions"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The CIS Kubernetes Benchmark offers practical recommendations to harden production clusters, improving overall security and compliance.",
    "question_type": "single-choice",
    "domain": "Compliance and Security Frameworks",
    "subdomain": "Compliance Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": "2025-02-04 15:50:32"
  },
  {
    "id": 1,
    "question": "What was the precursor to the Pod Security Standards (PSS) in Kubernetes?",
    "options": [
      "Pod Security Admission (PSA)",
      "Kubernetes Security Policies (KSP)",
      "PodSecurityPolicy (PSP)",
      "Network Policies",
      "Role-Based Access Control (RBAC)"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "PSP was the precursor to PSS; it was deprecated and replaced by Pod Security Standards and the PodSecurity admission controller.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Standards",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 2,
    "question": "How do you enable Pod Security Admission (PSA) in a Kubernetes cluster?",
    "options": [
      "Install the PSA plugin via kubectl",
      "Add 'PodSecurity' to the '--enable-admission-plugins' flag in the API server",
      "Apply a custom resource definition for PSA",
      "Use a third-party tool to enforce PSA",
      "Enable it in the kubelet configuration"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Enabling the PodSecurity admission plugin requires updating the API server's configuration.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 3,
    "question": "Can you enforce more than one Pod Security Admission (PSA) policy level concurrently within a single namespace?",
    "options": [
      "Yes, by applying multiple labels",
      "No, only one policy level per namespace",
      "Yes, but only with custom configurations",
      "Only if the namespace is partitioned",
      "It depends on the Kubernetes version"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "PSA policies are applied at the namespace level. While multiple labels can be applied to a namespace, each label corresponds to a specific mode (enforce, audit, or warn), and only one PSA policy level (privileged, baseline, or restricted) can be enforced per namespace for each mode. This ensures clear and consistent policy enforcement.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [
      {
        "name": "Kubernetes Documentation",
        "url": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
      },
      {
        "name": "Red Hat Documentation",
        "url": "https://docs.redhat.com/en/documentation/openshift_dedicated/4/html/authentication_and_authorization/understanding-and-managing-pod-security-admission"
      },
      {
        "name": "Innablr Blog",
        "url": "https://www.innablr.com.au/blog/kubernetes-pod-security-using-podsecuritystandards"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-04 13:52:44"
  },
  {
    "id": 4,
    "question": "Which of the following restrictions does the 'baseline' Pod Security Standard enforce? (Select all that apply)",
    "options": [
      "Disallows privileged containers",
      "Allows hostPath volumes",
      "Blocks host networking and ports",
      "Requires running as non-root",
      "Allows all Linux capabilities"
    ],
    "correct_answers": [
      0,
      2
    ],
    "explanation": "The 'baseline' policy disallows privileged containers and blocks host networking and ports.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Standards",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 5,
    "question": "In Kubernetes RBAC, what does a Role define?",
    "options": [
      "A set of users and their passwords",
      "Permissions within a namespace",
      "Network policies for pods",
      "Global cluster-wide permissions",
      "Resource quotas for a project"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "A Role defines permissions (rules) applicable within a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 13,
    "question": "How do Network Policies work in Kubernetes?",
    "options": [
      "By default, they block all traffic between pods",
      "They use iptables rules to control pod communication",
      "They are enforced by the kube-scheduler",
      "They manage access to the Kubernetes API",
      "They control storage access for pods"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Network Policies are implemented via iptables rules by the network plugin.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 16,
    "question": "Does setting 'privileged: true' on a pod change its access level to Kubernetes Secrets?",
    "options": [
      "Yes, it grants full access to all Secrets",
      "No, it only affects host system privileges",
      "Yes, but only within the same namespace",
      "No, it prevents access to Secrets",
      "It depends on RBAC settings"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Privileged mode doesn't change access to Kubernetes Secrets.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 20,
    "question": "What is a potential impact of enabling detailed auditing of request responses in Kubernetes?",
    "options": [
      "Improved cluster performance",
      "Reduced storage requirements",
      "Increased security without any drawbacks",
      "Performance overhead and increased storage usage",
      "Disabling of API server logging"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "Detailed auditing can impact performance and increase storage needs.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 30,
    "question": "Why might a pod still have privileged access after enforcing the 'restricted' PSS/PSA on its namespace?",
    "options": [
      "The policy does not apply to existing pods",
      "Misconfigured namespace labels",
      "The API server does not support PSS",
      "The pod overrides the policy",
      "Privileged access is always allowed"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "If labels are incorrect, the policy won't be enforced.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 33,
    "question": "Which authentication mechanisms are used by kubeadm? (Select all that apply)",
    "options": [
      "TLS certificates",
      "Token-based authentication",
      "OAuth tokens",
      "Static passwords",
      "Biometric authentication"
    ],
    "correct_answers": [
      0,
      1
    ],
    "explanation": "kubeadm uses TLS certificates and token-based authentication mechanisms.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authentication",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 35,
    "question": "Why is a ConfigMap not suitable for storing secrets?",
    "options": [
      "It cannot be mounted as a volume",
      "It does not support key-value pairs",
      "Data is stored in plain text",
      "It is deprecated in recent Kubernetes versions",
      "It has size limitations"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "ConfigMaps are not designed to store sensitive data securely.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 46,
    "question": "Why might a Network Policy not work as expected in a Kubernetes cluster?",
    "options": [
      "Network Policies are enabled by default",
      "The CNI plugin does not support Network Policies",
      "The policy YAML has a syntax error",
      "The API server is down",
      "Network Policies only affect external traffic"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "If the CNI plugin does not support Network Policies, they won�t be enforced.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 47,
    "question": "If a user is granted the 'cluster-admin' ClusterRole through a RoleBinding, what level of access will they have?",
    "options": [
      "Full administrative privileges limited to the namespace where the RoleBinding is applied",
      "Full cluster-wide administrative privileges",
      "Read-only access to all resources in the cluster",
      "No permissions; ClusterRoles require ClusterRoleBindings to take effect",
      "Access only to service accounts within the namespace"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "When a ClusterRole, such as 'cluster-admin', is assigned using a RoleBinding, it grants full administrative privileges but only within the namespace where the RoleBinding is applied. This is because RoleBindings are namespace-scoped, meaning they cannot grant cluster-wide permissions even if the associated role is a ClusterRole. To grant cluster-wide permissions, a ClusterRoleBinding must be used. Incorrect options: (1) Full cluster-wide privileges require a ClusterRoleBinding, not a RoleBinding. (2) Read-only access is not tied to this scenario. (3) The statement about 'no permissions' is incorrect because RoleBindings do apply within their namespace. (4) Access to service accounts is not exclusive in this context.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - RBAC",
        "url": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
      },
      {
        "name": "StrongDM Blog - Kubernetes RBAC Explained",
        "url": "https://www.strongdm.com/blog/kubernetes-rbac-role-based-access-control"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:58"
  },
  {
    "id": 51,
    "question": "Which of the following is a method to enable PSA in a Kubernetes cluster?",
    "options": [
      "Applying labels to pods directly",
      "Configuring the API server's admission controllers",
      "Setting environment variables on nodes",
      "Using a third-party admission webhook",
      "Updating kubelet configurations"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Enabling PSA involves adding the 'PodSecurity' admission plugin to the API server's '--enable-admission-plugins' flag.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 52,
    "question": "In Kubernetes RBAC, what does a RoleBinding do?",
    "options": [
      "Defines permissions within a namespace",
      "Binds roles to users or groups within a namespace",
      "Creates a new role with cluster-wide permissions",
      "Manages network policies for a namespace",
      "Sets resource quotas for a project"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "A RoleBinding ties a Role to subjects (users, groups, service accounts) within a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 60,
    "question": "What is the function of Resource Quotas in Kubernetes?",
    "options": [
      "Limit the number of namespaces",
      "Restrict access to the API server",
      "Control resource consumption per namespace",
      "Schedule pods to specific nodes",
      "Enforce network policies"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Resource Quotas limit the amount of resources a namespace can consume.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 62,
    "question": "Which Kubernetes object should you use to store sensitive configuration data?",
    "options": [
      "ConfigMap",
      "Secret",
      "Volume",
      "Pod Annotation",
      "Deployment"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Secrets are designed to store sensitive data like passwords, tokens, and keys.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 64,
    "question": "Which of the following are common CNI plugins that support Network Policies? (Select all that apply)",
    "options": [
      "Flannel",
      "Calico",
      "Weave Net",
      "AWS VPC CNI",
      "Cilium"
    ],
    "correct_answers": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Calico, Weave Net, Cilium, and AWS VPC CNI are CNI plugins that support Network Policies. Flannel does not support them by default. As of August 2023, AWS VPC CNI supports network policies but requires them to be enabled and does not support them for Fargate or Windows containers.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [
      {
        "name": "AWS Announcement on VPC CNI Network Policy Support",
        "url": "https://aws.amazon.com/about-aws/whats-new/2023/08/amazon-vpc-cni-kubernetes-networkpolicy-enforcement/"
      },
      {
        "name": "AWS EKS Documentation on Network Policy Configuration",
        "url": "https://docs.aws.amazon.com/eks/latest/userguide/cni-network-policy-configure.html#enable-network-policy-parameter"
      },
      {
        "name": "Kubernetes Documentation on Network Policies",
        "url": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-04 11:02:29"
  },
  {
    "id": 67,
    "question": "Which Kubernetes feature allows for encryption of Secrets at rest?",
    "options": [
      "Enabling TLS on the API server",
      "Using etcd encryption provider",
      "Storing Secrets in ConfigMaps",
      "Encrypting data in the application layer",
      "Using third-party encryption tools"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Enabling etcd encryption at rest encrypts Secrets stored in etcd.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 68,
    "question": "What is the default network policy behavior if no policies are applied?",
    "options": [
      "All ingress and egress traffic is denied",
      "All ingress traffic is denied; egress is allowed",
      "All ingress and egress traffic is allowed",
      "All egress traffic is denied; ingress is allowed",
      "Traffic is allowed only within the namespace"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "By default, Kubernetes allows all traffic if no Network Policies are applied.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 69,
    "question": "How does Kubernetes Secrets improve security over ConfigMaps?",
    "options": [
      "Secrets are encrypted by default",
      "Secrets are stored in a separate database",
      "Secrets are base64-encoded and can have additional encryption",
      "Secrets provide versioning",
      "Secrets can only be accessed by cluster admins"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Secrets are base64-encoded and can be encrypted at rest, offering better security than ConfigMaps.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 70,
    "question": "Which component is responsible for enforcing Pod Security Standards?",
    "options": [
      "kube-scheduler",
      "kube-apiserver with PodSecurity admission plugin",
      "kube-controller-manager",
      "kubelet",
      "etcd"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The PodSecurity admission plugin enforces Pod Security Standards.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 71,
    "question": "What is the purpose of the '--allow-privileged' flag in Kubernetes?",
    "options": [
      "Allows pods to use privileged containers",
      "Enables access to the API server without authentication",
      "Grants admin rights to all users",
      "Disables security contexts",
      "Controls access to network policies"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The '--allow-privileged' flag enables or disables the creation of privileged containers.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 74,
    "question": "What is a significant security risk associated with not restricting egress traffic in a Kubernetes cluster?",
    "options": [
      "It complicates the debugging process for network-related issues.",
      "It leads to reduced latency in network communications within the cluster.",
      "It creates a potential pathway for data exfiltration from compromised pods to external, unauthorized destinations.",
      "It enhances and simplifies pod-to-pod communication within the cluster.",
      "It simplifies network configuration, reducing the complexity of network policies."
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Failing to restrict egress traffic in Kubernetes can expose the cluster to significant security risks, most notably data exfiltration. Without proper egress controls, a compromised pod can freely communicate with external servers, potentially leaking sensitive data to attackers. While unrestricted egress might simplify initial network configurations, the security implications far outweigh any convenience gained. Restricting egress traffic is a critical security measure to limit the attack surface and prevent unauthorized communication from within the cluster.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [
      {
        "name": "Tigera: Prevent Data Exfiltration in Kubernetes",
        "url": "https://www.tigera.io/blog/prevent-data-exfiltration-in-kubernetes-the-critical-role-of-egress-access-controls/"
      },
      {
        "name": "Red Hat: Guide to Kubernetes Egress Network Policies",
        "url": "https://www.redhat.com/en/blog/guide-to-kubernetes-egress-network-policies"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:18:37"
  },
  {
    "id": 75,
    "question": "How can you verify that Pod Security Admission is enforcing policies in a namespace?",
    "options": [
      "Check the API server logs",
      "Attempt to create a pod that violates the policy",
      "Inspect the kubelet configuration",
      "Review the scheduler's event log",
      "Use 'kubectl get psa'"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Testing enforcement by trying to create a non-compliant pod verifies PSA functionality.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 76,
    "question": "What is the effect of applying a NetworkPolicy that selects no pods?",
    "options": [
      "It has no effect on the cluster",
      "It denies all traffic to and from all pods",
      "It allows all traffic by default",
      "It causes an error in the network plugin",
      "It only affects newly created pods"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "A NetworkPolicy that selects no pods does nothing.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 83,
    "question": "How can you restrict a user to only create resources in a specific namespace?",
    "options": [
      "Assign the user to the cluster-admin role",
      "Use a Role and RoleBinding in that namespace",
      "Modify the kube-apiserver configuration",
      "Create a NetworkPolicy for the user",
      "Set a resource quota on the namespace"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Assigning permissions via Role and RoleBinding restricts user actions to a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 87,
    "question": "What measures can you take to prevent a container from running as the root user in Kubernetes?",
    "options": [
      "Set 'runAsUser: 0' in the security context",
      "Use a Pod Security Policy or Pod Security Admission to enforce non-root user requirements",
      "It is not possible to prevent this",
      "Modify the container image to exclude root user privileges",
      "Set 'allowPrivilegeEscalation: true' in the security context"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "To enhance security, you can use Pod Security Policies (deprecated) or Pod Security Admission (current) to enforce that containers run as non-root users. This prevents potential privilege escalation attacks. Option 1 ('runAsUser: 0') explicitly allows running as root, which is insecure. Option 3 is incorrect because Kubernetes provides mechanisms to enforce non-root users. Option 4 may reduce root privileges but does not enforce non-root execution. Option 5 ('allowPrivilegeEscalation: true') enables privilege escalation, which contradicts the goal of preventing root access.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - Pod Security Standards",
        "url": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
      },
      {
        "name": "Kubernetes Official Documentation - Security Contexts",
        "url": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:58"
  },
  {
    "id": 88,
    "question": "What is the main purpose of Role-Based Access Control (RBAC) in Kubernetes?",
    "options": [
      "To manage network policies",
      "To control user and process access to resources",
      "To schedule pods efficiently",
      "To monitor cluster performance",
      "To provide logging capabilities"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "RBAC manages permissions for users and applications.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 89,
    "question": "Which Kubernetes object is used to define a set of network access rules for pods?",
    "options": [
      "Service",
      "Deployment",
      "Ingress",
      "NetworkPolicy",
      "ConfigMap"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "NetworkPolicy defines networking rules for pods.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 101,
    "question": "What is the function of Kubernetes labels?",
    "options": [
      "To provide human-readable names for resources",
      "To organize and select groups of objects",
      "To store configuration data",
      "To set permissions on resources",
      "To define network policies"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Labels are key/value pairs attached to objects for identification and selection.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 105,
    "question": "How can you create a ConfigMap from a file?",
    "options": [
      "kubectl create configmap my-config --file=config.yaml",
      "kubectl apply configmap my-config --from-file=config.yaml",
      "kubectl create configmap my-config --from-file=config.yaml",
      "kubectl generate configmap my-config config.yaml",
      "kubectl configmap my-config --import=config.yaml"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "This command creates a ConfigMap from the specified file.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 141,
    "question": "How do you create a secret from literal values?",
    "options": [
      "kubectl create secret generic my-secret --from-literal=key1=value1",
      "kubectl create secret generic my-secret key1=value1",
      "kubectl create secret my-secret --literal key1=value1",
      "kubectl create secret tls my-secret --key1 value1",
      "kubectl secret create my-secret key1=value1"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command creates a Secret with key-value pairs from literals.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 142,
    "question": "What is the role of the 'cluster-admin' ClusterRole?",
    "options": [
      "Read-only access to cluster resources",
      "Admin access limited to one namespace",
      "Full control over all resources in the cluster",
      "Access to manage nodes but not pods",
      "Limited to managing storage resources"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The 'cluster-admin' ClusterRole grants full cluster-wide administrative permissions. However, its scope depends on how it is bound to a user or group. When bound via a RoleBinding, its permissions are restricted to the namespace specified in the binding. When bound via a ClusterRoleBinding, it provides full control over all resources in the cluster.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [
      {
        "name": "Kubernetes Documentation - Role-Based Access Control (RBAC)",
        "url": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
      },
      {
        "name": "Kubernetes Documentation - Controlling Access to the Kubernetes API",
        "url": "https://kubernetes.io/docs/concepts/security/controlling-access/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-04 13:36:14"
  },
  {
    "id": 143,
    "question": "Which command can you use to apply a label to a pod?",
    "options": [
      "kubectl label pods <pod-name> key=value",
      "kubectl annotate pods <pod-name> key=value",
      "kubectl tag pods <pod-name> key=value",
      "kubectl set label pods <pod-name> key=value",
      "kubectl edit pods <pod-name> --label key=value"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command applies a label to a pod.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 154,
    "question": "What is the purpose of the 'allowPrivilegeEscalation' securityContext field?",
    "options": [
      "Allows the container to run as root",
      "Controls whether a process can gain more privileges than its parent process",
      "Enables privileged mode for the container",
      "Allows mounting of host directories",
      "Disables all capabilities for the container"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "It controls whether a process can gain additional privileges.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 155,
    "question": "Which Kubernetes object is used to define network traffic rules for Pods?",
    "options": [
      "NetworkPolicy",
      "Ingress",
      "Service",
      "Endpoint",
      "FirewallRule"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "NetworkPolicy defines how Pods can communicate.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 157,
    "question": "Which command can be used to create a new Role in Kubernetes?",
    "options": [
      "kubectl apply role",
      "kubectl create role",
      "kubectl generate role",
      "kubectl new role",
      "kubectl init role"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The command 'kubectl create role' creates a new Role.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 158,
    "question": "In Kubernetes RBAC, which object binds a ClusterRole to all authenticated users?",
    "options": [
      "ClusterRoleBinding",
      "RoleBinding",
      "ClusterRole",
      "ServiceAccount",
      "GroupBinding"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "A ClusterRoleBinding can bind a ClusterRole to all authenticated users.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 160,
    "question": "Which command would you use to encode the string 'admin' to base64?",
    "options": [
      "echo 'admin' | base64",
      "echo 'admin' | encode base64",
      "echo 'admin' | base64encode",
      "base64 'admin'",
      "encode --base64 'admin'"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "It pipes the string through the base64 encoder.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 162,
    "question": "To secure an Ingress with TLS, which type of Kubernetes secret is required?",
    "options": [
      "Opaque",
      "TLS",
      "Docker Registry",
      "Basic Auth",
      "SSH Key"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "A TLS secret contains the certificate and key.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 163,
    "question": "Which command can be used to create a TLS secret named 'tls-secret' using files 'tls.crt' and 'tls.key'?",
    "options": [
      "kubectl create secret generic tls-secret --from-file=tls.crt --from-file=tls.key",
      "kubectl create secret tls tls-secret --cert=tls.crt --key=tls.key",
      "kubectl create secret docker-registry tls-secret --docker-server=tls.crt --docker-username=tls.key",
      "kubectl create tls-secret tls-secret --cert=tls.crt --key=tls.key",
      "kubectl create secret tls-secret --type=tls --cert=tls.crt --key=tls.key"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The proper command uses 'kubectl create secret tls'.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 165,
    "question": "Which field in the Pod spec allows you to specify Linux capabilities for a container?",
    "options": [
      "securityContext.capabilities",
      "spec.capabilities",
      "container.securityContext.capabilities",
      "podSecurityContext.capabilities",
      "linuxOptions.capabilities"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "It is specified under the container's securityContext.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 166,
    "question": "To drop all Linux capabilities in a container, which configuration should be used?",
    "options": [
      "capabilities: {drop: ['ALL']}",
      "capabilities: {add: ['NONE']}",
      "privileged: false",
      "allowPrivilegeEscalation: false",
      "runAsNonRoot: true"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Dropping 'ALL' capabilities removes any extra privileges.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 168,
    "question": "What is the purpose of the 'namespaceSelector' in a NetworkPolicy?",
    "options": [
      "To select namespaces where the policy is applied",
      "To select Pods in specific namespaces for ingress or egress rules",
      "To label namespaces",
      "To deny traffic to certain namespaces",
      "To enforce policies across all namespaces"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The namespaceSelector applies the policy to all pods in the selected namespaces.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 171,
    "question": "Which command can be used to view the audit logs if they are written to '/var/log/kubernetes/audit.log'?",
    "options": [
      "kubectl logs audit",
      "sudo tail -f /var/log/kubernetes/audit.log",
      "kubectl get events --audit",
      "journalctl -u kube-apiserver",
      "kubectl describe audit-logs"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Tail the file with sudo to view audit logs in real-time.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 175,
    "question": "Which field in a container's securityContext prevents processes from gaining elevated privileges?",
    "options": [
      "runAsUser: 0",
      "privileged: false",
      "allowPrivilegeEscalation: false",
      "runAsNonRoot: false",
      "readOnlyRootFilesystem: true"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Setting 'allowPrivilegeEscalation: false' prevents escalation of privileges.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 176,
    "question": "Which Kubernetes resources, if compromised, could lead to significant security breaches and should be audited carefully? (Select all that apply)",
    "options": [
      "Secrets",
      "ConfigMaps",
      "Pods",
      "ServiceAccounts",
      "PersistentVolumes"
    ],
    "correct_answers": [
      0,
      1,
      3
    ],
    "explanation": "Secrets, ConfigMaps, and ServiceAccounts are considered sensitive Kubernetes resources because they often contain confidential information such as credentials, API keys, and configuration data. If compromised, these resources can lead to unauthorized access, privilege escalation, or data breaches. While Pods and PersistentVolumes are important, they are not as directly sensitive as the other three, although they can become so depending on the data they handle.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Auditing",
    "sources": [
      {
        "name": "Kubernetes Documentation - Auditing",
        "url": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
      },
      {
        "name": "Datadog - Key Kubernetes Audit Logs for Monitoring Cluster Security",
        "url": "https://www.datadoghq.com/blog/key-kubernetes-audit-logs-for-monitoring-cluster-security/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 14:18:35"
  },
  {
    "id": 177,
    "question": "Which Kubernetes Admission Controller was deprecated and replaced by Pod Security Admission in Kubernetes version 1.25?",
    "options": [
      "PodSecurityPolicy",
      "NodeRestriction",
      "AlwaysPullImages",
      "NamespaceLifecycle",
      "LimitRanger"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "PodSecurityPolicy was deprecated in Kubernetes version 1.25 and replaced by the Pod Security Admission (PSA) controller. The PSA controller provides a simpler and more flexible way to enforce pod security standards, aligning with Kubernetes' evolving security model. Other options, such as NodeRestriction, AlwaysPullImages, NamespaceLifecycle, and LimitRanger, are not related to this deprecation.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Standards",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - Pod Security Admission",
        "url": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
      },
      {
        "name": "Kubernetes Blog - Deprecation of PodSecurityPolicy",
        "url": "https://kubernetes.io/blog/2021/04/06/podsecuritypolicy-deprecation-past-present-and-future/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 14:07:54"
  },
  {
    "id": 178,
    "question": "Select all that apply: Which Kubernetes object(s) allow you to define a set of rules for validating or mutating admission requests?",
    "options": [
      "ValidatingWebhookConfiguration",
      "MutatingWebhookConfiguration",
      "AdmissionController",
      "CustomResourceDefinition",
      "WebhookPolicy"
    ],
    "correct_answers": [
      0,
      1
    ],
    "explanation": "`ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` are used to integrate admission webhooks that validate or mutate admission requests. Option 2 (`AdmissionController`) is a general term for the mechanism but not a specific Kubernetes object. Option 3 (`CustomResourceDefinition`) is used to define custom resources, and Option 4 (`WebhookPolicy`) is not a valid Kubernetes object.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [
      {
        "name": "Kubernetes Admission Webhooks Documentation",
        "url": "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"
      },
      {
        "name": "Kubernetes API Reference",
        "url": "https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.32/#validatingwebhookconfiguration-v1-admissionregistration-k8s-io"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:58"
  },
  {
    "id": 179,
    "question": "Which field in the Pod spec can you use to disable privilege escalation for all containers in the Pod?",
    "options": [
      "securityContext.allowPrivilegeEscalation: false",
      "spec.containers.securityContext.allowPrivilegeEscalation: false",
      "podSecurityContext.allowPrivilegeEscalation: false",
      "spec.securityContext.allowPrivilegeEscalation: false",
      "metadata.securityContext.allowPrivilegeEscalation: false"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The correct field to disable privilege escalation for all containers in a Pod is 'spec.containers.securityContext.allowPrivilegeEscalation: false'. This must be set individually for each container within the Pod, as there is no global 'allowPrivilegeEscalation' setting at the Pod level.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [
      {
        "name": "Kubernetes Documentation on Security Context",
        "url": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
      },
      {
        "name": "Wiz Kubernetes Security Context Best Practices",
        "url": "https://www.wiz.io/academy/kubernetes-security-context-best-practices"
      },
      {
        "name": "Red Hat Guide to Kubernetes Security Context",
        "url": "https://www.redhat.com/en/blog/guide-to-kubernetes-security-context-pod-security-policy-psp"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-04 12:44:17"
  },
  {
    "id": 181,
    "question": "In a NetworkPolicy, which selector is used to apply the policy to specific Pods?",
    "options": [
      "podSelector",
      "namespaceSelector",
      "policySelector",
      "matchLabels",
      "appSelector"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The 'podSelector' selects the Pods to which the policy applies.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 182,
    "question": "Which field in the NetworkPolicy spec defines allowed egress destinations?",
    "options": [
      "ingress",
      "egress",
      "to",
      "from",
      "destinations"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'egress' field defines allowed egress rules.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 183,
    "question": "Which of the following are valid components of a Kubernetes auditing policy? (Select all that apply)",
    "options": [
      "Rules",
      "Levels",
      "Stages",
      "Users",
      "Verbs"
    ],
    "correct_answers": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Audit policies include rules with stages, users and verbs.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 184,
    "question": "Which 'level' in an audit policy would log metadata but not request bodies?",
    "options": [
      "None",
      "Metadata",
      "Request",
      "RequestResponse",
      "Minimal"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'Metadata' level logs only metadata, not the request bodies.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 188,
    "question": "Which securityContext setting ensures that a container runs with a non-root user?",
    "options": [
      "runAsUser: 0",
      "runAsNonRoot: true",
      "runAsGroup: 0",
      "allowPrivilegeEscalation: false",
      "privileged: false"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Setting 'runAsNonRoot: true' forces the container to run as a non-root user.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 189,
    "question": "Select all that apply: Which command(s) can be used to list all ServiceAccounts in the 'dev' namespace?",
    "options": [
      "kubectl get sa -n dev",
      "kubectl get serviceaccount -A",
      "kubectl get serviceaccounts --namespace=dev",
      "kubectl describe serviceaccounts -n dev",
      "kubectl list sa dev"
    ],
    "correct_answers": [
      0,
      2
    ],
    "explanation": "The commands `kubectl get sa -n dev` and `kubectl get serviceaccounts --namespace=dev` both list all ServiceAccounts in the 'dev' namespace. Option 1 (`kubectl get serviceaccount -A`) lists ServiceAccounts across all namespaces, Option 3 (`kubectl describe serviceaccounts -n dev`) provides detailed information about ServiceAccounts in the 'dev' namespace but does not list them, and Option 4 (`kubectl list sa dev`) is not a valid `kubectl` command.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [
      {
        "name": "Kubernetes Official Documentation",
        "url": "https://kubernetes.io/docs/reference/kubectl/overview/"
      },
      {
        "name": "Kubernetes kubectl Command Reference",
        "url": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:58"
  },
  {
    "id": 190,
    "question": "Which field in the Pod spec allows you to specify a ServiceAccount to use?",
    "options": [
      "serviceAccount",
      "serviceAccountName",
      "accountName",
      "saName",
      "serviceAccountSpec"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'serviceAccountName' field specifies which ServiceAccount the Pod uses.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authentication",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 192,
    "question": "Which Kubernetes object defines cluster-wide roles?",
    "options": [
      "Role",
      "ClusterRole",
      "RoleBinding",
      "ClusterRoleBinding",
      "ServiceAccount"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "ClusterRole defines permissions across the cluster.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 195,
    "question": "Which of the following are common security contexts applied at the Pod level? (Select all that apply)",
    "options": [
      "runAsUser",
      "fsGroup",
      "privileged",
      "capabilities",
      "seLinuxOptions"
    ],
    "correct_answers": [
      0,
      1,
      4
    ],
    "explanation": "These fields are commonly set at the Pod level for security.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 200,
    "question": "Which field in a container's securityContext allows you to add specific Linux capabilities?",
    "options": [
      "addCapabilities",
      "linuxCapabilities",
      "capabilities.add",
      "securityOptions",
      "privilegedCaps"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The 'capabilities.add' list allows you to add specific Linux capabilities.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 204,
    "question": "To enable audit logging in Kubernetes, which flag must be added to the API server configuration?",
    "options": [
      "--audit-log-path",
      "--audit-policy-file",
      "--enable-audit",
      "--audit-log-maxage",
      "--audit-log-format"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The '--audit-log-path' flag enables audit logging by specifying the log file path.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 205,
    "question": "Which of the following are steps to enable audit logging in Kubernetes? (Select all that apply)",
    "options": [
      "Create an audit policy file",
      "Configure the kubelet with audit flags",
      "Add '--audit-policy-file' flag to API server",
      "Restart the kube-controller-manager",
      "Specify '--audit-log-path' in the API server configuration"
    ],
    "correct_answers": [
      0,
      2,
      4
    ],
    "explanation": "Audit logging requires an audit policy file, specifying it in the API server configuration, and setting a log path.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 214,
    "question": "Which Kubernetes resource is used to assign permissions within a namespace to a user or group?",
    "options": [
      "ClusterRole",
      "Role",
      "ClusterRoleBinding",
      "RoleBinding",
      "ServiceAccount"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "A RoleBinding grants the permissions defined in a Role within a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 215,
    "question": "What is the correct 'kind' value for an object that associates a Role with a user?",
    "options": [
      "RoleBinding",
      "ClusterRole",
      "User",
      "Group",
      "RoleAssignment"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "A RoleBinding binds a Role to a user or group within a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 220,
    "question": "Which securityContext field makes a container's root filesystem read-only?",
    "options": [
      "readOnlyFileSystem",
      "readOnlyRootFilesystem",
      "immutableRoot",
      "filesystemReadonly",
      "noWriteFilesystem"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'readOnlyRootFilesystem' field makes the container’s root filesystem read-only.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 221,
    "question": "What is the primary benefit of making a container's root filesystem read-only?",
    "options": [
      "Improved performance",
      "Reduced image size",
      "Enhanced security by preventing writes to the filesystem",
      "Allows containers to share files",
      "Simplifies application deployment"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "A read-only root filesystem prevents unauthorized modifications, enhancing security.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 224,
    "question": "Which NetworkPolicy policyTypes value is used to create a default deny egress policy?",
    "options": [
      "Ingress",
      "Egress",
      "Ingress, Egress",
      "DenyAll",
      "AllowNone"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Setting policyTypes to Egress with no egress rules creates a default deny egress policy.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 225,
    "question": "To create a default deny all traffic NetworkPolicy, what should the 'podSelector' field be set to?",
    "options": [
      "An empty selector '{}'",
      "Select all pods with '*'",
      "Select no pods by omitting 'podSelector'",
      "Set 'podSelector' to 'null'",
      "Specify 'podSelector: denyAll'"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "An empty selector '{}' applies the policy to all pods in the namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 226,
    "question": "Which field in the securityContext marks a container as privileged?",
    "options": [
      "allowPrivilegeEscalation: true",
      "runAsPrivileged: true",
      "privileged: true",
      "privileges: high",
      "capabilities: privileged"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The 'privileged: true' field in the container's securityContext marks it as privileged.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 228,
    "question": "How do you prevent a Pod from automatically mounting a ServiceAccount token?",
    "options": [
      "Set 'mountServiceAccountToken: false' in the Pod spec",
      "Set 'automountServiceAccountToken: false' in the Pod spec",
      "Remove the ServiceAccount from the Pod spec",
      "Set 'serviceAccountName: null' in the Pod spec",
      "Set 'tokenMount: false' in the ServiceAccount"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Setting 'automountServiceAccountToken: false' prevents the token from being mounted automatically.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 229,
    "question": "Why might you disable automounting of ServiceAccount tokens in a Pod?",
    "options": [
      "To reduce memory usage",
      "To prevent unauthorized API access from the Pod",
      "To improve application performance",
      "To enable network policies",
      "To allow multiple ServiceAccounts"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Disabling automounting helps prevent the Pod from having unnecessary API access.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 231,
    "question": "What is the purpose of the ImagePolicyWebhook admission controller?",
    "options": [
      "To scan images for vulnerabilities at runtime",
      "To enforce policies on container images during admission",
      "To provide caching for container images",
      "To update images automatically",
      "To log image pull requests"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "It enforces policies on container images before they are admitted into the cluster.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 232,
    "question": "In an audit policy, which level should be set to log the content of requests and responses?",
    "options": [
      "None",
      "Metadata",
      "Request",
      "RequestResponse",
      "Content"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "The 'RequestResponse' level logs both metadata and content.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 233,
    "question": "How do you specify in an audit policy to log events for all resources in a specific namespace?",
    "options": [
      "Set 'namespace: <namespace>' in the policy rule",
      "Use 'namespaces: [\"<namespace>\"]' under the rule's 'namespaces' field",
      "Add 'resourceNames: [\"<namespace>\"]' to the rule",
      "Set 'level: Namespace' in the policy",
      "Specify 'namespaceSelector: {matchNames: [\"<namespace>\"]}'"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'namespaces' field in the rule specifies which namespaces the rule applies to.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 234,
    "question": "Which command creates a generic secret named 'db-secret' with the key 'password' and value 'S3cr3t!'?",
    "options": [
      "kubectl create secret generic db-secret --password='S3cr3t!'",
      "kubectl create secret db-secret --from-literal='password=S3cr3t!'",
      "kubectl create secret generic db-secret --from-literal=password=S3cr3t!",
      "kubectl create secret tls db-secret --key='S3cr3t!'",
      "kubectl create secret docker-registry db-secret --password='S3cr3t!'"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The correct command is to create a generic secret from a literal.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 235,
    "question": "To read the value of a secret key 'username' from secret 'db-secret' in namespace 'prod', which command can you use?",
    "options": [
      "kubectl get secret db-secret -n prod -o jsonpath='{.data.username}' | base64 --decode",
      "kubectl describe secret db-secret -n prod",
      "kubectl get secret db-secret -n prod -o yaml",
      "kubectl read secret db-secret -n prod --key=username",
      "kubectl decode secret db-secret -n prod --field=username"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "It uses jsonpath to extract and decode the secret value.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 250,
    "question": "Which Kubernetes resource can enforce Pod Security Standards in a namespace?",
    "options": [
      "PodSecurityPolicy",
      "NetworkPolicy",
      "LimitRange",
      "ResourceQuota",
      "Pod Security Admission Controller"
    ],
    "correct_answers": [
      4
    ],
    "explanation": "The Pod Security Admission Controller enforces Pod Security Standards in Kubernetes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 267,
    "question": "Which of the following is a built-in Kubernetes authentication method that is NOT recommended for production use?",
    "options": [
      "Static Token File",
      "OpenID Connect (OIDC)",
      "Service Accounts",
      "Client Certificates",
      "Integrating with cloud provider IAM"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Static Token File authentication is not recommended for production.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authentication",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 268,
    "question": "Which Kubernetes resource is used to define permissions within a namespace?",
    "options": [
      "ClusterRole",
      "ClusterRoleBinding",
      "Role",
      "RoleBinding",
      "ServiceAccount"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "A Role defines permissions within a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 269,
    "question": "In Kubernetes RBAC, what does a 'RoleBinding' do?",
    "options": [
      "Defines cluster-wide permissions",
      "Binds a ClusterRole to a namespace",
      "Binds a Role to subjects within a namespace",
      "Creates a new ServiceAccount",
      "Defines network policies"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "A RoleBinding assigns a Role to users or groups in a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Authorization",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 271,
    "question": "Which admission controller should be used to enforce Pod Security Standards in Kubernetes 1.25 and above?",
    "options": [
      "PodSecurityPolicy",
      "Pod Security Admission Controller",
      "NodeRestriction",
      "ResourceQuota",
      "LimitRanger"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The Pod Security Admission Controller is the recommended method in Kubernetes 1.25+.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 272,
    "question": "In Kubernetes, what is the main reason for using namespaces?",
    "options": [
      "To provide network isolation between different applications.",
      "To group and logically isolate resources such as deployments, services, and pods.",
      "To enforce security policies across the entire cluster.",
      "To manage the lifecycle of persistent storage volumes.",
      "To monitor the overall health and performance of the Kubernetes cluster."
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Namespaces in Kubernetes are primarily used to logically divide a cluster into multiple virtual clusters. This allows teams or projects to operate in isolation from one another within the same physical cluster. While namespaces can be used in conjunction with network policies to provide network isolation, their primary purpose is logical grouping and isolation of Kubernetes resources like pods, services, and deployments. They do not inherently enforce security policies or manage storage volumes directly, nor are they primarily for monitoring cluster health.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Resource Management and Isolation",
    "sources": [
      {
        "name": "Kubernetes Documentation: Namespaces",
        "url": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
      },
      {
        "name": "Aqua Security: Kubernetes Namespaces",
        "url": "https://www.aquasec.com/cloud-native-academy/kubernetes-security/kubernetes-namespaces/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:06:54"
  },
  {
    "id": 274,
    "question": "What is the recommended way to store sensitive data like passwords or tokens in Kubernetes?",
    "options": [
      "Hardcode them in application code",
      "Store them in ConfigMaps",
      "Use Kubernetes Secrets",
      "Store them in environment variables",
      "Include them in container images"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Kubernetes Secrets are specifically designed to securely store sensitive data.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Secrets",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 275,
    "question": "Which Kubernetes resource can enforce network segmentation between Pods?",
    "options": [
      "NetworkPolicy",
      "PodSecurityPolicy",
      "ResourceQuota",
      "LimitRange",
      "Ingress"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "NetworkPolicy defines rules that segment network traffic between Pods.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 276,
    "question": "Why should you avoid running containers with root privileges?",
    "options": [
      "It increases resource consumption",
      "It can lead to security risks by granting unnecessary permissions",
      "It reduces application performance",
      "It prevents containers from accessing the network",
      "It is required by Kubernetes policies"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Running as root increases the risk of privilege escalation and other attacks.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 277,
    "question": "Which security context setting ensures a container runs as a non-root user?",
    "options": [
      "privileged: false",
      "allowPrivilegeEscalation: false",
      "runAsNonRoot: true",
      "readOnlyRootFilesystem: true",
      "capabilities: []"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Setting 'runAsNonRoot: true' ensures the container is not run as root.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 278,
    "question": "What is the purpose of the 'readOnlyRootFilesystem' security context setting?",
    "options": [
      "To prevent the container from accessing the network",
      "To run the container as root",
      "To make the container's root filesystem read-only",
      "To allow privilege escalation",
      "To disable logging"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "It makes the container's root filesystem read-only, reducing the risk of tampering.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 281,
    "question": "In a Kubernetes NetworkPolicy, what does an empty 'podSelector' field signify?",
    "options": [
      "No pods are selected",
      "All pods in the namespace are selected",
      "An error in the policy",
      "Only new pods are selected",
      "It selects pods in all namespaces"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "An empty podSelector applies the policy to every pod in the namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 286,
    "question": "Why is it important to regularly scan container images for vulnerabilities?",
    "options": [
      "To improve application performance",
      "To reduce image size",
      "To ensure images are up-to-date and secure",
      "To comply with licensing requirements",
      "To increase deployment speed"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Regular scanning helps detect and remediate vulnerabilities in images.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 287,
    "question": "Which of the following tools can be used for static analysis of Kubernetes manifests for security issues?",
    "options": [
      "kube-hunter",
      "kubesec",
      "kubectl describe",
      "kubelet",
      "etcdctl"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Kubesec is used for static analysis of manifests for security issues.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Controls and Frameworks",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 292,
    "question": "Why is it recommended to use Kubernetes network policies?",
    "options": [
      "To increase application performance",
      "To enforce network segmentation and limit pod communication",
      "To manage storage volumes",
      "To provide high availability",
      "To automatically scale applications"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Network policies enforce segmentation and improve security.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Policy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 293,
    "question": "What is the main purpose of audit logging in Kubernetes?",
    "options": [
      "To monitor application performance",
      "To track actions taken by the API for security and compliance",
      "To manage network policies",
      "To scale applications automatically",
      "To store container images"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Audit logging tracks API actions for compliance and security monitoring.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 294,
    "question": "Which command enables audit logging by specifying the audit policy file in the API server configuration?",
    "options": [
      "--audit-log-path",
      "--audit-policy-file",
      "--enable-audit",
      "--audit-log-maxage",
      "--audit-log-format"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The '--audit-policy-file' flag is used to point to the audit policy file.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Audit Logging",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 295,
    "question": "In Kubernetes, what is a 'Pod Security Standard'?",
    "options": [
      "A deprecated feature replaced by PodSecurityPolicy",
      "A set of built-in policies to enforce pod security best practices",
      "A network policy configuration",
      "A type of storage class",
      "An admission controller for scheduling pods"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Pod Security Standards are built-in policies to help secure pods.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Standards",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 296,
    "question": "Which of the following are common levels defined by the Pod Security Standards? (Select all that apply)",
    "options": [
      "Privileged",
      "Baseline",
      "Restricted",
      "Unrestricted",
      "Default"
    ],
    "correct_answers": [
      0,
      1,
      2
    ],
    "explanation": "The common levels are Privileged, Baseline, and Restricted.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Standards",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 297,
    "question": "Which Kubernetes resource can be used to manage policies with Open Policy Agent (OPA)?",
    "options": [
      "ValidatingWebhookConfiguration",
      "MutatingWebhookConfiguration",
      "AdmissionController",
      "CustomResourceDefinition",
      "PolicyController"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "ValidatingWebhookConfiguration is used to integrate OPA for policy management.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 298,
    "question": "What is the primary function of Open Policy Agent (OPA) in Kubernetes?",
    "options": [
      "To serve as a container runtime",
      "To enforce policies and make authorization decisions",
      "To provide logging and monitoring capabilities",
      "To manage network routing",
      "To handle storage management"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Open Policy Agent (OPA) is a general-purpose policy engine that evaluates inputs against defined policies to make authorization decisions. In Kubernetes, OPA is commonly used to enforce security and compliance policies on cluster resources. Incorrect options, such as serving as a container runtime, logging, or network management, describe functionalities unrelated to OPA's role.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Pod Security Admissions",
    "sources": [
      {
        "name": "CNCF Blog - Secure Your Kubernetes Environment with OPA and Gatekeeper",
        "url": "https://www.cncf.io/blog/2023/10/09/secure-your-kubernetes-environment-with-opa-and-gatekeeper/"
      },
      {
        "name": "Spacelift Blog - Kubernetes with Open Policy Agent (OPA) & Gatekeeper",
        "url": "https://spacelift.io/blog/opa-kubernetes"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:33:32"
  },
  {
    "id": 299,
    "question": "Which of the following is a benefit of using Namespaces in Kubernetes?",
    "options": [
      "Improves application performance",
      "Provides a mechanism for resource isolation",
      "Simplifies container images",
      "Automatically scales applications",
      "Replaces the need for Pods"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Namespaces allow for logical isolation of resources.",
    "question_type": "single-choice",
    "domain": "Kubernetes Security Fundamentals",
    "subdomain": "Network Isolation and Segmentation",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 6,
    "question": "Which Kubernetes admission controller runs first during the admission control process?",
    "options": [
      "ValidatingAdmissionWebhook",
      "MutatingAdmissionWebhook",
      "ResourceQuota",
      "NamespaceLifecycle",
      "AlwaysPullImages"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The MutatingAdmissionWebhook runs first in the Kubernetes admission control process. This is because mutating admission controllers are designed to modify the incoming request before it is validated by validating admission controllers. Other options, such as ValidatingAdmissionWebhook, ResourceQuota, NamespaceLifecycle, and AlwaysPullImages, either run later in the process or serve different purposes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - Admission Controllers",
        "url": "https://kubernetes.io/blog/2019/03/21/a-guide-to-kubernetes-admission-controllers/"
      },
      {
        "name": "Styra Blog - What Is Kubernetes Admission Control?",
        "url": "https://www.styra.com/blog/what-is-kubernetes-admission-control/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 14:10:18"
  },
  {
    "id": 9,
    "question": "How can you restrict access to the kubelet API?",
    "options": [
      "Disable the kubelet",
      "Use '--authorization-mode=Webhook' and '--authentication-token-webhook=true'",
      "Remove kubelet from the nodes",
      "Only use SSH to access kubelet",
      "Set '--allow-privileged=false'"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "These flags configure the kubelet to use API server authentication and authorization.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 17,
    "question": "How can you update the image of a deployment without altering other configurations?",
    "options": [
      "Edit the deployment YAML file manually",
      "Delete and recreate the deployment",
      "Use 'kubectl set image' command",
      "Scale down the deployment to zero and update",
      "Update the image in the container registry"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "This command updates the image without altering other configurations.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 21,
    "question": "How do you configure Kubernetes to use a specific container runtime like containerd?",
    "options": [
      "Set the runtime in the pod spec",
      "Use '--container-runtime' flag in kubelet",
      "Configure it in the kube-proxy",
      "It's automatically detected; no action needed",
      "Set an environment variable on the master node"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Configuring kubelet with the specific runtime endpoint sets the container runtime.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Runtime",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 25,
    "question": "Which of the following best practices are recommended to secure the Kubernetes scheduler (kube-scheduler)? (Select all that apply.)",
    "options": [
      "Bind the scheduler to 0.0.0.0 to ensure it is accessible from all network interfaces",
      "Use Role-Based Access Control (RBAC) to restrict access to the scheduler API",
      "Run the scheduler as a non-root user to minimize privilege escalation risks",
      "Enable anonymous authentication to simplify access for debugging purposes",
      "Configure network policies to restrict network access to and from the scheduler"
    ],
    "correct_answers": [
      1,
      2,
      4
    ],
    "explanation": "The recommended security measures for securing the kube-scheduler include: using Role-Based Access Control (RBAC) to enforce least privilege, ensuring only authorized entities can interact with the scheduler's API; running the kube-scheduler as a non-root user to reduce potential risks of privilege escalation in case of a compromise; and configuring network policies to restrict unauthorized network access to or from the kube-scheduler, thereby enhancing its security. Binding the scheduler to 0.0.0.0 increases exposure and is not recommended. Similarly, enabling anonymous authentication weakens security by allowing unauthenticated access.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Scheduler",
    "sources": [
      {
        "name": "Kubernetes Documentation - Security Overview",
        "url": "https://kubernetes.io/docs/concepts/security/overview/"
      },
      {
        "name": "Red Hat Blog - Kubernetes Configuration Best Practices",
        "url": "https://www.redhat.com/en/blog/12-kubernetes-configuration-best-practices"
      },
      {
        "name": "Kubernetes RBAC Best Practices",
        "url": "https://www.getambassador.io/blog/kubernetes-rbac-role-based-access-control"
      }
    ],
    "revision": 2,
    "revision_date": "2025-02-06 16:21:38"
  },
  {
    "id": 26,
    "question": "Which controllers are part of the kube-controller-manager? (Select all that apply)",
    "options": [
      "Node Controller",
      "ReplicaSet Controller",
      "Ingress Controller",
      "Cloud Controller",
      "Service Account Controller"
    ],
    "correct_answers": [
      0,
      1,
      4
    ],
    "explanation": "Node Controller, ReplicaSet Controller, and Service Account Controller are part of kube-controller-manager.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 29,
    "question": "How can you improve kubelet security? (Select all that apply)",
    "options": [
      "Enable authentication and authorization",
      "Disable anonymous access",
      "Expose the kubelet read-only port",
      "Use TLS certificates",
      "Run kubelet in privileged mode"
    ],
    "correct_answers": [
      0,
      1,
      3
    ],
    "explanation": "These actions enhance kubelet security by enforcing authentication and encryption.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 34,
    "question": "Which folders on a client machine are sensitive when accessing Kubernetes clusters? (Select all that apply)",
    "options": [
      "/var/log/",
      "~/.kube/config",
      "/etc/hosts",
      "~/.ssh/",
      "/tmp/"
    ],
    "correct_answers": [
      1,
      3
    ],
    "explanation": "~/.kube/config and ~/.ssh/ contain sensitive cluster and SSH access information.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Client Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 36,
    "question": "In managed Kubernetes services, who manages the etcd cluster?",
    "options": [
      "The user manages etcd directly",
      "The cloud provider manages etcd",
      "etcd is not used in managed services",
      "A third-party vendor manages etcd",
      "The Kubernetes community manages etcd"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "In managed services, etcd is managed by the provider.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Etcd",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 37,
    "question": "What types of data are stored inside etcd? (Select all that apply)",
    "options": [
      "Kubernetes cluster state",
      "Persistent application data",
      "Pod logs",
      "Secrets and ConfigMaps",
      "Container images"
    ],
    "correct_answers": [
      0,
      3
    ],
    "explanation": "etcd stores cluster state, including Secrets and ConfigMaps.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Etcd",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 41,
    "question": "Which of the following statements are true about static pods? (Select all that apply)",
    "options": [
      "They are managed by the kubelet",
      "Defined in the API server and stored in etcd",
      "Useful for running critical system components",
      "Automatically rescheduled if the node fails",
      "Can be updated via kubectl commands"
    ],
    "correct_answers": [
      0,
      2
    ],
    "explanation": "Static pods are managed by the kubelet and are useful for critical components.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 42,
    "question": "When you run 'kubectl apply', which Kubernetes component processes the request first?",
    "options": [
      "etcd",
      "kube-scheduler",
      "kube-controller-manager",
      "kube-apiserver",
      "kubelet"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "All kubectl commands interact with the API server first.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 43,
    "question": "What is the primary purpose of the Kubernetes scheduler?",
    "options": [
      "To monitor cluster health",
      "To assign pods to nodes based on resource availability",
      "To manage service discovery",
      "To enforce network policies",
      "To control access to the API server"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The scheduler determines the optimal node for a pod.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Scheduler",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 44,
    "question": "What happens if kube-proxy is in a 'CrashLoopBackOff' state?",
    "options": [
      "Pods cannot be scheduled",
      "Network traffic between services may be disrupted",
      "The cluster shuts down",
      "kubelet stops working",
      "Secrets cannot be accessed"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "kube-proxy manages network rules; its failure affects networking.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "KubeProxy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 56,
    "question": "What is the role of the Service Account Controller in Kubernetes?",
    "options": [
      "Manages authentication tokens for service accounts",
      "Controls access to external services",
      "Assigns network policies to service accounts",
      "Manages the lifecycle of services",
      "Handles scaling of deployments"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The Service Account Controller creates and manages service accounts and their tokens.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 57,
    "question": "Which of the following is NOT a controller managed by the kube-controller-manager?",
    "options": [
      "Node Controller",
      "Endpoint Controller",
      "Ingress Controller",
      "Deployment Controller",
      "Service Account Controller"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The Ingress Controller is not part of the kube-controller-manager; it is deployed separately.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 58,
    "question": "What are some best practices for securing etcd? (Select all that apply)",
    "options": [
      "Enable TLS encryption for communication",
      "Limit access to trusted networks",
      "Use authentication and authorization",
      "Expose etcd endpoints publicly for monitoring",
      "Store backups in a secure location"
    ],
    "correct_answers": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Best practices for securing etcd include enabling TLS, limiting network access, using authentication, and storing backups securely. Exposing etcd publicly is not recommended.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Etcd",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 59,
    "question": "Which Kubernetes component is responsible for persisting cluster state?",
    "options": [
      "kube-scheduler",
      "etcd",
      "kube-controller-manager",
      "kube-proxy",
      "kubelet"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "etcd is the key-value store that persists cluster state.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Etcd",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 61,
    "question": "What could happen if you disable anonymous authentication on the kubelet?",
    "options": [
      "Increased security by requiring authentication",
      "Nodes cannot join the cluster",
      "Pods fail to start",
      "kube-proxy stops working",
      "No effect; kubelet does not support anonymous access"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Disabling anonymous authentication ensures that only authenticated requests are accepted by the kubelet.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 65,
    "question": "What does the kube-apiserver's '--anonymous-auth=false' flag do?",
    "options": [
      "Disables anonymous requests to the API server",
      "Disables authentication entirely",
      "Allows all requests without authentication",
      "Enables anonymous authentication",
      "Forces all clients to use tokens"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Setting '--anonymous-auth=false' ensures that all requests must be authenticated.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 77,
    "question": "Which Kubernetes object can be used to limit the number of concurrent requests to the API server?",
    "options": [
      "ResourceQuota",
      "LimitRange",
      "PodDisruptionBudget",
      "PriorityClass",
      "There is no such object"
    ],
    "correct_answers": [
      4
    ],
    "explanation": "Kubernetes does not have an object to limit API server requests; this is controlled via API server flags.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 80,
    "question": "What is the role of the kube-proxy component?",
    "options": [
      "Managing network policies",
      "Providing service discovery and routing",
      "Scheduling pods to nodes",
      "Storing cluster state",
      "Monitoring node health"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "kube-proxy maintains network rules for services on each node.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "KubeProxy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 81,
    "question": "Which command can you use to check the version of the kube-apiserver?",
    "options": [
      "'kubectl version'",
      "'kubectl get apiserver'",
      "'kube-apiserver --version'",
      "'kubectl cluster-info'",
      "'kubectl describe componentstatus'"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command displays client and server Kubernetes versions.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 82,
    "question": "What is the default service type in Kubernetes if not specified?",
    "options": [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "ExternalName",
      "Ingress"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "If not specified, the default Service type is ClusterIP.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 84,
    "question": "What is the purpose of a PodDisruptionBudget?",
    "options": [
      "To prevent pods from being evicted during maintenance",
      "To limit the number of pods in a namespace",
      "To allocate CPU and memory resources",
      "To define pod scheduling constraints",
      "To enforce network policies"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "PodDisruptionBudget ensures a minimum number of pods remain available during disruptions.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 86,
    "question": "What is the function of the kubelet in Kubernetes?",
    "options": [
      "Managing pod networking",
      "Running containers on each node",
      "Storing cluster configuration",
      "Scheduling pods to nodes",
      "Managing the control plane"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The kubelet starts and manages pods and their containers on nodes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 92,
    "question": "How does Kubernetes ensure that a Deployment has the desired number of replicas?",
    "options": [
      "Through the kube-scheduler",
      "Using the ReplicaSet controller",
      "Via the kubelet on each node",
      "By the API server checking periodically",
      "It does not ensure this automatically"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Deployments use ReplicaSets to ensure the desired number of pod replicas.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 93,
    "question": "Which of the following is NOT a valid Kubernetes Service type?",
    "options": [
      "ClusterIP",
      "NodePort",
      "LoadBalancer",
      "ExternalName",
      "InternalPort"
    ],
    "correct_answers": [
      4
    ],
    "explanation": "InternalPort is not a valid Service type.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 94,
    "question": "What is the function of the '--service-account-key-file' flag in the kube-apiserver?",
    "options": [
      "To specify the key for signing service account tokens",
      "To define the service account used by the API server",
      "To store service account credentials",
      "To encrypt service account Secrets",
      "To disable service accounts"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This flag points to the file used to sign service account tokens.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 95,
    "question": "Which of the following best describes the Kubernetes Ingress resource?",
    "options": [
      "It defines internal networking rules between pods",
      "It manages external access to services, typically HTTP",
      "It is used for storing configuration data",
      "It schedules pods to nodes",
      "It provides persistent storage to pods"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Ingress resources define rules for routing external traffic to services.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 96,
    "question": "How can you force delete a pod that is stuck in terminating state?",
    "options": [
      "'kubectl delete pod <pod-name>'",
      "Restart the kubelet service",
      "'kubectl delete pod <pod-name> --force --grace-period=0'",
      "Delete the node where the pod is running",
      "Edit the pod's YAML and remove the finalizers"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "This command forcefully deletes a pod stuck in terminating state.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 97,
    "question": "What does the 'kubectl config use-context' command do?",
    "options": [
      "Switches the active namespace",
      "Changes the current kubeconfig file",
      "Modifies the cluster's context",
      "Sets the current context in kubeconfig",
      "Updates the API server endpoint"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "This command switches the active context in your kubeconfig.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Client Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 98,
    "question": "Which command lists all pods in all namespaces?",
    "options": [
      "'kubectl get pods'",
      "'kubectl get pods --all'",
      "'kubectl get pods -A'",
      "'kubectl get pods --namespaces'",
      "'kubectl get all-pods'"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The '-A' flag lists resources in all namespaces.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Client Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 99,
    "question": "What is the primary function of a ReplicaSet in Kubernetes?",
    "options": [
      "To ensure that a specified number of pod replicas are running at all times",
      "To expose services to external traffic using load balancing",
      "To store persistent data for applications",
      "To define and enforce network policies for pods",
      "To schedule pods to specific nodes based on resource requirements"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "A ReplicaSet in Kubernetes ensures that a specified number of pod replicas are running at all times. It monitors existing pods and creates or deletes them as needed to maintain the desired state. Incorrect options: (1) Exposing services to external traffic is handled by Services, not ReplicaSets. (2) Persistent data storage is managed by PersistentVolumes and PersistentVolumeClaims. (3) Network policies are defined separately using NetworkPolicy resources. (4) Scheduling pods to specific nodes is handled by the Kubernetes Scheduler.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - ReplicaSet",
        "url": "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/"
      },
      {
        "name": "Kubernetes Concepts - Workloads and Controllers",
        "url": "https://kubernetes.io/docs/concepts/workloads/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:38"
  },
  {
    "id": 102,
    "question": "How can you scale a deployment named 'my-deployment' to 5 replicas?",
    "options": [
      "kubectl scale deployment my-deployment --replicas=5",
      "kubectl update deployment my-deployment --replicas=5",
      "kubectl set deployment my-deployment replicas=5",
      "kubectl resize deployment my-deployment 5",
      "kubectl deploy my-deployment --replicas=5"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command scales the deployment to the specified number of replicas.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 103,
    "question": "Which component is responsible for maintaining network rules on nodes?",
    "options": [
      "kubelet",
      "kube-proxy",
      "kube-scheduler",
      "kube-controller-manager",
      "etcd"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "kube-proxy maintains network rules on nodes for services.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "KubeProxy",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 104,
    "question": "What does a DaemonSet ensure in Kubernetes?",
    "options": [
      "A pod runs on all nodes or a subset of nodes",
      "Only one pod runs in the cluster",
      "Pods are automatically scaled based on load",
      "Services are exposed externally",
      "ConfigMaps are synchronized across namespaces"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "DaemonSets ensure that a copy of a pod runs on selected nodes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 106,
    "question": "What is the default behavior when a container in a pod crashes?",
    "options": [
      "The pod is deleted",
      "Kubernetes does nothing",
      "The kubelet restarts the container",
      "An alert is sent to the administrator",
      "The node is drained"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The kubelet will restart containers in a pod if they crash.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 107,
    "question": "Which of the following commands updates an image in a deployment?",
    "options": [
      "kubectl set image deployment/my-deployment my-container=my-image:tag",
      "kubectl update image deployment/my-deployment my-container=my-image:tag",
      "kubectl replace image deployment/my-deployment my-container=my-image:tag",
      "kubectl change image deployment/my-deployment my-container=my-image:tag",
      "kubectl edit deployment my-deployment"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command updates the image for the specified container in a deployment.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 108,
    "question": "How can you taint a node to prevent pods from being scheduled on it?",
    "options": [
      "kubectl cordon <node-name>",
      "kubectl drain <node-name>",
      "kubectl taint nodes <node-name> key=value:NoSchedule",
      "kubectl label nodes <node-name> unschedulable=true",
      "kubectl delete node <node-name>"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "Tainting a node prevents pods without a matching toleration from being scheduled on it.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 109,
    "question": "What is the purpose of the 'kubeadm' tool?",
    "options": [
      "To manage container images",
      "To bootstrap Kubernetes clusters",
      "To monitor cluster health",
      "To deploy applications to the cluster",
      "To manage network policies"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "'kubeadm' simplifies the process of setting up a Kubernetes cluster.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 111,
    "question": "How do you delete a namespace and all its resources?",
    "options": [
      "kubectl delete all --namespace=<namespace>",
      "kubectl delete namespace <namespace>",
      "kubectl remove namespace <namespace>",
      "kubectl clean namespace <namespace>",
      "kubectl purge namespace <namespace>"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Deleting a namespace removes it and all resources within it.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 112,
    "question": "What is the purpose of the 'kubectl exec' command in Kubernetes?",
    "options": [
      "Executes a command on the Kubernetes control plane",
      "Runs a command inside a container in a pod",
      "Creates a new pod in the cluster",
      "Updates an existing deployment",
      "Deletes a Kubernetes resource"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "'kubectl exec' is used to execute a command inside a running container within a Kubernetes pod. This is particularly useful for debugging or interacting with applications running inside containers. For example, you can use it to access logs or run shell commands within the container. Other options are incorrect because:\n- Option 0: Commands are not executed on the control plane using 'kubectl exec'.\n- Option 2: It does not create new pods; 'kubectl run' or deployment manifests are used for that.\n- Option 3: Updating deployments is done using 'kubectl apply' or 'kubectl set'.\n- Option 4: Deleting resources is handled by 'kubectl delete'.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod Management",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - kubectl exec",
        "url": "https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#exec"
      },
      {
        "name": "Kubernetes Basics - Debugging Applications",
        "url": "https://kubernetes.io/docs/tutorials/kubernetes-basics/debug-application/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:38"
  },
  {
    "id": 113,
    "question": "How can you expose a deployment 'my-deployment' as a service?",
    "options": [
      "kubectl expose deployment my-deployment",
      "kubectl service deployment my-deployment",
      "kubectl create service my-deployment",
      "kubectl generate service my-deployment",
      "kubectl map service my-deployment"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command creates a Service exposing the deployment.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 114,
    "question": "What is the function of a Horizontal Pod Autoscaler (HPA)?",
    "options": [
      "Automatically scales nodes",
      "Scales pods based on CPU utilization",
      "Schedules pods to nodes",
      "Balances network traffic",
      "Manages storage volumes"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "HPA adjusts the number of pod replicas based on resource metrics.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 116,
    "question": "What is the purpose of an Ingress Controller?",
    "options": [
      "To expose services outside the cluster using HTTP/HTTPS",
      "To manage internal pod communication",
      "To store and manage secrets",
      "To schedule pods to nodes",
      "To provide persistent storage"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Ingress Controllers manage external access to services via HTTP/HTTPS.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 117,
    "question": "How do you label a node with key 'env' and value 'production'?",
    "options": [
      "kubectl label node <node-name> env:production",
      "kubectl label nodes <node-name> env=production",
      "kubectl annotate node <node-name> env=production",
      "kubectl set label node <node-name> env=production",
      "kubectl tag node <node-name> env=production"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "This command adds a label to the specified node.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 118,
    "question": "Which resource would you use to run a one-time task in Kubernetes?",
    "options": [
      "Deployment",
      "StatefulSet",
      "DaemonSet",
      "Job",
      "ReplicaSet"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "A Job creates one or more pods to perform a task and ensures they complete successfully.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 119,
    "question": "How can you get a list of all contexts in your kubeconfig?",
    "options": [
      "kubectl config get-contexts",
      "kubectl get contexts",
      "kubectl config view",
      "kubectl context list",
      "kubectl list contexts"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command lists all available contexts in your kubeconfig.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Client Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 120,
    "question": "What is the effect of setting 'terminationGracePeriodSeconds' to zero in a pod spec?",
    "options": [
      "The pod will terminate immediately without graceful shutdown",
      "The pod will never terminate",
      "The pod will have infinite time to terminate",
      "The setting is ignored by Kubernetes",
      "The pod will terminate after 30 seconds"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Setting 'terminationGracePeriodSeconds' to zero forces immediate termination.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 121,
    "question": "Which Kubernetes object manages stateful applications?",
    "options": [
      "Deployment",
      "StatefulSet",
      "ReplicaSet",
      "DaemonSet",
      "Job"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "StatefulSets manage applications requiring stable storage and network identities.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 122,
    "question": "How can you create a namespace called 'dev'?",
    "options": [
      "kubectl create namespace dev",
      "kubectl apply namespace dev",
      "kubectl generate namespace dev",
      "kubectl make namespace dev",
      "kubectl new namespace dev"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command creates a new namespace named 'dev'.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 123,
    "question": "What command can you use to edit a resource directly in your editor?",
    "options": [
      "kubectl change <resource>",
      "kubectl update <resource>",
      "kubectl edit <resource>",
      "kubectl modify <resource>",
      "kubectl adjust <resource>"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The 'edit' command opens the resource's configuration in your default editor.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Client Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 125,
    "question": "How can you port-forward a local port to a port on a pod?",
    "options": [
      "kubectl port-forward <pod-name> <local-port>:<pod-port>",
      "kubectl forward-port <pod-name> <local-port>:<pod-port>",
      "kubectl tunnel <pod-name> <local-port>:<pod-port>",
      "kubectl proxy <pod-name> --port=<local-port>",
      "kubectl connect <pod-name> --port=<local-port>"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command forwards a local port to a port on a pod.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 126,
    "question": "What is the purpose of a PersistentVolumeClaim?",
    "options": [
      "To request storage resources from the cluster",
      "To define storage classes",
      "To monitor disk usage",
      "To create a new volume",
      "To delete unused volumes"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "PersistentVolumeClaims request storage resources defined by PersistentVolumes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Storage",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 129,
    "question": "Which resource is used for long-running, persistent workloads with stable network identity and storage?",
    "options": [
      "Deployment",
      "Job",
      "StatefulSet",
      "DaemonSet",
      "ReplicaSet"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "StatefulSets manage applications requiring stable storage and network identities.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Storage",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 130,
    "question": "What is the default behavior if a pod's container exceeds its memory limit?",
    "options": [
      "The container is throttled",
      "The container is terminated",
      "The pod is moved to another node",
      "Kubernetes does nothing",
      "Additional memory is allocated"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Exceeding memory limits typically results in the container being terminated (OOMKilled).",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 131,
    "question": "How can you list all resources in a namespace?",
    "options": [
      "kubectl get all --namespace=<namespace>",
      "kubectl get resources --namespace=<namespace>",
      "kubectl describe namespace <namespace>",
      "kubectl list namespace <namespace>",
      "kubectl get all <namespace>"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command lists all resources in the specified namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 132,
    "question": "What does the 'kubectl rollout undo' command do?",
    "options": [
      "Deletes the deployment",
      "Rolls back to the previous revision",
      "Pauses the deployment",
      "Scales down the deployment",
      "Updates the deployment to a new version"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'rollout undo' command reverts a deployment to its previous state.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 134,
    "question": "What is a common use case for a Kubernetes CronJob?",
    "options": [
      "Running a database",
      "Serving web traffic",
      "Scheduling regular tasks",
      "Managing network policies",
      "Providing persistent storage"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "CronJobs schedule Jobs to run at specified times.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 136,
    "question": "Which command would you use to delete a deployment called 'my-app'?",
    "options": [
      "kubectl remove deployment my-app",
      "kubectl delete deployment my-app",
      "kubectl destroy deployment my-app",
      "kubectl erase deployment my-app",
      "kubectl terminate deployment my-app"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "This command deletes the specified deployment.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Controller Manager",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 137,
    "question": "What is the function of a Kubernetes Service of type 'NodePort'?",
    "options": [
      "Exposes the service on a static port on each node's IP",
      "Load balances traffic across multiple services",
      "Exposes the service externally using a cloud provider's load balancer",
      "Maps the service to an external name",
      "Provides internal cluster DNS resolution"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "A NodePort Service exposes the service on the same port across all nodes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 138,
    "question": "How can you check the cluster's Kubernetes version?",
    "options": [
      "kubectl version",
      "kubectl get version",
      "kubectl cluster-info",
      "kubectl describe cluster",
      "kubectl info"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "This command shows the client and server versions of Kubernetes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 139,
    "question": "What is the purpose of the 'kubectl config' command?",
    "options": [
      "To configure Kubernetes cluster settings",
      "To manage kubeconfig files",
      "To update deployment configurations",
      "To set node configurations",
      "To modify pod specifications"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "'kubectl config' commands are used to view and modify kubeconfig settings.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Client Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 145,
    "question": "What is the function of a Kubernetes Ingress resource?",
    "options": [
      "To manage internal cluster networking",
      "To define rules for external HTTP and HTTPS routing",
      "To provide storage to pods",
      "To schedule pods to nodes",
      "To configure network policies"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Ingress resources control external access to services over HTTP/HTTPS.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 147,
    "question": "How can you enable debug logging for the kubelet?",
    "options": [
      "Set '--v=4' in the kubelet startup arguments",
      "Use 'kubectl debug kubelet'",
      "Modify the kubelet configuration file and set 'logLevel: debug'",
      "Restart kubelet with '--debug=true'",
      "It's not possible to enable debug logging"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Increasing the verbosity level enables debug logging for the kubelet.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 148,
    "question": "Which command allows you to create a pod directly from an image?",
    "options": [
      "kubectl create pod <pod-name> --image=<image>",
      "kubectl run <pod-name> --image=<image>",
      "kubectl new pod <pod-name> --image=<image>",
      "kubectl pod <pod-name> --image=<image>",
      "kubectl deploy pod <pod-name> --image=<image>"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'kubectl run' command creates a deployment or pod from an image.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 149,
    "question": "What is the effect of running 'kubectl drain <node-name>'?",
    "options": [
      "It deletes the node from the cluster",
      "It marks the node as unschedulable and evicts all pods",
      "It restarts the node",
      "It upgrades the node's Kubernetes version",
      "It cleans up unused images on the node"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "Draining a node prepares it for maintenance by evicting pods and preventing new ones.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Kubelet",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 152,
    "question": "When configuring etcd encryption for secrets, which Kubernetes component's configuration must be updated?",
    "options": [
      "kube-scheduler",
      "kube-controller-manager",
      "kubelet",
      "kube-apiserver",
      "etcd"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "The kube-apiserver must be updated with the encryption configuration file.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 153,
    "question": "Which field in the Pod spec is used to specify the container runtime class?",
    "options": [
      "runtime",
      "runtimeClassName",
      "containerRuntime",
      "runtimeClass",
      "containerRuntimeClass"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The 'runtimeClassName' field specifies which RuntimeClass to use.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Runtime",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 161,
    "question": "Which Kubernetes resource is used to define external access to services, typically HTTP?",
    "options": [
      "Ingress",
      "Service",
      "Endpoint",
      "NetworkPolicy",
      "LoadBalancer"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "An Ingress resource exposes HTTP and HTTPS routes from outside the cluster.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Networking",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 167,
    "question": "Which admission controller ensures that kubelets can only modify their own Node and Pod objects?",
    "options": [
      "NodeRestriction",
      "LimitRanger",
      "NamespaceLifecycle",
      "ResourceQuota",
      "PodSecurityPolicy"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The NodeRestriction admission controller limits kubelet modifications to their own Node and Pod objects.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 172,
    "question": "Which of the following are common steps in hardening the Kubernetes API server? (Select all that apply)",
    "options": [
      "Disable anonymous authentication",
      "Enable RBAC authorization",
      "Allow all admission controllers",
      "Enable etcd encryption for secrets",
      "Use insecure port for API communication"
    ],
    "correct_answers": [
      0,
      1,
      3
    ],
    "explanation": "Disabling anonymous auth, enabling RBAC, and using etcd encryption are best practices.",
    "question_type": "multiple-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 173,
    "question": "Which component is responsible for scheduling Pods onto nodes?",
    "options": [
      "kube-controller-manager",
      "kube-scheduler",
      "kube-apiserver",
      "kubelet",
      "etcd"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The kube-scheduler assigns Pods to nodes.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Scheduler",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 174,
    "question": "In Kubernetes, which resource allows multiple containers to share the same network stack, enabling them to communicate using 'localhost'?",
    "options": [
      "Deployment",
      "DaemonSet",
      "Pod",
      "Service",
      "StatefulSet"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "A Pod in Kubernetes is the smallest deployable unit that can host one or more containers. Containers within the same Pod share the same network stack, including the same IP address and port space. This allows them to communicate with each other using 'localhost'. Other resources like Deployment, DaemonSet, Service, and StatefulSet are higher-level abstractions that manage Pods but do not define such shared networking behavior directly.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - Pods",
        "url": "https://kubernetes.io/docs/concepts/workloads/pods/"
      },
      {
        "name": "Kubernetes Networking Concepts",
        "url": "https://kubernetes.io/docs/concepts/cluster-administration/networking/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 16:21:38"
  },
  {
    "id": 180,
    "question": "Which command would you use to label a namespace 'production' with 'env=prod'?",
    "options": [
      "kubectl label namespace env=prod production",
      "kubectl label namespace production env=prod",
      "kubectl annotate namespace production env=prod",
      "kubectl label namespaces env=prod production",
      "kubectl set label namespace production env=prod"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The correct command is 'kubectl label namespace production env=prod'.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Client Security",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 193,
    "question": "Which command would you use to delete all pods in a namespace 'test'?",
    "options": [
      "kubectl delete pods --all -n test",
      "kubectl delete pod -A",
      "kubectl delete pods -n test",
      "kubectl remove pods --namespace=test",
      "kubectl delete pods * -n test"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The command deletes all pods in the 'test' namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 198,
    "question": "Which Kubernetes object can be used to persist data across the lifecycle of a Pod?",
    "options": [
      "PersistentVolume",
      "ConfigMap",
      "Secret",
      "PersistentVolumeClaim",
      "EmptyDir"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "A PersistentVolume is a cluster resource that holds data independently of pod lifecycles.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Storage",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 202,
    "question": "If the API server is not responding, which file should you check for possible misconfigurations?",
    "options": [
      "/var/log/kube-apiserver.log",
      "/etc/kubernetes/manifests/kube-scheduler.yaml",
      "/etc/kubernetes/manifests/kube-apiserver.yaml",
      "/etc/kubernetes/config/apiserver.conf",
      "/var/lib/kubelet/config.yaml"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The API server's static pod manifest is usually located at '/etc/kubernetes/manifests/kube-apiserver.yaml'.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 208,
    "question": "According to the CIS Kubernetes Benchmark, which of the following settings should be disabled on the kube-apiserver for security?",
    "options": [
      "Anonymous authentication",
      "RBAC authorization",
      "TLS encryption",
      "Admission controllers",
      "Audit logging"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "Anonymous authentication should be disabled per CIS Benchmarks.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 209,
    "question": "Which flag disables anonymous authentication in the kube-apiserver?",
    "options": [
      "--disable-anonymous-auth",
      "--anonymous-auth=false",
      "--enable-auth=false",
      "--no-anonymous",
      "--deny-anonymous"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The '--anonymous-auth=false' flag disables anonymous requests.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 230,
    "question": "Which API server flag enables the ImagePolicyWebhook admission controller?",
    "options": [
      "--enable-admission-plugins=ImagePolicyWebhook",
      "--admission-control=ImagePolicyWebhook",
      "--admission-plugins=ImagePolicyWebhook",
      "--enable-image-policy",
      "--image-policy-webhook=true"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The '--enable-admission-plugins=ImagePolicyWebhook' flag enables the ImagePolicyWebhook admission controller.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 238,
    "question": "Which Kubernetes object allows you to specify the use of a custom runtime like gVisor?",
    "options": [
      "Runtime",
      "RuntimeClass",
      "PodSecurityPolicy",
      "SecurityContext",
      "ContainerRuntime"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "'RuntimeClass' specifies the container runtime to use.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Runtime",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 239,
    "question": "In a Pod spec, how do you specify that it should use the gVisor runtime class?",
    "options": [
      "Set 'runtime: gvisor'",
      "Set 'securityContext: {runtimeClassName: \"gvisor\"}'",
      "Set 'runtimeClassName: \"gvisor\"' at the Pod spec level",
      "Set 'containerRuntime: \"gvisor\"' in the container spec",
      "Annotate the Pod with 'runtimeClass: gvisor'"
    ],
    "correct_answers": [
      2
    ],
    "explanation": "The 'runtimeClassName' field at the Pod spec level specifies which RuntimeClass to use.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Container Runtime",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 263,
    "question": "Which component of Kubernetes is responsible for storing cluster data, including secrets?",
    "options": [
      "kube-apiserver",
      "kube-scheduler",
      "kubelet",
      "etcd",
      "kube-controller-manager"
    ],
    "correct_answers": [
      3
    ],
    "explanation": "etcd is the key-value store for cluster data.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Etcd",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 280,
    "question": "Which command can be used to create a namespace named 'production'?",
    "options": [
      "kubectl create namespace production",
      "kubectl new namespace production",
      "kubectl apply namespace production",
      "kubectl init namespace production",
      "kubectl generate namespace production"
    ],
    "correct_answers": [
      0
    ],
    "explanation": "The command 'kubectl create namespace production' creates the namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "API Server",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 282,
    "question": "In a Kubernetes cluster, which component is responsible for assigning pods to specific nodes based on resource requirements and constraints?",
    "options": [
      "kube-apiserver",
      "kube-scheduler",
      "kubelet",
      "kube-controller-manager",
      "etcd"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "The kube-scheduler is the component in Kubernetes responsible for scheduling pods onto nodes. It evaluates the resource requirements of the pods (e.g., CPU, memory) and matches them with the available resources on nodes. Other components, such as kube-apiserver, handle API requests; kubelet manages node-level operations; kube-controller-manager handles controllers; and etcd is the key-value store for cluster data.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Scheduler",
    "sources": [
      {
        "name": "Kubernetes Official Documentation - Scheduler",
        "url": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
      },
      {
        "name": "Kubernetes Components Overview",
        "url": "https://kubernetes.io/docs/concepts/overview/components/"
      }
    ],
    "revision": 1,
    "revision_date": "2025-02-06 13:57:04"
  },
  {
    "id": 285,
    "question": "What is the main purpose of the Kubernetes 'LimitRange' resource?",
    "options": [
      "To limit the number of namespaces",
      "To set default resource requests and limits for pods in a namespace",
      "To restrict network access between pods",
      "To control access to the Kubernetes API",
      "To define storage classes"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "A LimitRange sets default resource limits within a namespace.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Pod",
    "sources": [],
    "revision": 0,
    "revision_date": null
  },
  {
    "id": 291,
    "question": "Which Kubernetes resource is used to request persistent storage for a Pod?",
    "options": [
      "PersistentVolume",
      "PersistentVolumeClaim",
      "StorageClass",
      "VolumeMount",
      "ConfigMap"
    ],
    "correct_answers": [
      1
    ],
    "explanation": "A PersistentVolumeClaim requests storage resources provided by a PersistentVolume.",
    "question_type": "single-choice",
    "domain": "Kubernetes Cluster Component Security",
    "subdomain": "Storage",
    "sources": [],
    "revision": 0,
    "revision_date": null
  }
]

                 👨‍💻 Developer
                       │
                       │ git push
                       ▼
                ┌─────────────┐
                │   GitHub    │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │   Jenkins   │
                │    CI/CD    │
                └──────┬──────┘
                       │
              ┌────────┴────────┐
              ▼                 ▼
        Build / Test       Docker Build
                                │
                                ▼
                         ┌─────────────┐
                         │  DockerHub  │
                         └──────┬──────┘
                                │
                                ▼
                         ┌─────────────┐
                         │   AWS EC2   │
                         │             │
                         │ ┌─────────┐ │
                         │ │Frontend │ │
                         │ │Container│ │
                         │ └────┬────┘ │
                         │      │      │
                         │ ┌────▼────┐ │
                         │ │ Backend │ │
                         │ │Container│ │
                         │ └────┬────┘ │
                         └──────┼──────┘
                                │
                                ▼
                         MongoDB Atlas

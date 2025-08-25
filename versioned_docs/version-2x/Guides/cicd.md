---
sidebar_position: 6
---

# CI/CD
**qavajs**, is CI/CD agnostic and can be executed in any environment that satisfies following requirements:
- [nodejs](https://nodejs.org/en) > 20
- installed browsers (for UI testing)

## General Approach for qavajs in CI/CD:
The core idea for integrating qavajs into any CI/CD pipeline is to execute a command that runs your qavajs tests. This usually involves:

- Checkout Code: Get your qavajs project from the repository.
- Install Dependencies: Run npm install (or yarn install) to install all project dependencies, including qavajs and its related packages.
- Set up Environment (if needed): Configure any environment variables required for your tests (e.g., BASE_URL, API keys).
- Run Tests: Execute the qavajs test command, typically defined in your package.json scripts (e.g., npm test).
- Generate Reports: Configure qavajs to generate reports (e.g., HTML, JUnit XML) that can be published or viewed within the CI/CD system.
- Publish Test Results (optional but recommended): Upload generated reports to the CI/CD platform's test reporting features for better visibility.

## GitHub Actions
GitHub Actions uses YAML files (.github/workflows/*.yml) to define workflows.

Example qavajs-tests.yml workflow:

```yaml
name: qavajs E2E Tests

on:
  workflow-dispatch:

jobs:
  run-qavajs-tests:
    runs-on: ubuntu-latest # Or windows-latest, macos-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22' # Use your preferred Node.js version

      - name: Install dependencies
        run: npm install

      - name: Install Google Chrome (for UI tests)
        run: |
          sudo apt-get update
          sudo apt-get install -y google-chrome-stable

      - name: Run qavajs tests
        run: npm test # Or whatever script you define in package.json to run your qavajs tests
        env:
          # Example of setting environment variables
          # BASE_URL: ${{ secrets.BASE_URL }}
          # Some other variable: 'value'

      - name: Upload test results (e.g., JUnit XML)
        if: always() # Run this step even if previous steps fail
        uses: actions/upload-artifact@v4
        with:
          name: qavajs-test-results
          path: ./reports/junit-report.xml # Adjust path to your generated report
```

## Azure DevOps Pipelines
Azure DevOps uses YAML files (azure-pipelines.yml) for pipelines.

Example azure-pipelines.yml:

```yaml
trigger:
- main
- develop

pool:
  vmImage: 'ubuntu-latest' # Or 'windows-latest', 'macOS-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '22.x' # Use your preferred Node.js version
  displayName: 'Install Node.js'

- script: |
    npm install
  displayName: 'Install Dependencies'

- script: |
    sudo apt-get update
    sudo apt-get install -y google-chrome-stable
  displayName: 'Install Google Chrome'
  condition: eq(variables['Agent.OS'], 'Linux') # Only run on Linux agents

- script: |
    npm test # Or your qavajs test command
  displayName: 'Run qavajs Tests'
  env:
    # Example of setting environment variables
    # BASE_URL: $(BASE_URL) # Use pipeline variables or variable groups
    # Some other variable: 'value'

- task: PublishTestResults@2
  inputs:
    testResultsFormat: 'JUnit'
    testResultsFiles: '**/junit-report.xml' # Adjust path to your generated report
    mergeResults: true
    failTaskOnFailedTests: true # Fail the pipeline if tests fail
  displayName: 'Publish Test Results'

- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: 'reports' # Path to your reports directory
    artifactName: 'qavajsTestReports'
  displayName: 'Publish qavajs Reports'
```

## GitLab CI/CD
GitLab CI/CD uses a .gitlab-ci.yml file at the root of your repository.

Example .gitlab-ci.yml:

```yaml
stages:
  - test

variables:
  # Example of setting global environment variables
  # BASE_URL: "http://your-app.com"

test_qavajs:
  stage: test
  image: node:22 # Use a Node.js image
  before_script:
    - apt-get update && apt-get install -y google-chrome-stable # Install Chrome if needed
    - npm install
  script:
    - npm test # Your qavajs test command
  artifacts:
    when: always
    reports:
      junit: "**/junit-report.xml" # Path to your JUnit report
    paths:
      - reports/ # Path to your reports directory (e.g., HTML reports)
```

## Jenkins
Jenkins uses a Jenkinsfile (Groovy script) for Pipeline as Code.

Example Jenkinsfile (Declarative Pipeline):

```groovy
pipeline {
    agent {
        docker {
            image 'node:22' // Use a Node.js Docker image
            args '-v /tmp:/tmp' // Mount host volume if needed for browser setup
        }
    }
    // Alternatively, for a Freestyle project, configure build steps directly in the UI.
    // For a traditional agent:
    // agent any

    environment {
        # Example of setting environment variables
        # BASE_URL = 'http://your-app.com'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Install Chrome (if needed)') {
            steps {
                script {
                    // Commands to install Google Chrome on the agent
                    // This will depend on the base OS of your Jenkins agent or Docker image
                    // For Debian/Ubuntu based systems in a Docker image:
                    sh '''
                        apt-get update && apt-get install -y \
                        wget \
                        gnupg \
                        apt-transport-https \
                        ca-certificates && \
                        wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
                        echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
                        apt-get update && \
                        apt-get install -y google-chrome-stable
                    '''
                    // For other OS, adapt the commands.
                }
            }
        }

        stage('Run qavajs Tests') {
            steps {
                script {
                    sh 'npm test' // Your qavajs test command
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                script {
                    // Assuming qavajs generates a JUnit XML report
                    junit '**/junit-report.xml' // Path to your JUnit report
                }
                // Publish other artifacts like HTML reports
                archiveArtifacts artifacts: 'reports/**/*', fingerprint: true
            }
        }
    }

    post {
        always {
            // Clean up any temporary files or directories if needed
            script {
                echo 'Cleaning up workspace...'
            }
        }
        success {
            echo 'qavajs tests completed successfully!'
        }
        failure {
            echo 'qavajs tests failed!'
        }
    }
}
```
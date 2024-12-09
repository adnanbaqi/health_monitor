# GPU Health Monitor

## Overview

The GPU Health Monitor is a tool designed to provide real-time information about connected GPUs in a network. This tool is particularly useful for system administrators, developers, and users who want to monitor the health and performance of GPUs across multiple machines.

## Features

- **Real-time Monitoring**: The monitor continuously fetches and displays real-time information about connected GPUs.
  
- **Detailed GPU Information**: Gain insights into GPU model, temperature, usage, memory details, and more.

- **Network Connectivity**: Monitor GPUs across the network, making it easy to keep an eye on multiple machines from a central location.

## Running the Monitor on a WSL Env 

1. Clone the repository:
   ```bash
   git clone https://github.com/immutableai/health_monitor.git
   ```

2. Navigate to the project directory:
   ```bash
   cd health_monitor
   ```
   
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask Server or Run the Gunicorn Server
   ```bash
   flask run --host=0.0.0.0 --port=5000
   ```
   ```bash
   gunicorn app:app --bind 0.0.0.0:8389 --worker-class gthread --threads 10 --timeout 120 --reload
   ```
   
5. Access the Web Browser
   ```bash
   http://localhost:5000
   ```
   ```bash
   http://localhost:8389
   ```
      

## Alternate Usage ( More RELIABLE )

<details>
<summary><b>Running with Docker</b></summary>

```bash
git clone https://github.com/immutableai/health_monitor.git
cd health_monitor
docker-compose up --build -d
```
</details>


O: Explore real-time GPU information And usage across the network.

## Dependencies

- Python 3.x
- Flask
- NVIDIA System Management Interface (nvidia-smi)
- Bitsandbytes V0.41.1 For Petals Main Branch
- Bitsandbytes V0.44.1 For Petals Custom Repo --- adnanbaqi/petals

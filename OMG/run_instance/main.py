from google.cloud import compute_v1
from google.auth import compute_engine

def run_instance(request):
    # Authenticate and create a compute client
    credentials = compute_engine.Credentials()
    compute_client = compute_v1.ComputeClient(credentials=credentials)

    # Set the project and zone for the virtual machine
    project = 'finalproject-da52a'
    zone = 'us-east1'
    instance_name = 'instance-1'

    # Define the request body to start the instance
    request_body = {
        "project": project,
        "zone": zone,
        "instance": instance_name,
    }

    # Send the start request
    compute_client.instances().start(**request_body).execute()

    return 'Virtual machine started successfully.'
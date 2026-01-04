
# Minimal Python HTTP service (no external deps)
# Listens on 0.0.0.0:8000 and responds to GET /

from http.server import BaseHTTPRequestHandler, HTTPServer

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"status":"ok","service":"python-service","message":"Hello from Docker!"}')

    # Suppress default logging noise in container
    def log_message(self, format, *args):
        return

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 8000), Handler)
    print('Python service listening on http://0.0.0.0:8000')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    server.server_close()


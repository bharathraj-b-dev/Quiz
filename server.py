"""Run:  python server.py   then open http://localhost:8000"""
import http.server, socketserver, os, webbrowser
PORT = 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))
with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    print(f"Quiz running at http://localhost:{PORT}  (Ctrl+C to stop)")
    webbrowser.open(f"http://localhost:{PORT}")
    httpd.serve_forever()

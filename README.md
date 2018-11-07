# Ghost-Pyazo Storage Adapter

Ghost Pyazo Adapter for Storage

## Getting Started

Setup ghost-pyazo for Ghost

```
sudo apt-get install git
cd [ghost's install directory]
mkdir -p content/adapters/storage
cd content/adapters/storage
git clone https://github.com/KeirDavis1/ghost-pyazo
cd ghost-pyazo
npm install
```

Add the following to your configuration file:

```
"storage": {
  "active": "ghost-pyazo",
  "ghost-pyazo": {
    "uploadEndpoint": "https://pyazosite/upload/"
  }
}
```

Restart Ghost to switch to the new adapters.

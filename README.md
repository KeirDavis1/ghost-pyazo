# Ghost-Pyazo Storage Adapter

Ghost Pyazo Adapter for Storage

## Getting Started

Clone this repository into ghost's content/adapters folder.

```
cd [ghost's content directory]
mkdir -p adapters/storage
cd adapters/storage
git clone https://github.com/KeirDavis1/ghost-pyazo
cd ghost-pyazo
npm install
```

Add the following to your configuration file:

```
"storage": {
	"active": "ghost-pyazo",
	"ghost-pyazo": {
		"uploadEndpoint": "https://localhost:5000/upload",
		"username": "pyazouser"
	}
}
```

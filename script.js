const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const analysis = document.getElementById('analysis');
    
    const jobKeywords = ['javascript', 'react', 'node.js', 'api', 'frontend'];

    uploadZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
      uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadZone.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    });

    uploadZone.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) handleFile(file);
    });

    function handleFile(file) {
      if (!file.name.match(/\.(pdf|docx?)$/i)) {
        alert('Please upload a valid resume file (PDF, DOC, or DOCX).');
        return;
      }

      uploadZone.innerHTML = '<div class="upload-icon">⌛</div><h3>Analyzing...</h3>';
      
      setTimeout(() => {
        const mockData = {
          text: 'Sample resume with javascript and frontend experience',
          skills: ['javascript', 'html', 'css', 'frontend']
        };
        analyzeResume(mockData);
      }, 1500);
    }

    function analyzeResume(data) {
      const matchScore = calculateScore(data.skills);
      const suggestions = generateSuggestions(data.skills);
      
      document.getElementById('matchScore').textContent = matchScore;
      document.getElementById('progressFill').style.width = `${matchScore}%`;
      
      const matchLabel = document.getElementById('matchLabel');
      matchLabel.textContent = getMatchLabel(matchScore);
      matchLabel.style.background = getMatchColor(matchScore);
      
      const suggestionsHtml = suggestions.map(s => 
        `<div class="suggestion-item">${s}</div>`
      ).join('');
      
      document.getElementById('suggestions').innerHTML = suggestionsHtml;
      analysis.style.display = 'block';
      
      uploadZone.innerHTML = `
        <div class="upload-icon">✓</div>
        <h3>Resume Analyzed</h3>
        <p style="margin: 1rem 0; opacity: 0.7">Drop another file to analyze</p>
      `;
    }

    function calculateScore(skills) {
      const matches = jobKeywords.filter(k => 
        skills.includes(k.toLowerCase())
      ).length;
      return Math.round((matches / jobKeywords.length) * 100);
    }

    function generateSuggestions(skills) {
      const missing = jobKeywords.filter(k => 
        !skills.includes(k.toLowerCase())
      );
      return missing.map(skill => 
        `Consider adding experience with ${skill} to better match the job requirements.`
      );
    }

    function getMatchLabel(score) {
      if (score >= 80) return 'Excellent Match';
      if (score >= 60) return 'Good Match';
      if (score >= 40) return 'Fair Match';
      return 'Needs Improvement';
    }

    function getMatchColor(score) {
      if (score >= 80) return 'rgba(34, 197, 94, 0.2)';
      if (score >= 60) return 'rgba(234, 179, 8, 0.2)';
      if (score >= 40) return 'rgba(249, 115, 22, 0.2)';
      return 'rgba(239, 68, 68, 0.2)';
    }
